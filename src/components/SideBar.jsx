import './sidebar.css'
import { Link } from "react-router-dom";
function SideBar() {

  return (
    <div className="sideBar-container">
      <h4>HTML</h4>
     
      <h4>Les bases de CSS</h4>
      <ul>
        <li>
          <Link
            to="display"
            className="link"
          >
            Display en CSS
          </Link>
        </li>
        <li>
          <Link
            to="width_height"
            className="link"
          >
            Width & Height
          </Link>
        </li>
        <li>
          <Link
            to="flexbox"
            className="link"
          >
            Flexbox
          </Link>
        </li>
        <li>
          <Link
            to="grid"
            className="link"
          >
            Grid
          </Link>
        </li>
        <li>
          <Link
            to="media_query"
            className="link"
          >
            Media query
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar
