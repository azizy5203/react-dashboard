import appRoutes from "../router/index";
import { useNavigate } from "react-router-dom";

import { useRoutes } from "react-router-dom";

import { PanelMenu } from "primereact/panelmenu";

// import { useState } from "react";

function RouterView() {
  return useRoutes(appRoutes);
}

const DefaultLayout = () => {
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
  // const [isVisible, setVisible] = useState(true);
  return (
    <div className="grid grid-cols-default-layout grid-rows-default-layout h-screen">
      <div className="border-e border-sky-400 px-4 pt-4 row-span-2">
        <span className="block text-xl font-semibold text-sky-500 mb-4">
          Prime Nigga
        </span>
        <PanelMenu model={items} />
      </div>
      <div className="flex flex-col items-start px-4 border-b-2 border-b-sky-300">
        <span className="text-lg">Youssuf Abdulaziz</span>
        <span className="text-xs">nigga admin</span>
      </div>
      <div className="p-8">
        <RouterView />
      </div>
    </div>
  );
};

export default DefaultLayout;
