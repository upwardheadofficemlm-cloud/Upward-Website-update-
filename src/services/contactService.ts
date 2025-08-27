import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  timeline?: string;
  source: 'contact' | 'training' | 'general';
}

export interface StoredContactData extends ContactFormData {
  id: string;
  createdAt: any;
  status: 'new' | 'contacted' | 'closed';
}

// Submit contact form to Firebase
export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    
    console.log('Contact form submitted with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw new Error('Failed to submit contact form. Please try again.');
  }
};

// Get all contact submissions (for admin use)
export const getContactSubmissions = async (limitCount: number = 50): Promise<StoredContactData[]> => {
  try {
    const q = query(
      collection(db, 'contacts'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const contacts: StoredContactData[] = [];
    
    querySnapshot.forEach((doc) => {
      contacts.push({
        id: doc.id,
        ...doc.data()
      } as StoredContactData);
    });
    
    return contacts;
  } catch (error) {
    console.error('Error fetching contact submissions: ', error);
    throw new Error('Failed to fetch contact submissions.');
  }
};

// Submit training inquiry
export const submitTrainingInquiry = async (formData: any): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'training_inquiries'), {
      ...formData,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    
    console.log('Training inquiry submitted with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting training inquiry: ', error);
    throw new Error('Failed to submit training inquiry. Please try again.');
  }
};