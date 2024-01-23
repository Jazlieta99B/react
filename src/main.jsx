import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCkZKruwnCjRm_b0X4iUdJtNQdWi4lVXU",
  authDomain: "violetcrochet-cf696.firebaseapp.com",
  projectId: "violetcrochet-cf696",
  storageBucket: "violetcrochet-cf696.appspot.com",
  messagingSenderId: "986595201201",
  appId: "1:986595201201:web:7d8a7b92a190b1b15c9290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider >
  </React.StrictMode>,
)
