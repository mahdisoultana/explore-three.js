function Nav() {
  return (
    <nav className=" border-b border-gray-800 relative z-[100] select-none pointer-events-none">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <p className="text-white font-bold text-xl">
                React 3Fiber Examples
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="project1"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  pointer-events-auto"
              >
                WeekEnd 1
              </a>
              <a
                href="project2"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  pointer-events-auto"
              >
                WeekEnd 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
