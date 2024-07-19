import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NewSideBar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      path: "/",
    },
    {
      label: "Users",
      icon: "pi pi-user",
      path: "/users",
    },
    {
      label: "Tasks",
      icon: "pi pi-list",
      path: "/tasks",
    },
    {
      label: "Tasks",
      icon: "pi pi-list",
      path: "/side-bar",
    },
  ];
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={` h-screen inline-block border-e border-e-primary p-4`}>
      <nav className="h-full flex flex-col gap-2 items-start">
        <div
          className={`${
            expanded ? "w-56" : "w-5"
          } flex justify-between items-center transition-all duration-150`}
        >
          <div
            onClick={() => setExpanded((ex) => !ex)}
            className="logo flex items-center gap-2"
          >
            <i className="pi pi-prime text-primary text-2xl"></i>
            <span className="block text-xl font-semibold text-primary">
              Prime Nigga
            </span>
          </div>
          <Button
            className=" text-primary bg-transparent border-0 w-auto"
            icon="pi pi-arrow-left"
            onClick={() => setExpanded((ex) => !ex)}
          />
          {/* <i ></i> */}
        </div>
        <ul
          className={`${
            expanded ? "w-56" : "w-5"
          } grid mt-10 gap-4 transition-all duration-150`}
        >
          {items.map((item) => (
            <NavLink to={item.path} key={item.path}>
              <li
                className={`${
                  expanded ? "w-56" : "w-5"
                } flex items-center gap-4 rounded-md p-4 text-primary bg-slate-800 transition-all duration-150`}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default NewSideBar;
