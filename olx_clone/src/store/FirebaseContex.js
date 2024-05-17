import { createContext } from "react";
import { Firebase, auth } from "../firebase/config";

export const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ firebase: Firebase, auth }}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
