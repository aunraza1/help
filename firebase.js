// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK7l5qH8Zc-bjLWsiUw980gG-WEcV5K1U",
  authDomain: "car-parking-a5a8d.firebaseapp.com",
  projectId: "car-parking-a5a8d",
  storageBucket: "car-parking-a5a8d.appspot.com",
  messagingSenderId: "706370692325",
  appId: "1:706370692325:web:77ddc9f07ebd6b6b8e600c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
