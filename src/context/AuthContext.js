import { createContext, useContext, useState, useEffect  } from "react";
import { createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged } from "firebase/auth";
    import { setDoc, doc } from "firebase/firestore";
    import {auth, db} from '../firebase'


    const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [ user, setUser ] = useState({})

    const [play, setPlay] = useState()

    function PlayShows (){
        setPlay(!play)
    }

    function signUp(email, password){
     createUserWithEmailAndPassword(auth, email, password)
     setDoc(doc(db, 'users', email), {
        saveShows: []
     })
    }

    function logIn(email, password){
        signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribre = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribre();
        };
    },[]);




    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user, PlayShows, play}}>
            {children}
        </AuthContext.Provider>
    )


}
export function UserAuth(){
    return useContext(AuthContext)
}