import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navphone.css";
import { logout } from "../../redux/actions/auth";
import { validateClick } from "../../utils/validateClick";

function Navphone({ setClickChoice, isDashboard }) {
  const dispatch = useDispatch();

  const { email, userInfoFirestore } = useSelector(
    (state) => state.authReducer
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          {email === "" || !email ? (
            <>
              <Link to={"/check-in"}>
                <li>Registrarse</li>
              </Link>
              <Link to={"/login"}>
                <li>Iniciar Sesión</li>
              </Link>
            </>
          ) : (
            <a onClick={handleLogout}>
              <li>Cerrar Sesión</li>
            </a>
          )}

          {isDashboard ? (
            <>
              <a onClick={() => validateClick("perfil", setClickChoice)}>
                <li>Perfil</li>
              </a>
              {userInfoFirestore.isAdmin && (
                <a onClick={() => validateClick("pagos", setClickChoice)}>
                  <li>Administracion de pagos</li>
                </a>
              )}
              {!userInfoFirestore.isAdmin && (
                <a onClick={() => validateClick("grupo", setClickChoice)}>
                  <li>Mi grupo</li>
                </a>
              )}
              {!userInfoFirestore.isAdmin && (
                <a onClick={() => validateClick("pagos", setClickChoice)}>
                  <li>Pagos</li>
                </a>
              )}
              {userInfoFirestore.isAdmin && (
                <a onClick={() => validateClick("socios", setClickChoice)}>
                  <li>Socios</li>
                </a>
              )}
              <a onClick={() => validateClick("calendario", setClickChoice)}>
                <li>Calendario</li>
              </a>
              {userInfoFirestore.isAdmin && (
                <a onClick={() => validateClick("grupos", setClickChoice)}>
                  <li>Grupos</li>
                </a>
              )}
              <Link to={"/"}>
                <li>Inicio</li>
              </Link>
              <Link to={"/products"}>
                <li>Tienda</li>
              </Link>
            </>
          ) : (
            <>
              {!userInfoFirestore || userInfoFirestore.name === "" ? (
                <>
                  {email ? (
                    <Link to={"/form-user"}>
                      <li>Alta jugador</li>
                    </Link>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <Link
                  to={
                    userInfoFirestore.isAdmin
                      ? "/dashboard-admin"
                      : "/dashboard-player"
                  }
                >
                  <li>Dashboard</li>
                </Link>
              )}
              <a href="!">
                <li>Oferta</li>
              </a>
              <a href="!">
                <li>calendario</li>
              </a>
              <a href="!">
                <li>Nosotros</li>
              </a>
              <a href="!">
                <li>Contacto</li>
              </a>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navphone;
