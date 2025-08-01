import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const createTrashReport = async (reportData: any) => {
  const docRef = await addDoc(collection(db, 'trashReports'), reportData);
  return docRef.id;
};