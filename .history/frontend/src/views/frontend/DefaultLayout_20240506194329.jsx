import { Outlet } from "react-router-dom";
import Header from "../../content/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DefaultLayout() {
  return (
    <div className="font-rubik flex absolute left-0 top-[80px] right-0 bottom-0 flex-col justify-evenly bg-[#F6F8F9]">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
}
