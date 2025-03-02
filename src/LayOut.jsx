import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";

const LayOut = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default LayOut;
