# Firebase Security Rules Setup Instructions

## 🔥 Firestore Database Rules

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `upward-fd63d`
3. **Navigate to**: Firestore Database → Rules
4. **Replace existing rules** with the content from `firebase-security-rules.txt` (Firestore section)
5. **Click "Publish"**

## 📁 Firebase Storage Rules

1. **In Firebase Console**, navigate to: Storage → Rules
2. **Replace existing rules** with the content from `firebase-security-rules.txt` (Storage section)
3. **Click "Publish"**

## 🔐 Current Security Settings

### Firestore Rules:
- ✅ **Public read access** for website content
- ✅ **Public write access** for CMS content (admin functionality)
- ✅ **Public create access** for contact forms
- ✅ **Authenticated access** for managing submissions

### Storage Rules:
- ✅ **Public read access** for images
- ✅ **Public upload access** for CMS images
- ✅ **10MB file size limit**
- ✅ **Image files only** (JPEG, PNG, GIF, WebP)

## 🚨 Important Notes

1. **These rules are permissive** for development and CMS functionality
2. **For production**, consider adding proper authentication
3. **Test the rules** after applying them
4. **Monitor usage** to prevent abuse

## 🧪 Testing the Rules

After applying the rules, test:

1. **Text editing** - Should work in admin mode
2. **Image uploads** - Should work via URL or file upload
3. **Contact forms** - Should submit successfully
4. **Public access** - Website should load normally

## 🔧 Troubleshooting

If issues persist:

1. **Check browser console** for specific error messages
2. **Verify Firebase project ID** matches in config
3. **Ensure rules are published** (not just saved)
4. **Clear browser cache** and try again
5. **Check Firebase quota limits**

## 📞 Support

If you continue having issues:
- Check the browser developer console for specific error messages
- Verify your Firebase project configuration
- Ensure you have the correct project permissions