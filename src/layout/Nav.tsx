import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../Routes';
function Nav() {
  const loc = useLocation();
  console.log(loc);
  const example = loc.pathname.includes('weekend')
    ? loc.pathname.split('/')[2]
    : '';
  const [minimize, setMinimize] = useState(false);
  return (
    <nav className=" border-b border-gray-800 relative z-[100] select-none pointer-events-none">
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
                <p className="pointer-events-auto hover:opacity-60 text-white font-bold text-xl">
                  <span className="pr-2">
                    React 3Fiber {example ? 'Example :' : 'Examples'}
                  </span>
                  <span className="underline pl-4 ">{example}</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            {nav.map((weekend, index) => (
              <MenuEl key={index} {...weekend} />
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

function MenuEl({
  weekNum = 1,
  projects,
}: {
  weekNum?: number;
  projects?: string[];
}) {
  return (
    <Menu
      className="group"
      menuButton={
        <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  pointer-events-auto">
          WeekEnd {weekNum} {'>'}
        </MenuButton>
      }
    >
      {projects?.map((project, index) => (
        <NavLink key={index} to={`/weekend${weekNum}/${project.toLowerCase()}`}>
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
