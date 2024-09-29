"use client"

import { auth, firestore } from "@/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { doc, getDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { createContext } from "vm";

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
}

// Provider component to wrap the application and provide authentication state
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userDataObj, setUserDataObj] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // AUTH Handlers
    // Function to sign up a new user
    const signup = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to log in an existing user
    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    // Function to log out the current user
    const logout = () => {
        setCurrentUser(prevState => null);
        setUserDataObj(prevState => null);
        return signOut(auth);
    }

    // Initialize authentication state and user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                setIsLoading(prevState => true);
                // set user to local context
                setCurrentUser(prevState => user);
                if (!user) {
                    return;
                }

                // if user exists, fetch user data from firestore
                const userDocRef = doc(firestore, 'users', user.uid);
                const userDocSnap = await getDoc(userDocRef);
                let firebaseData = {};
                if (userDocSnap.exists) {
                    firebaseData = userDocSnap.data();
                }
                setUserDataObj(prevState => userData);
            } catch (error) {
                console.log(error.message);
            } finally {
                setIsLoading(prevState => true);
            }
        });

        return unsubscribe();
    }, []);

    // Authentication data to be provided to consumers of the context
    const authData = {
        currentUser,
        userDataObj,
        isLoading,
        signup,
        login,
        logout
    };

    // Provide the authentication context to child components
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}