//import from  firebase
import { initializeApp, getApps, cert } from "firebase-admin/app";
//import my credentials to connect to firebase
import { getFirestore } from "firebase.admin/firestore";
//credentials
import myCredentials from "../credentials.js";

//write  a  function to connect to firebase
export default function connectDb() {
  //check if  connected
  if (getApps().length === 0) {
    //if not connect
    initializeApp({
      credential: cert(myCredentials),
    });
  }
  //either ...
  //return the connection to firestore
  return getFirestore();
}
