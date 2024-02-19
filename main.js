
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAB9UVoc0KHUHCoGlkufT0tOXH7b6lQ9CM",
  authDomain: "contoh-proyek-698a3.firebaseapp.com",
  projectId: "contoh-proyek-698a3",
  storageBucket: "contoh-proyek-698a3.appspot.com",
  messagingSenderId: "110434315568",
  appId: "1:110434315568:web:104ab61d642c7d435dacf5",
  measurementId: "G-4EY8T0GE38"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarproduk(){
  const refDokumen = Collection(db,"produk");
  const kuery = query(refDokumen, orderBy("nama"));
  const cuplikanKuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikanKuery.forEach((dok) => {
    hasil.push({ id: dok.id,nama:dok.data().nama,
    harga:dok.data().harga,
    stok:dok.data().stok,
    });
  });
  
  return hasil;
}