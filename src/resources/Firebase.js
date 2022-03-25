import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDyjya1Z149ZlKJ9wo5d1xFcMYMyiCw-t4",
    authDomain: "coderhouse-reactjs-larsson.firebaseapp.com",
    projectId: "coderhouse-reactjs-larsson",
    storageBucket: "coderhouse-reactjs-larsson.appspot.com",
    messagingSenderId: "654737837444",
    appId: "1:654737837444:web:10ee58e52ed1a704a161d1"
  };

  const app = initializeApp(firebaseConfig);

  export const firestoreDB = getFirestore(app);

  export async function getItems() {

    const itemsCollection = collection(firestoreDB, 'products')

    const itemsSnapshot = await getDocs(itemsCollection)

    return itemsSnapshot.docs.map(item => {
      return { ...item.data(), id: item.id }
    })
  }

  export async function getItemsByCategory(category) {

    const itemsCollection = collection(firestoreDB, 'products')

    const categoryQuery = query(itemsCollection, where('category', '==', category))

    const itemsSnapshot = await getDocs(categoryQuery)

    return itemsSnapshot.docs.map(item => {
      return { ...item.data(), id: item.id }
    })
  }

  export async function getItem(id) {

    const itemsCollection = collection(firestoreDB, 'products')

    const docref = doc(itemsCollection, id)

    const itemSnapshot = await getDoc(docref)

    return { ...itemSnapshot.data(), id: itemSnapshot.id }
  }