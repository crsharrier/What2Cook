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
        <div className="flex justify-between items-center p-4 shadow-md">
            <div className="navbar-start flex justify-between items-center p-4 shadow-md">
                {/* Application title */}
                <a className="text-xl">What2Eat</a>
            </div>

            <div className="navbar-center hidden lg:flex justify-between items-center p-4 shadow-md">
                {/* Horizontal navigation menu for larger screens */}
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="navbar-end flex justify-between items-center p-4 shadow-md">
                {/* Display user information and logout button if authenticated */}
                {user && (
                    <div className="flex space-x-4">
                        <a className="flex w-max">{user.displayName}</a>

                        {/* <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div> */}

                        <button className="cursor-pointer">
                            <a onClick={handleSignOut}>Logout</a>
                        </button>
                    </div>
                )}
                {user && <div className="dropdown dropdown-end"></div>}
            </div>
        </div>
    )
}

export default Header
