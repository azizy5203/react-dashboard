import { useRoutes } from "react-router-dom";
import appRoutes from "@/router/index.jsx";

function RouterView() {
  const authRoutes = appRoutes.filter((route) => route.meta.layout === "Auth");
  return useRoutes(authRoutes);
}

const AuthRoutes = () => {
  return (
    <div className="border border-red-600 p-8">
      <RouterView />
    </div>
  );
};

export default AuthRoutes;
