import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    function login(email, password) {
        return app.signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = app.onAuthStateChanged(user => {
            setUser(user)
        })

        return unsubscribe
    }, []);

    const value = {
        user,
        login
    }
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}