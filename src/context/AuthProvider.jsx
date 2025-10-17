import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./firebase.init";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const registerUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }

  const userInfo = {
    loading,
    registerUser,
    loginUser
  };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
