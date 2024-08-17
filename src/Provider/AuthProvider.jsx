import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config'


export const AuthContext = createContext(null)

// google Provider
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [ user, setUser] = useState(null);
  //  console.log(user);
   const [loading, setLoading] =useState(true);


    // create user
    const createUser = (email, password) =>{
       setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

    // signIn User
    const signInUser = (email, password) =>{
       setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
   }

    // google login
    const googleLogin =()=>{
       setLoading(true)
       return signInWithPopup(auth, googleProvider )
   }
  

    
     // logout
     const logout =()=>{
        setUser(null)
        signOut(auth)
    }

    // Update Profile
   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }

     // observer 
     useEffect(() =>{
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
             if (user) {
                setUser(user)
                setLoading(false)
                
               
             } 
           });
           return () => unsubscribe();
     },[])

     const allValues ={
       user, createUser, signInUser, googleLogin,updateUserProfile,
       logout, loading
     }

     return (
       <div>
           
          <AuthContext.Provider value={allValues}>
          {children}
          </AuthContext.Provider>
       </div>
   );
}

export default AuthProvider