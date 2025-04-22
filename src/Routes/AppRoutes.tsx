import NavLayout from "../Layout";
import Home from "../Pages";

export const HomeRoutes = {
  path: "/",
  element: <NavLayout />,
  children: [
  { path: "/", element: <Home /> },     
  ] 

};
