import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE3AZfFYFFugvXdlDF22FIz_9xGAZzbgw",
    authDomain: "twitter-clone-d1872.firebaseapp.com",
    projectId: "twitter-clone-d1872",
    storageBucket: "twitter-clone-d1872.appspot.com",
    messagingSenderId: "1031874314919",
    appId: "1:1031874314919:web:9998119a6a6fc843f01182",
    measurementId: "G-HE3EDTB959"
  };

//   Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export default app;
  export { db, storage };