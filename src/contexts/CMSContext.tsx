import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';

interface CMSContent {
  id: string;
  type: 'text' | 'image' | 'html';
  content: string;
  alt?: string;
  updatedAt: Date;
}

interface CMSContextType {
  content: { [key: string]: CMSContent };
  isEditing: boolean;
  isAdmin: boolean;
  updateContent: (id: string, newContent: string, type?: 'text' | 'image' | 'html', alt?: string) => Promise<void>;
  uploadImage: (id: string, file: File, alt?: string) => Promise<void>;
  toggleEditing: () => void;
  login: (password: string) => boolean;
  logout: () => void;
  loading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<{ [key: string]: CMSContent }>({});
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Admin password (in production, use proper authentication)
  const ADMIN_PASSWORD = 'Upward103999@@';

  useEffect(() => {
    // Always load content from cache or Firebase to ensure data persistence
    const cachedContent = sessionStorage.getItem('cms_content_cache');
    if (cachedContent) {
      try {
        const parsed = JSON.parse(cachedContent);
        console.log('📦 Using cached content from sessionStorage');
        setContent(parsed);
        setLoading(false);
        
        // Also load fresh data from Firebase in background
        loadContent();
      } catch (e) {
        console.log('❌ Failed to parse cached content, loading from Firebase');
        loadContent();
      }
    } else {
      loadContent();
    }
    
    // Check if user is already logged in
    const adminStatus = localStorage.getItem('upward_admin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      console.log('🔄 Loading content...');
      
      // Try to load from sessionStorage first
      const cachedContent = sessionStorage.getItem('cms_content_cache');
      if (cachedContent) {
        try {
          const parsed = JSON.parse(cachedContent);
          console.log('📦 Using cached content from sessionStorage');
          setContent(parsed);
          setLoading(false);
          return;
        } catch (e) {
          console.log('❌ Failed to parse cached content, loading from Firebase');
        }
      }
      
      // Try to load content from Firebase
      try {
        const contentCollection = collection(db, 'cms_content');
        const snapshot = await getDocs(contentCollection);
        
        const loadedContent: { [key: string]: CMSContent } = {};
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log('📄 Loading document:', doc.id, data);
          loadedContent[doc.id] = {
            id: doc.id,
            type: data.type || 'html',
            content: data.content || '',
            alt: data.alt || '',
            updatedAt: data.updatedAt?.toDate() || new Date()
          };
        });
        
        console.log('✅ Loaded content from Firebase:', Object.keys(loadedContent).length, 'items');
        console.log('🔑 Content keys:', Object.keys(loadedContent));
        
        // Merge with existing content to preserve any local changes
        setContent(prevContent => {
          const mergedContent = { ...prevContent, ...loadedContent };
          console.log('🔄 Merged content:', Object.keys(mergedContent).length, 'total items');
          
          // Cache merged content in sessionStorage
          sessionStorage.setItem('cms_content_cache', JSON.stringify(mergedContent));
          
          return mergedContent;
        });
      } catch (firebaseError) {
        console.error('❌ Firebase content loading failed:', firebaseError);
        console.error('🔒 This is likely a permissions issue. Check Firebase rules.');
        // Don't clear content on error - keep existing content
        if (Object.keys(content).length === 0) {
          setContent({});
        }
      }
    } catch (error) {
      console.error('❌ Critical error loading content:', error);
      if (Object.keys(content).length === 0) {
        setContent({});
      }
    } finally {
      setLoading(false);
    }
  };


  const updateContent = async (id: string, newContent: string, type: 'text' | 'image' | 'html' = 'html', alt?: string) => {
    try {
      console.log('💾 Updating content:', { id, type, contentLength: newContent.length, alt });
      
      // Validate content
      if (!newContent || newContent.trim() === '') {
        throw new Error('Content cannot be empty');
      }

      const contentData: CMSContent = {
        id,
        type,
        content: newContent,
        alt: alt || '',
        updatedAt: new Date()
      };

      // Update local state first for immediate feedback
      setContent(prev => ({
        ...prev,
        [id]: contentData
      }));

      try {
        // Update Firebase
        const docRef = doc(db, 'cms_content', id);
        
        // First check if we can read from Firebase
        console.log('🔍 Testing Firebase connection...');
        try {
          await getDoc(docRef);
          console.log('✅ Firebase connection successful');
        } catch (connectionError) {
          console.error('❌ Firebase connection failed:', connectionError);
          throw new Error('Cannot connect to Firebase. Check your internet connection and Firebase rules.');
        }
        
        const firebaseData = {
          id,
          type,
          content: newContent,
          alt: alt || '',
          updatedAt: new Date(),
          createdAt: new Date() // Add createdAt for new documents
        };
        
        console.log('💾 Saving to Firebase:', firebaseData);
        await setDoc(docRef, firebaseData, { merge: true });
        
        console.log('✅ Content updated successfully in Firebase:', id);
        
        // Verify the save by reading it back
        console.log('🔍 Verifying save...');
        const savedDoc = await getDoc(docRef);
        if (savedDoc.exists()) {
          console.log('✅ Verified saved content:', savedDoc.data());
        } else {
          console.error('❌ Document was not saved properly - this indicates a rules issue');
          throw new Error('Content did not save to Firebase. Check Firebase rules.');
        }
        
      } catch (firebaseError) {
        console.error('❌ Firebase update failed, content saved locally:', firebaseError);
        console.error('🔒 This is likely a permissions issue. Apply the Firebase rules from CRITICAL_FIRESTORE_RULES_FIX.txt');
        throw new Error(`Firebase save failed: ${firebaseError.message}. Content saved locally but won't persist after refresh.`);
      }

      console.log('✅ Content update completed:', id);
    } catch (error) {
      console.error('❌ Error updating content:', error);
      throw error;
    }
  };

  const uploadImage = async (id: string, file: File, alt?: string) => {
    try {
      console.log('🖼️ Starting image upload:', { id, fileName: file.name, fileSize: file.size, fileType: file.type, alt });
      
      // Validate file
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type.toLowerCase())) {
        throw new Error('Please select an image file (JPG, PNG, GIF, WebP)');
      }

      if (file.size > 10 * 1024 * 1024) {
        throw new Error('Image size must be less than 10MB');
      }

      // Create a unique filename
      const timestamp = Date.now();
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || 'png';
      const filename = `${id}_${timestamp}.${fileExtension}`;
      const imageRef = ref(storage, `cms_images/${filename}`);
      
      console.log('📁 Uploading to path:', `cms_images/${filename}`);

      // Upload the file
      console.log('📤 Uploading file to Firebase Storage...');
      const uploadResult = await uploadBytes(imageRef, file);
      console.log('✅ File uploaded successfully:', uploadResult.metadata.fullPath);
      
      // Get download URL
      console.log('🔗 Getting download URL...');
      const downloadURL = await getDownloadURL(imageRef);
      console.log('✅ Download URL obtained:', downloadURL);

      // Update content with new image URL
      console.log('💾 Saving image URL to CMS...');
      await updateContent(id, downloadURL, 'image', alt);
      
      console.log('🎉 Image upload completed successfully');
    } catch (error) {
      console.error('❌ Error uploading image:', error);
      
      // Provide more specific error messages
      if (error.code === 'storage/unauthorized') {
        throw new Error('Upload failed: Unauthorized. Check Firebase Storage rules.');
      } else if (error.code === 'storage/quota-exceeded') {
        throw new Error('Upload failed: Storage quota exceeded.');
      } else if (error.code === 'storage/retry-limit-exceeded') {
        throw new Error('Upload failed: Network error. Please try again.');
      } else if (error.message) {
        throw new Error(`Upload failed: ${error.message}`);
      } else {
        throw new Error('Upload failed: Unknown error occurred.');
      }
    }
  };

  const toggleEditing = () => {
    if (!isAdmin) return;
    setIsEditing(!isEditing);
    console.log('Edit mode toggled:', !isEditing);
  };

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('upward_admin', 'true');
      console.log('Admin login successful');
      return true;
    }
    console.log('Admin login failed');
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setIsEditing(false);
    localStorage.removeItem('upward_admin');
    console.log('Admin logout successful');
  };

  return (
    <CMSContext.Provider value={{
      content,
      isEditing,
      isAdmin,
      updateContent,
      uploadImage,
      toggleEditing,
      login,
      logout,
      loading
    }}>
      {children}
    </CMSContext.Provider>
  );
};