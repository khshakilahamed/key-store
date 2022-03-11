import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile , signOut   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const createUserAccount = (name, email, password) => {
        // console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            console.log(userCredential)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    // const setUserName = (name) => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => { })
    // }


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({});
            }
          });
    }, []);


    const LogOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
          })
          .catch((error) => {
            // An error happened.
          });
          
    }

    return {
        user,
        loginUser,
        signInUsingGoogle,
        createUserAccount,
        LogOut,
    };
};

export default useFirebase;