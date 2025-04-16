import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import { useAuth } from '../contexts/AuthContext';

// Import components
import WelcomeCard from '../components/Dashboard/WelcomeCard';
import StreakCard from '../components/Dashboard/StreakCard';
import StudyChart from '../components/Dashboard/StudyChart';
import SubjectsChart from '../components/Dashboard/SubjectsChart';
import QuickNotes from '../components/Dashboard/QuickNotes';
import UpcomingTasks from '../components/Dashboard/UpcomingTasks';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { profile, getUserRole } = useAuth();
  const [dashboardType, setDashboardType] = useState<'student' | 'teacher' | 'admin'>(
    // Initialize from localStorage if available
    (localStorage.getItem('userRole') as 'admin' | 'teacher' | 'student') || 'student'
  );
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  
  // Force re-evaluation of dashboard type when component mounts
  useEffect(() => {
    const role = getUserRole();
    console.log("🏁 Dashboard mounted, checking role:", role);
    
    if (role === 'admin') {
      console.log("👑 Setting dashboard type to admin");
      setDashboardType('admin');
    } else if (role === 'teacher') {
      console.log("👨‍🏫 Setting dashboard type to teacher");
      setDashboardType('teacher');
    } else {
      console.log("🧑‍🎓 Setting dashboard type to student (default)");
      setDashboardType('student');
    }
  }, []);
  
  // Also update when profile changes
  useEffect(() => {
    const role = getUserRole();
    console.log("📱 Profile updated, current role:", role);
    
    if (role && role !== dashboardType && 
       (role === 'admin' || role === 'teacher' || role === 'student')) {
      console.log(`🔄 Updating dashboard from ${dashboardType} to ${role}`);
      setDashboardType(role as 'admin' | 'teacher' | 'student');
    }
  }, [profile]);
  
  console.log("🖥️ Rendering dashboard for type:", dashboardType);

  const renderAdminDashboard = () => {
    return (
      <>
        <div className="bg-primary text-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-white/80">
                Welcome back, {profile?.name || profile?.full_name || 'Admin'}!
              </p>
            </div>
            <div className="p-2 bg-white/20 rounded-lg text-white">
              Role: Administrator (from localStorage: {getUserRole()})
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Users</h3>
            <p className="text-3xl font-bold">24</p>
            <p className="text-gray-600 text-sm">Total registered users</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Teachers</h3>
            <p className="text-3xl font-bold">8</p>
            <p className="text-gray-600 text-sm">Active teachers</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Students</h3>
            <p className="text-3xl font-bold">15</p>
            <p className="text-gray-600 text-sm">Enrolled students</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">John Smith</td>
                  <td className="px-4 py-2">john@example.com</td>
                  <td className="px-4 py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Teacher</span></td>
                  <td className="px-4 py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 mr-2">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Alice Johnson</td>
                  <td className="px-4 py-2">alice@example.com</td>
                  <td className="px-4 py-2"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Student</span></td>
                  <td className="px-4 py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 mr-2">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <button className="bg-primary text-white px-4 py-2 rounded-lg">Add New User</button>
          </div>
        </div>
      </>
    );
  };

  const renderTeacherDashboard = () => {
    return (
      <>
        <div className="bg-primary text-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
              <p className="text-white/80">
                Welcome back, {profile?.name || profile?.full_name || 'Teacher'}!
              </p>
            </div>
            <div className="p-2 bg-white/20 rounded-lg text-white">
              Role: Teacher (from localStorage: {getUserRole()})
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <WelcomeCard />
          <StreakCard />
        </div>

        <div className="mb-6">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-xl font-semibold mb-4">My Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-1">Mathematics {i}01</h3>
                  <p className="text-sm text-gray-600 mb-2">25 Students</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Mon, Wed 10am</span>
                    <span>Room 204</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-primary text-white px-4 py-2 rounded-lg">
                Create New Class
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyChart />
          <UpcomingTasks />
        </div>
      </>
    );
  };

  const renderStudentDashboard = () => {
    return (
      <>
        <div className="bg-primary text-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Student Dashboard</h1>
              <p className="text-white/80">
                Welcome back, {profile?.name || profile?.full_name || 'Student'}!
              </p>
            </div>
            <div className="p-2 bg-white/20 rounded-lg text-white">
              Role: Student (from localStorage: {getUserRole()})
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <WelcomeCard />
          <StreakCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StudyChart />
          <SubjectsChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuickNotes />
          <UpcomingTasks />
        </div>
      </>
    );
  };
  
  // Determine which dashboard to render based on dashboardType state
  const renderDashboardContent = () => {
    console.log('📊 Rendering dashboard content for type:', dashboardType);
    
    switch (dashboardType) {
      case 'admin':
        return renderAdminDashboard();
      case 'teacher':
        return renderTeacherDashboard();
      default:
        return renderStudentDashboard();
    }
  };

  // Main render
  return (
    <div className="flex h-screen bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-fixed">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto backdrop-blur-sm bg-white/30">
          <div className="mb-6">
            <SearchBox />
          </div>

          {renderDashboardContent()}
        </main>

        <footer className="bg-white py-4 px-6">
          <div className="container mx-auto flex justify-between items-center text-sm text-gray-600">
            <p>
              <a href="#" className="font-semibold">@PulseCamp</a>
            </p>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Confidentiality</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;