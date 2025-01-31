import ComponentsPreview from './components/ComponentsPreview.tsx'

function App() {
    return (
        // background
        <div className="bg-amber-50 w-full h-screen">
            {/* frame to center content  */}
            <div className="w-full h-full flex items-center justify-center">
                <ComponentsPreview />
            </div>
        </div>
    )
}

export default App
