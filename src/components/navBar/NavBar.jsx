import './NavBar.css';
import { FaHome, FaProjectDiagram, FaBookOpen, FaBlog, FaPhone, FaInfoCircle, FaSearch } from 'react-icons/fa';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" aria-label="Main navigation">
        <div className="container-fluid">

          {/* Navbar Brand */}
          <a className="navbar-brand" href="#" aria-label="Website name">
            RushiHarkal1
          </a>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <FaHome /> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaProjectDiagram /> Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaBookOpen /> Tutorials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaBlog /> Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaPhone /> Contacts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaInfoCircle /> About Us
                </a>
              </li>
            </ul>
          

          {/* Search Form */}
          <form className="col-md-3" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </form>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
