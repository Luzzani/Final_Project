import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase.config";

export async function setUserFirestore(userInfo) {
  try {
    const docRef = doc(firestore, `usuarios/${userInfo.uid}`);
    await setDoc(docRef, {
      ...userInfo,
      uid: userInfo.uid,
      isAdmin: false,
      email: userInfo.email,
    });
  } catch (error) {
    console.log("Failed to send data to firestore", error);
  }
}
