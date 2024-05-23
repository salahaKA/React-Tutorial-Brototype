import { createContext, useEffect, useState } from "react";
import { Firebase, auth, firestore, storage } from "../firebase/config";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <FirebaseContext.Provider value={{ Firebase, auth, firestore, storage }}>
        {children}
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};
export default FirebaseProvider;
