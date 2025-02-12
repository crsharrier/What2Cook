import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'

const Header = () => {
    // Access the user, logOut, and loading state from the AuthContext
    const { user, logout } = useContext(AuthContext)

    // Use the useNavigate hook to programmatically navigate between pages
    const navigate = useNavigate()

    // Handle user logout
    const handleSignOut = () => {
        logout()
            .then(() => {
                console.log('User logged out successfully')
                navigate('/login') // Redirect to the login page after logout
            })
            .catch((error: Error) => console.error(error))
    }

    // Define navigation links based on user authentication status
    const navLinks = (
        <>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </>
            )}
        </>
    )

    if (!user) return

    // Render loading indicator if authentication state is still loading
    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex justify-between items-center p-4">
                {/* Application title */}
                <a className="text-xl">What2Eat</a>
            </div>

            <div className="hidden lg:flex justify-between items-center p-4 shadow-md">
                {/* Horizontal navigation menu for larger screens */}
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="flex justify-between items-center p-4 shadow-md">
                {/* Display user information and logout button if authenticated */}
                {user && (
                    <div className="flex space-x-4">
                        {/* <a className="flex w-max">{user.displayName}</a> */}
                        <button
                            className="cursor-pointer"
                            onClick={handleSignOut}
                        >
                            <span className="material-icons">logout</span>
                        </button>
                    </div>
                )}
                {user && <div className="dropdown dropdown-end"></div>}
            </div>
        </div>
    )
}

export default Header
