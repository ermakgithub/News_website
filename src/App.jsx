import './App.css'
import { BeakerIcon } from '@heroicons/react/24/solid'  // или /outline

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white gap-4">
            <h1 className="text-4xl font-bold">Tailwind + Heroicons 🚀</h1>
            <BeakerIcon className="w-16 h-16 text-green-500" />
        </div>
    )
}

export default App



