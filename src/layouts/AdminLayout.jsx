import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import { PanelMenu } from "primereact/panelmenu";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";

import Header from "@/components/core/Header";
import { Button } from "primereact/button";

// import { useState } from "react";

// function RouterView() {
//   const adminRoutes = routes.filter((route) => route.meta.layout === "Admin");
//   return useRoutes(adminRoutes);
// }

const AdminLayout = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Users",
      icon: "pi pi-user",
      command: () => navigate("/users"),
    },
    {
      label: "Tasks",
      icon: "pi pi-list",
      command: () => navigate("/tasks"),
    },
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
  ];

  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(logout());
  }
  // const [isVisible, setVisible] = useState(true);
  return (
    <>
      <div className="md:hidden">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <span className="block text-xl font-semibold text-sky-500 mb-4">
            Prime Nigga
          </span>
          <PanelMenu model={items} />
          <Button
            onClick={logoutUser}
            className="mt-auto mb-4 self-start flex gap-2 bg-primary"
            icon="pi pi-sign-out"
          >
            logout
          </Button>
        </Sidebar>
      </div>
      <div className="grid grid-cols-mobile-layout md:grid-cols-default-layout grid-rows-default-layout h-screen">
        <div className="hidden md:flex md:flex-col md:gap-4 border-e border-primary px-4 pt-4 row-span-2">
          <span className="block text-xl font-semibold text-sky-500">
            Prime Nigga
          </span>
          <PanelMenu model={items} />
          <Button
            onClick={logoutUser}
            className="mt-auto mb-4 self-start flex gap-2 bg-primary"
            icon="pi pi-sign-out"
          >
            logout
          </Button>
        </div>
        {/* <div className="flex gap-8 items-center ps-4 border-b-2 border-b-sky-600">
          <Button
            className="md:hidden"
            icon="pi pi-bars"
            onClick={() => setVisible(true)}
          />

          <div className="flex flex-col gap-2 items-start">
            <span className="text-lg">Youssuf Abdulaziz</span>
            <span className="text-xs">nigga admin</span>
          </div>
        </div> */}
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
