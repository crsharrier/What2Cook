import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext.tsx'
import SigninCard from '../components/cards/SigninCard.tsx'
import { Navigate } from 'react-router-dom'

function LoginPage() {
    const { user } = useContext(AuthContext)

    return (
        <>
            {user && <Navigate to={'/home'} replace={true} />}

            {/* frame to center content  */}
            <div className="w-full h-full flex flex-col space-y-12 items-center justify-center">
                <SigninCard />
            </div>
        </>
    )
}

export default LoginPage
