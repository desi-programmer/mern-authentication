import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
            <i class="bi bi-trophy"></i> <span></span> Auth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className={"nav-link " + (location.pathname === '/login' ? 'active' : '' ) }  to="/login">
              <li className="nav-item">Login</li>
            </Link>
            <Link className={"nav-link " + (location.pathname === '/register' ? 'active' : '' ) } to="/register">
              <li className="nav-item">Register</li>
            </Link>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
