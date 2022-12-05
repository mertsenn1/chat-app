import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import React, { createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState({})

    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        });

        return () => {
            unsub();
        };
    }, []);

    return(
        // any component of the app can reach the currentUser
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );

}