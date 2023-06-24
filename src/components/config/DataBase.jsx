import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDxP20-0cmc0k_YKuMpqhtiOK-GLE_hhlk",
    authDomain: "crud-hollywow.firebaseapp.com",
    projectId: "crud-hollywow",
    storageBucket: "crud-hollywow.appspot.com",
    messagingSenderId: "787988661276",
    appId: "1:787988661276:web:fa51cd9a3f8009d04e4bd9"
  };

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)