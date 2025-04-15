import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import WelcomeCard from '../components/Dashboard/WelcomeCard';
import StreakCard from '../components/Dashboard/StreakCard';
import StudyChart from '../components/Dashboard/StudyChart';
import SubjectsChart from '../components/Dashboard/SubjectsChart';
import QuickNotes from '../components/Dashboard/QuickNotes';
import UpcomingTasks from '../components/Dashboard/UpcomingTasks';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-fixed">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto backdrop-blur-sm bg-white/30">
          <div className="mb-6">
            <SearchBox />
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