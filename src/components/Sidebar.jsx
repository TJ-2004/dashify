import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              to="/"
              onClick={() => {}}
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold dark:text-white text-slate-900 tracking-tight"
            >
              <SiShopware />
              <span>Dashify</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 md:hidden block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 mt-4 uppercase m-3">{item.title}</p>
                {item.links.map((Link) => (
                  <NavLink
                    to={`/${Link.name}`}
                    key={Link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {Link.icon}
                    <span className="capitalize">{Link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;