import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-UDgPtjC7KHiX4Cnp0KGQc25yTLC_kng",
  authDomain: "practico3-7ea37.firebaseapp.com",
  projectId: "practico3-7ea37",
  storageBucket: "practico3-7ea37.appspot.com",
  messagingSenderId: "250255419144",
  appId: "1:250255419144:web:c61750f385be4f29e12ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const conexion = getFirestore(app);
const auth = getAuth();
export { app, auth };
