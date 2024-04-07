import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [loading ,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const createUserWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser,{
             displayName:name, photoURL:photo
         })
     }

     useEffect(() =>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        loading,
        createUserWithGoogle,
        signIn,
        logOut,
        updateUserProfile,
        user


    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;

