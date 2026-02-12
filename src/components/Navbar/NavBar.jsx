import "./navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <header className="topNav">
        <nav className="topNavInner">
          <div className="topNavLinks">
            <Link
              to="/"
              className={`topNavLink ${isActive("/") ? "active" : ""}`}
            >
              Inicio
            </Link>

            <Link
              to="/servicios"
              className={`topNavLink ${isActive("/servicios") ? "active" : ""}`}
            >
              Servicios
            </Link>

            <Link
              to="/mis-solicitudes"
              className={`topNavLink ${
                isActive("/mis-solicitudes") ? "active" : ""
              }`}
            >
              Mis Solicitudes
            </Link>
          </div>

          <Link to="/solicitar" className="topNavButton">
            Solicitar Servicio
          </Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};
