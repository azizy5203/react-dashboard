import { useLocation } from "react-router-dom";
import routes from "../router/index";
import AdminRoutes from "./AdminLayout";
import AuthRoutes from "./AuthLayout";

const DefaultLayout = () => {
  const location = useLocation();
  const currentRoute = routes.find((r) => r.path === location.pathname);

  if (currentRoute) {
    if (currentRoute.meta.layout === "Admin") {
      return <AdminRoutes />;
    } else if (currentRoute.meta.layout === "Auth") {
      return <AuthRoutes />;
    }
  }

  // Default fallback if no route matches
  return <div>404 - Not Found</div>;
};

export default DefaultLayout;
