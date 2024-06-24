import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import router from "../router/index";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = router.routes
    .flatMap((r) => r?.children)
    .find((route) => matchPath(route.path, location.pathname));

  useEffect(() => {
    if (currentRoute?.meta?.requiresAuth) {
      if (!token) {
        navigate("/login", { replace: true });
      }
    } else {
      if (token) {
        navigate("/", { replace: true });
      }
    }
  }, [navigate, token, currentRoute?.meta?.requiresAuth]);

  return children;
};
/**
 * authRoute => noId -> nav to login
 */

export default ProtectedRoute;
