import { AuthProvider } from './contexts/AuthContext.tsx'
import ComponentsPreview from './pages/ComponentsPreview.tsx'
import LoginPage from './pages/LoginPage.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <AuthProvider>
            <Router>
                {/* background */}
                <section className="bg-amber-50 w-full h-screen">
                    <Routes>
                        <Route path="/" element={<ComponentsPreview />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </section>
            </Router>
        </AuthProvider>
    )
}

export default App
