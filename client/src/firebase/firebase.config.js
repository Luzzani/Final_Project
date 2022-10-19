// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp-EcTOzg83SN5hKWGmT_Vp_DgxmONSxw",
  authDomain: "usuarios-roles-admin.firebaseapp.com",
  projectId: "usuarios-roles-admin",
  storageBucket: "usuarios-roles-admin.appspot.com",
  messagingSenderId: "485597709456",
  appId: "1:485597709456:web:1045c7e361fc398c98c415",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
