import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVX4rYjrXJa-1xm_reenlc6y2KzVDBScI",
  authDomain: "reactjs-project-fa29f.firebaseapp.com",
  projectId: "reactjs-project-fa29f",
  storageBucket: "reactjs-project-fa29f.appspot.com",
  messagingSenderId: "145063176766",
  appId: "1:145063176766:web:d3c572d95e167c2114ff6f",
  measurementId: "G-RGNH09D5GK"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const colRefUsers = collection(firebaseDB, "users");
export const colRefMissions = collection(firebaseDB, "missions");
export const colRefPresents = collection(firebaseDB, "presents");
export const colRefMessages = collection(firebaseDB, "messages");
// export const colRefMessengerCount = collection(firebaseDB, "messengerCount");
export const colRefMessageCount = collection(firebaseDB, "messageCount");
export const colRefUserMission = collection(firebaseDB, "UserMission");
export default firebaseApp;