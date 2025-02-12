import './card.css'
import GoogleLogo from '../../assets/google.svg'
import { useState, useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function SigninCard() {
    const [errorMessage, setErrorMessage] = useState('')
    const { login, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignIn = async () => {
        login()
            .then((userCredential) => {
                // Signed in
                const user = userCredential?.user
                console.log(user)
                navigate('/')
            })
            .catch((error: { message: string }) => {
                setErrorMessage(error.message)
            })
    }

    return (
        <div className="card heavy-shadow flex flex-col space-y-4">
            {/* title, subtitle */}
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold">What2Cook</h1>
                <p className="text-sm text-gray-500">Sign in to your account</p>

                {errorMessage && (
                    <p className="text-sm text-rose-500">{errorMessage}</p>
                )}
            </div>

            {/* loading dots  */}
            {loading && (
                <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
            )}

            {/* login button  */}
            {!loading && (
                <div className="flex flex-col space-y-2 mt-8">
                    <button
                        className="button heavy-shadow p-4 rounded-lg w-full flex items-center justify-center cursor-pointer border-2 border-black text-black"
                        onClick={handleSignIn}
                    >
                        <img
                            className="h-6 w-8 mr-2"
                            src={GoogleLogo}
                            alt="Google logo"
                        />
                        Login using Google
                    </button>
                </div>
            )}
        </div>
    )
}
