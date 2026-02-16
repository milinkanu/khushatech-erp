import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-32 h-32 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-32 h-32 animate-spin-slow hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-300" alt="React logo" />
        </a>
      </div>

      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Vite + React + Tailwind
      </h1>

      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 text-center max-w-md w-full">
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
          className="w-full text-lg shadow-lg hover:shadow-indigo-500/30 mb-6 py-3"
        >
          count is {count}
        </Button>
        <p className="text-gray-400 mb-4">
          Edit <code className="bg-gray-700 px-2 py-1 rounded text-pink-400 font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-gray-500 hover:text-gray-300 transition-colors cursor-default">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
