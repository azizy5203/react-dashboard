import { useLocation } from "react-router-dom";
import routes from "../router/index";
import AdminLayout from "./AdminLayout";
import AuthLayout from "./AuthLayout";

const DefaultLayout = () => {
  const location = useLocation();
  const currentRoute = routes.find((r) => r.path === location.pathname);

  if (currentRoute) {
    if (currentRoute.meta.layout === "Admin") {
      return <AdminLayout />;
    } else if (currentRoute.meta.layout === "Auth") {
      return <AuthLayout />;
    }
  }

  // Default fallback if no route matches
  return (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  );
};

export default DefaultLayout;
