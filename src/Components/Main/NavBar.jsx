import { IoPersonCircleOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-12">
      <nav className="flex items-center justify-between py-4 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <div className="text-2xl font-bold text-gray-900 ml-3">Recipe Calories</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium text-[rgba(21,11,43,0.7)]">
          <li><a href="#" className="hover:text-green-500">Home</a></li>
          <li><a href="#" className="hover:text-green-500">Recipes</a></li>
          <li><a href="#" className="hover:text-green-500">About</a></li>
          <li><a href="#" className="hover:text-green-500">Search</a></li>
        </ul>

        {/* Search + Icon */}
        <div className="flex items-center relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none w-full max-w-[180px]"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="ml-4">
            <button className="bg-green-500 p-2 rounded-full">
              <IoPersonCircleOutline size={24} className="text-white" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
