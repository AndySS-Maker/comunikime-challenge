import { NavLink } from "react-router-dom";
import "./style/main.scss"


function Navbar() {
  return (
    <nav className=" navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>
      <div className="container  "> 

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto text-center me-5" >
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/vehicle-list"
                >
                  Lista de Produtos
                </NavLink>              
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/new-vehicle">
                  Novo Produto
                </NavLink>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;