import AuthProvider from './auth/AuthContext.tsx'
import PrivateRoute from './auth/PrivateRoute.tsx'
import ComponentsPreview from './pages/ComponentsPreview.tsx'
import Header from './components/scaffold/Header.tsx'
import LoginPage from './pages/LoginPage.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                {/* background */}
                <section className="w-full h-full">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/home"
                            element={
                                <PrivateRoute>
                                    <ComponentsPreview />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </section>
            </Router>
        </AuthProvider>
    )
}

export default App
