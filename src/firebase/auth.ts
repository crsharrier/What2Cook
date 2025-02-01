import { auth } from './firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    // result.user
    return result
}

export function signOut() {
    auth.signOut()
}
