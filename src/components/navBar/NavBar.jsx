import './NavBar.css';
import { FaHome, FaProjectDiagram, FaBookOpen, FaBlog, FaPhone, FaInfoCircle, FaSearch } from 'react-icons/fa';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark" aria-label="Main navigation">
        <div className="container-fluid">

          {/* Navbar Brand */}
          <a className="navbar-brand col-lg-3" href="#" aria-label="Website name">
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
          <div className="collapse navbar-collapse col-lg-6" id="navBar">
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
          </div>

          {/* Search Form */}
          <form className="col-lg-2 d-none d-xl-block" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
