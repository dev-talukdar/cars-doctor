import { createContext, useState } from "react";
import app from "../Firebase/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const  AuthContext = createContext();
 const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        .then()
    }

     
 
    const authInfo ={
        user,
        loading,
        createUser
         
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;