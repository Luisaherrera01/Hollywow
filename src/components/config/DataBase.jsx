import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v1 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAJFLbe6RJmuICgLxtN6ajNkfxiOKAzyzU",
  authDomain: "hollywow-201f1.firebaseapp.com",
  projectId: "hollywow-201f1",
  storageBucket: "hollywow-201f1.appspot.com",
  messagingSenderId: "1003826852243",
  appId: "1:1003826852243:web:fd4206bf6e50848a5d7866",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const storage = getStorage(app);

export const subirImagen = async (image) => {
  const subirImagen = ref(storage, v1());
  await uploadBytes(subirImagen, image);
  const urlImg = await getDownloadURL(subirImagen);

  return urlImg;
};

export const subirImagenBoveda = async (imagen) => {
  const subirImagen = ref(storage, v1());
  await uploadBytes(subirImagen, imagen);
  const urlImgBoveda = await getDownloadURL(subirImagen);

  return urlImgBoveda;
};