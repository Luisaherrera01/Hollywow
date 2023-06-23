import { initializeApp } from "firebase/app";
//Aqui estoy inicializando desde el firebase,lo debo importar asi conecto el proyecto con la BD de fireStore
import{getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBDMMbNbEiuzs4vRNUSjqyc3pr-KqPoyME",
    authDomain: "crud-cliente-77f47.firebaseapp.com",
    projectId: "crud-cliente-77f47",
    storageBucket: "crud-cliente-77f47.appspot.com",
    messagingSenderId: "218679475386",
    appId: "1:218679475386:web:47dd7467d94f7408c85683"
  };
// Initialize Firebase,luego debo decirle que es lo que voy a trabajar definiendo una constante y pasandola como parametro de app. El archivo dataBase es la variable que me permite conectar y generar las funcionalidades, como esta en archivos separador debo exportarlos (existen dos formas)
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)