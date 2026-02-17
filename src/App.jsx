import { useState } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import SuperAdminDashboard from './components/dashboard/SuperAdminDashboard'

function App() {
  const [user, setUser] = useState({
    name: "Khushboo Bharati",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });

  const handleMonthly = () => console.log("Monthly filter selected");
  const handleYearly = () => console.log("Yearly filter selected");
  const handleExport = () => console.log("Export triggered");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header
        user={user}
        onMonthly={handleMonthly}
        onYearly={handleYearly}
        onExport={handleExport}
      />

      <div className="flex flex-col md:flex-row flex-1 w-full">
        <Sidebar />

        <main className="flex-1 py-8 px-8">
          {/* Dashboard Content Placeholder */}
          <SuperAdminDashboard />
        </main>
      </div>
    </div>
  )
}

export default App
