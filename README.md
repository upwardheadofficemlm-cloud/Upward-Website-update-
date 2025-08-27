# Upward Marketing Agency Website

A modern, responsive website for Upward Marketing Agency built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Professional UI with advanced animations and effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Contact Forms**: Firebase-integrated contact and training inquiry forms
- **Service Pages**: Detailed pages for all marketing services
- **Portfolio Showcase**: Interactive portfolio with case studies
- **Team Profiles**: Meet the team section with social links
- **Training Center**: Course information and enrollment forms

## Firebase Integration

The website uses Firebase Firestore to store:
- Contact form submissions
- Training course inquiries
- User engagement data

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Update the Firebase configuration in `src/config/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

4. Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to contacts collection
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    // Allow read/write access to training_inquiries collection
    match /training_inquiries/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## Data Structure

### Contact Submissions
```typescript
{
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  timeline?: string;
  source: 'contact' | 'training' | 'general';
  createdAt: Timestamp;
  status: 'new' | 'contacted' | 'closed';
}
```

### Training Inquiries
```typescript
{
  name: string;
  email: string;
  phone: string;
  course: string;
  source: 'training';
  createdAt: Timestamp;
  status: 'new' | 'contacted' | 'closed';
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Firebase** - Backend services and database
- **Lucide React** - Modern icon library

## Contact Form Features

- **Real-time Validation**: Email format and required field validation
- **Loading States**: Visual feedback during submission
- **Error Handling**: Graceful error handling with user feedback
- **Reference IDs**: Unique reference IDs for tracking submissions
- **Multiple Sources**: Different forms tracked by source type

## Admin Features

To view contact submissions, you can use the `getContactSubmissions` function:

```typescript
import { getContactSubmissions } from './services/contactService';

// Get recent submissions
const submissions = await getContactSubmissions(50);
console.log(submissions);
```

## Deployment

The website can be deployed to:
- **Vercel** (Recommended for React apps)
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

Make sure to set up environment variables for Firebase configuration in your deployment platform.