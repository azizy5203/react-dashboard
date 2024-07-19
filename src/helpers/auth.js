import { redirect } from "react-router-dom";
export function isLoggedIn() {
  const token = localStorage.getItem("TOKEN");

  return !token && redirect("/login");
}
