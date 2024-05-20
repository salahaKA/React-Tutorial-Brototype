import { createContext } from "react";
import { Firebase, auth, firestore } from "../firebase/config";

export const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ Firebase, auth, firestore }}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
