import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import style from "./master.module.css";
export default function Masterlayout() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <div className={`${style.container} w-100 container-fluid`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
