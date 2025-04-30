
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";

const NavLayout = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <div className="flex flex-col justify-between h-screen md:px-0 overflow-x-hidden bg-white md:items-around ">
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
