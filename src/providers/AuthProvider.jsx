/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Sign out
    const logOut = () => {
        return signOut(auth);
    }
    
    // Observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // Google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;