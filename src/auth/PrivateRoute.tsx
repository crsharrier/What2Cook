import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" />
}

export default PrivateRoute
