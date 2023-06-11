import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import img from "./images/img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Layout = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={"h-screen bg-gradient-to-b from-gray-100 to-gray-300"}>
      <div className={"bg-theme border-b-2 border-black"}>
        <nav className={"flex space-x-10 text-white "}>
          <div>
            <Link to="/">
              <img src={img} alt={"Home"} className={"rounded-full h-20 "} />
            </Link>
          </div>
          <div className={"pt-7"}>
            <Link to="/learnToBuild">Learn to build</Link>
          </div>
          <div className={"pt-7"}>
            <Link to="/programs">Programs</Link>
          </div>
          <div className={"pt-7"}>
            <Link to="/activities">Activities</Link>
          </div>
        </nav>

        <nav className={"right-0 top-0 absolute text-white"}>
          <div className={"p-7"}>
            <button onClick={handleOpen}>
              <i>Bram Ekelschot </i>
              <FontAwesomeIcon icon={solid("chevron-up")} />
            </button>
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
