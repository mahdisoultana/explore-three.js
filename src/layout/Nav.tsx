import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navData } from '../routes/Routes';
function Nav() {
  const loc = useLocation();

  const [minimize, setMinimize] = useState(false);
  useEffect(() => {
    setMinimize(true);
  }, [loc]);
  return (
    <nav className="bg-white border-b text-gray-900 border-gray-800 relative z-[1111] select-none pointer-events-none">
      <button
        className="flex items-center justify-center absolute right-2 top-full bg-gray-800 text-white w-6 h-6 rounded-b-full hover:opacity-50 pointer-events-auto"
        onClick={() => setMinimize((s) => !s)}
      >
        {
          <RiArrowUpSLine
            className={`${minimize ? 'rotate-180' : 'rotate-0'}`}
          />
        }
      </button>
      <motion.div
        layout
        animate={{
          overflow: minimize ? 'hidden' : 'visible',
          height: minimize ? '0' : 'auto',
        }}
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center justify-between h-16 ">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <p className="pointer-events-auto hover:opacity-60  font-bold text-xl">
                  <span className="pr-2">React 3Fiber</span>
                  {/* <span className="underline pl-4 ">{example}</span> */}
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            {navData.map((weekend, index) => (
              <MenuEl key={index} {...weekend} />
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

function MenuEl({ title, projects }: { title?: string; projects?: string[] }) {
  return (
    <Menu
      className="group"
      menuButton={
        <MenuButton className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  pointer-events-auto">
          {title} {'>'}
        </MenuButton>
      }
    >
      {projects?.map((project, index) => (
        <NavLink key={index} to={`/${title}/${project.toLowerCase()}`}>
          {({ isActive }) => (
            <MenuItem
              className={`hover:text-blue-400 pointer-events-auto ${
                isActive ? 'text-white bg-gray-400' : 'tex-gray-950'
              }`}
            >
              {project}
            </MenuItem>
          )}
        </NavLink>
      ))}
      {/* <MenuItem>New File</MenuItem>
      <MenuItem>Save</MenuItem>
      <SubMenu label="Edit">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </SubMenu>
      <MenuItem onClick={() => console.log('Print clicked')}>Print...</MenuItem> */}
    </Menu>
  );
}

export default Nav;
