import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function DefaultLayout() {
  return (
    <div className="font-openSans h-screen w-screen bg-greyGlass">
      <div className="h-24">
        <NavBar />
      </div>
      <div className="h-[calc(100vh - 6rem)]">
        <Outlet />
      </div>
    </div>
  );
}
