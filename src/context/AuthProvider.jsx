import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null); 
    const googleProvider = new  GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const registerUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser =()=>{
      setLoading(true)
      return signOut(auth);
    }
    const googleUser = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
    const githubUser = () =>{
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('auth state changed', currentUser);
        setUser(currentUser);
        setLoading(false);
      })
      return ()=> unsubscribe()   
    } ,[])

  const userInfo = {
    loading,
    registerUser,
    loginUser,
    user,
    logoutUser,
    googleUser,
    githubUser
  };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
