import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    serverTimestamp,
    query,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

export const fetchItems = async (collectionName) => {
    try {
        const ref = collection(db, collectionName);
        const q = query(ref);
        const querySnapshot = await getDocs(q);

        const items = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                timestamp: data.timestamp || new Date(0), 
            };
        });

        return items.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
        console.error(`Error fetching items from ${collectionName}:`, error);
        return [];
    }
};

export const fetchItemById = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id, ...docSnap.data() } : null;
    } catch (error) {
        console.error(`Error fetching item from ${collectionName}:`, error);
    }
};


export const addItem = async (collectionName, item) => {
    try {
        const ref = collection(db, collectionName);
        await addDoc(ref, {
            ...item,
            timestamp: serverTimestamp(),
        });
        console.log('Item added successfully');
    } catch (error) {
        console.error(`Error adding item to ${collectionName}:`, error);
    }
};

export const updateItem = async (collectionName, id, item) => {
    try {
        const itemRef = doc(db, collectionName, id);
        await updateDoc(itemRef, {
            ...item,
            timestamp: serverTimestamp(),
        });
        console.log('Item updated successfully');
    } catch (error) {
        console.error(`Error updating item in ${collectionName}:`, error);
    }
};


export const deleteItem = async (collectionName, id) => {
 
    try {
        const itemRef = doc(db, collectionName, id);
        await deleteDoc(itemRef);
        console.log('Item deleted successfully');
    } catch (error) {
        console.error(`Error deleting item from ${collectionName}:`, error);
    }
};
