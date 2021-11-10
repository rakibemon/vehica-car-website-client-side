import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import FirebaseInitialize from '../firebase/firebase.init';
FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    // Store Logged in user here
    const [user, setUser] = useState({});
    //Store Error here
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    // Handle Google Sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    // Cheched Logged User information
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                setUser(loggedUser)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    //SignOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };


    return {
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        signInUsingGoogle,
        logOut

    }

};
export default useFirebase;