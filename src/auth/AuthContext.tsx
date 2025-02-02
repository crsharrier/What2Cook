import { createContext, useEffect, useState, ReactNode } from 'react'
import {
    onAuthStateChanged,
    User,
    signOut,
    UserCredential,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

interface IAuthContext {
    user: User | null
    loading: boolean
    login: () => Promise<UserCredential>
    logout: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setCurrentUser] = useState<User | null>(null)
    // const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const login = async () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        // result.user
        return result
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const value = {
        user,
        loading,
        login,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
