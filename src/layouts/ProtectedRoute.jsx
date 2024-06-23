import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import router from "../router/index";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = router.routes
    .flatMap((r) => r?.children)
    .find((route) => route && route.path === location.pathname);

  useEffect(() => {
    if (currentRoute.meta.requiresAuth) {
      if (!token) {
        navigate("/login", { replace: true });
      }
    } else {
      if (token) {
        navigate("/app", { replace: true });
      }
    }
  }, [navigate, user, token, currentRoute.meta.requiresAuth]);

  return children;
};
/**
 * authRoute => noId -> nav to login
 */

export default ProtectedRoute;
