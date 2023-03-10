
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXoiepgNmYm5w6lVmPHMN9UUSrgxQpwd4",
    authDomain: "whats-app-clone-41618.firebaseapp.com",
    projectId: "whats-app-clone-41618",
    storageBucket: "whats-app-clone-41618.appspot.com",
    messagingSenderId: "1061088344436",
    appId: "1:1061088344436:web:73556db35cd42766bd1421",
    measurementId: "G-YPQFRHEJB2"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;