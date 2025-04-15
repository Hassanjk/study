import { BsBell, BsPersonCircle } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <nav className="bg-white px-3 py-2 flex items-center">
      <button 
        onClick={toggleSidebar}
        className="text-primary text-2xl hover:bg-gray-100 p-2 rounded-lg transition-colors"
      >
        <BiMenu />
      </button>

      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <BsBell className="text-xl text-primary" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>

        <div className="relative group">
          <BsPersonCircle className="text-xl text-primary cursor-pointer" />
          <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;