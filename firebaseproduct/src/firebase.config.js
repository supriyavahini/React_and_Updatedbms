import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKKnFdvoXdBcm83OWfWUAbVMnaz-hsJzc",
  authDomain: "fir-products-7c3da.firebaseapp.com",
  projectId: "fir-products-7c3da",
  storageBucket: "fir-products-7c3da.appspot.com",
  messagingSenderId: "993886497326",
  appId: "1:993886497326:web:66a5105934c038703a8dbf",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
