
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyCXoiepgNmYm5w6lVmPHMN9UUSrgxQpwd4",
    authDomain: "whats-app-clone-41618.firebaseapp.com",
    projectId: "whats-app-clone-41618",
    storageBucket: "whats-app-clone-41618.appspot.com",
    messagingSenderId: "1061088344436",
    appId: "1:1061088344436:web:73556db35cd42766bd1421",
    measurementId: "G-YPQFRHEJB2"
  };

  
 
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


export { provider, auth };
export default db;