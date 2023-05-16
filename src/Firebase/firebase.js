// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.cars_apiKey ,
  authDomain:import.meta.cars_authDomain ,
  projectId:import.meta.cars_projectId ,
  storageBucket:import.meta.cars_storageBucket ,
  messagingSenderId:import.meta.cars_messagingSenderId ,
  appId:import.meta.cars_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;