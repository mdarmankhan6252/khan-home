import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            // console.log(currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut =  () =>{
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}