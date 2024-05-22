import { createContext, useEffect, useState } from "react";
import { Firebase, auth, firestore } from "../firebase/config";

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
      <FirebaseContext.Provider value={{ Firebase, auth, firestore }}>
        {children}
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};
export default FirebaseProvider;

// const FirebaseProvider = ({ children }) => (
//   <FirebaseContext.Provider value={{ Firebase, auth, firestore }}>
//     {children}
//   </FirebaseContext.Provider>
// );
// export default FirebaseProvider;

// export default function Context({ children }) {
//   const [user, setUser] = useState("Salaha");
//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// }
