import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
            <img src={reactLogo} className="w-12 h-12" alt="React logo" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hello KBTG 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Powered by Vite + React + Tailwind CSS
          </p>
        </div>

        <div className="text-center space-y-6">
          <button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            onClick={() => setCount((c) => c + 1)}
          >
            คลิกเพื่อนับ: {count}
          </button>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              🚀 แก้ไข <code className="px-2 py-1 bg-gray-200 rounded text-purple-600 font-mono">src/App.jsx</code> เพื่อทดสอบ HMR
            </p>
            <p className="text-xs text-gray-500">
              สร้างด้วย ❤️ โดย KBTG Development Team
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
