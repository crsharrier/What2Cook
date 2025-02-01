import { useAuth } from '../contexts/AuthContext.tsx'
import SigninCard from '../components/cards/signinCard.tsx'
import { Navigate } from 'react-router-dom'

function LoginPage() {
    const { userLoggedIn, currentUser } = useAuth()

    return (
        <>
            {userLoggedIn && <Navigate to={'/'} replace={true} />}
            {/* user logged in message  */}
            <div>
                USER:
                {userLoggedIn
                    ? JSON.stringify(currentUser?.displayName)
                    : 'NOT LOGGED IN'}
            </div>

            {/* frame to center content  */}
            <div className="w-full h-full flex flex-col space-y-12 items-center justify-center">
                <SigninCard />
            </div>
        </>
    )
}

export default LoginPage
