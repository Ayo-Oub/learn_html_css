import "./main.css";
import Display from "../pages/contents/Display.jsx";
import FlexBox from "../pages/contents/FlexBox.jsx";
import { Outlet } from "react-router-dom";
function Main() {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
}

export default Main;
