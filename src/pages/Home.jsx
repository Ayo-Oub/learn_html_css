
import { Link } from "react-router-dom";
import './home.css';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import Footer from "../components/Footer";
function Home() {

  return (
    <div className="home-container container">
      <Header/>
      <div className="home-content">
        <SideBar />
        <Main />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
 {/* <Link
        to="/test"
        className="link"
      >
        Test Page
      </Link>
      <Link
        to="/display"
        className="link"
      >
        Display en CSS
      </Link> */}