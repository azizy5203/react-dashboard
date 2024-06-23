import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Login from "../views/Auth/Login/Login";
import Register from "../views/Auth/Register/Register";
import Users from "../views/Users/Users";
import AdminLayout from "@/layouts/AdminLayout";
import AuthLayout from "@/layouts/AuthLayout";

import ProtectedRoute from "@/layouts/ProtectedRoute";

// Create a history object using createBrowserHistory

// Define your routes
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
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
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
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
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
