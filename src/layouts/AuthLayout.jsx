import { Outlet } from "react-router-dom";
// import { routes } from "@/router/index.jsx";
import logo from "@/assets/primefaces-logo.svg";

// function RouterView() {
//   const authRoutes = routes.filter((route) => route.meta.layout === "Auth");
//   return useRoutes(authRoutes);
// }

const AuthRoutes = () => {
  return (
    <div className="grid grid-cols-auth-layout h-screen">
      <div className="flex flex-col gap-5 justify-center items-center ">
        <img src={logo} alt="logo" className="w-3/4" />
        <h1 className="text-3xl text-[#40c4ff] font-semibold">
          Prime Admin Dashboard
        </h1>
      </div>
      <div className="bg-[#2c2b2b]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRoutes;
