import Home from "../views/Home";
import Users from "../views/Users/Users";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
];

export default routes;
