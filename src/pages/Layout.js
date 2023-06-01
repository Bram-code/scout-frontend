import { Outlet, Link } from "react-router-dom";
import * as React from "react";

import LearnToBuild from "./LearnToBuild";

const Layout = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={"h-screen bg-gradient-to-b from-gray-100 to-gray-300"}>
      <div className={"bg-theme border-b-2 border-black"}>
        <nav className={"flex space-x-10 text-white"}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/learnToBuild">Learn to build</Link>
          </div>
          <div>
            <Link to="/programs">Programs</Link>
          </div>
          <div>
            <Link to="/activities">Activities</Link>
          </div>
        </nav>

        <nav className={"right-0 top-0 absolute text-white"}>
          <div>
            <button onClick={handleOpen}>Dropdown</button>
            {open ? (
              <ul className="w-max bg-white text-black divide-y divide-black border-black border-2 z-50 absolute right-0">
                <li>
                  <Link to="/choose">Add a program or activity</Link>
                </li>
                <li>
                  <button>Menu 2</button>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
