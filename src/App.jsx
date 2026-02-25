import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import SuperAdminDashboard from './components/dashboard/SuperAdminDashboard';
import EmployeeDashboard from './components/employee-dashboard/EmployeeDashboard';
import Employees from './components/employees/Employees';
import Clients from './components/clients/Clients';
import ClientDetails from './components/clients/ClientDetails';
import Projects from './components/projects/Projects';
import ProjectDetails from './components/projects/ProjectDetails';
import Leave from './components/leave/Leave';
import Attendance from './components/attendance/Attendance';
import Payroll from './components/payroll/Payroll';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Profile from './components/profile/Profile';
import Revenue from './components/revenue/Revenue';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAuthView, setCurrentAuthView] = useState('signin'); // 'signin', 'signup'
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'profile', 'employees', 'clients', 'client-details', 'projects', 'project-details', 'leave', 'attendance', 'payroll', 'revenue'
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [user, setUser] = useState({
    name: "Khushboo Bharati",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });

  const handleMonthly = () => console.log("Monthly filter selected");
  const handleYearly = () => console.log("Yearly filter selected");
  const handleExport = () => console.log("Export triggered");

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('dashboard');
    setCurrentAuthView('signin');
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setCurrentView('client-details');
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('project-details');
  };

  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      role: prev.role === 'CEO & Founder' ? 'Employee' : 'CEO & Founder',
      name: prev.role === 'CEO & Founder' ? 'Employee Account' : 'Khushboo Bharati'
    }));
  };

  if (!isAuthenticated) {
    if (currentAuthView === 'signup') {
      return <Signup onNavigate={setCurrentAuthView} onSignin={() => setIsAuthenticated(true)} />;
    }
    return <Signin onSignin={() => setIsAuthenticated(true)} onNavigate={setCurrentAuthView} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header
        user={user}
        welcomeMessage={`Welcome ${user.name}!`}
        onMonthly={handleMonthly}
        onYearly={handleYearly}
        onExport={handleExport}
        onProfileClick={() => setCurrentView('profile')}
        showControls={currentView === 'dashboard'}
      />

      <div className="flex flex-col md:flex-row flex-1 w-full">
        <Sidebar
          activeView={
            currentView === 'client-details' ? 'clients' :
              currentView === 'project-details' ? 'projects' :
                currentView
          }
          onNavigate={setCurrentView}
        />

        <main className="flex-1 py-4 px-4 md:py-8 md:px-8 min-w-0 overflow-auto">
          {currentView === 'dashboard' ? (
            <>
              <div className="mb-6 flex justify-end">
                <button
                  onClick={toggleRole}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors"
                >
                  Switch to {user.role === 'CEO & Founder' ? 'Employee' : 'Admin'} Dashboard
                </button>
              </div>
              {user.role === 'CEO & Founder' ? <SuperAdminDashboard /> : <EmployeeDashboard onProjectClick={handleProjectClick} />}
            </>
          ) : currentView === 'employees' ? (
            <Employees />
          ) : currentView === 'clients' ? (
            <Clients onClientClick={handleClientClick} />
          ) : currentView === 'projects' ? (
            <Projects onProjectClick={handleProjectClick} />
          ) : currentView === 'leave' ? (
            <Leave />
          ) : currentView === 'attendance' ? (
            <Attendance />
          ) : currentView === 'payroll' ? (
            <Payroll />
          ) : currentView === 'client-details' ? (
            <ClientDetails client={selectedClient} />
          ) : currentView === 'project-details' ? (
            <ProjectDetails project={selectedProject} />
          ) : currentView === 'revenue' ? (
            <Revenue />
          ) : (
            <Profile user={user} onLogout={handleLogout} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
