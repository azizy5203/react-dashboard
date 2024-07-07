import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Login from "../views/Auth/Login/Login";
import Register from "../views/Auth/Register/Register";
import Users from "../views/Users/Users";
import UsersEdit from "../views/Users/UsersEdit";
import Tasks from "../views/Tasks/Tasks";
import AdminLayout from "@/layouts/AdminLayout";
import AuthLayout from "@/layouts/AuthLayout";

import ProtectedRoute from "@/layouts/ProtectedRoute";
import { isLoggedIn } from "@/helpers/auth";

// Create a history object using createBrowserHistory

// Define your routes
const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
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
    ],
  },
  {
    element: <AdminLayout />,
    loader: isLoggedIn,
    children: [
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
      {
        path: "/users/:userId",
        element: <UsersEdit />,
        meta: { requiresAuth: true, layout: "Admin" },
      },
      {
        path: "/tasks",
        element: <Tasks />,
        meta: { requiresAuth: true, layout: "Admin" },
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
