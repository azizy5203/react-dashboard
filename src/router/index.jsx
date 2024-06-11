import Home from "../views/Home";
import Login from "../views/Auth/Login/Login";
import Register from "../views/Auth/Register/Register";
import Users from "../views/Users/Users";
const routes = [
  {
    path: "/login",
    element: <Login />,
    meta: { layout: "Auth" },
  },
  {
    path: "/register",
    element: <Register />,
    meta: { layout: "Auth" },
  },
  {
    path: "/",
    element: <Home />,
    meta: { requiresAuth: true, layout: "Admin" },
  },
  {
    path: "/users",
    element: <Users />,
    meta: { requiresAuth: true, layout: "Admin" },
  },
];

export default routes;
