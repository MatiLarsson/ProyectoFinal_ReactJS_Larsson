/* import { toast, Slide } from "react-toastify"; */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs, Timestamp, addDoc } from "firebase/firestore/lite";

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

export async function submitOrder(order) {

  const date = Timestamp.now()
  const timestampedOrder = { ...order, date }
  const ordersCollection = collection(firestoreDB, 'orders')
  const sentOrder = await addDoc(ordersCollection, timestampedOrder)
  return(sentOrder.id)
}


/* .then(() => {
  toast.success('Finalizó la compra con éxito', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide
  })
})
.catch((err) => {
  toast.error('Ocurrió un error al finalizar la compra', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide
  }) */

export async function getOrderById(id) {

  const ordersCollection = collection(firestoreDB, 'orders')

  const docref = doc(ordersCollection, id)

  const orderSnapshot = await getDoc(docref)

  return { ...orderSnapshot.data(), id: orderSnapshot.id }
}

export async function getCurrentDate() {

  const currentDate = Timestamp.now()

  return currentDate
}