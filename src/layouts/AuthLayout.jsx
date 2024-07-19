import { Outlet } from "react-router-dom";
// import { routes } from "@/router/index.jsx";
import logo from "@/assets/img/primefaces-logo.svg";

// function RouterView() {
//   const authRoutes = routes.filter((route) => route.meta.layout === "Auth");
//   return useRoutes(authRoutes);
// }

const AuthRoutes = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] md:grid-rows-1 md:grid-cols-auth-layout h-screen">
      <div className="flex md:flex-col gap-5 justify-between md:justify-center items-center px-5 md:p-0">
        <img src={logo} alt="logo" className="md:w-3/4" />
        <h1 className="text-2xl md:text-3xl text-[#40c4ff] font-semibold">
          Prime Dashboard
        </h1>
      </div>
      <div className="bg-[#2c2b2b]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRoutes;
