import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FOTO from "../images/icono-marco-fotos-foto.webp";
import { validateClick } from "../utils/validateClick";

function DashNabvar({ setClickChoice, clickChoice }) {
  const { userInfoFirestore } = useSelector((state) => state.authReducer);

  return (
    <div className="dashboard__container">
      <div className="admin__navbar">
        <img
          className="navbar__image"
          src={userInfoFirestore.image || FOTO}
          alt="foto de usuario"
        />
        <button
          className={
            clickChoice.isPerfil
              ? "navbar__btn navbar__btn-clicked"
              : "navbar__btn"
          }
          onClick={() => validateClick("perfil", setClickChoice)}
        >
          Perfil
        </button>
        {userInfoFirestore.isAdmin && (
          <button
            className={
              clickChoice.isPagos
                ? "navbar__btn navbar__btn-clicked"
                : "navbar__btn"
            }
            onClick={() => validateClick("pagos", setClickChoice)}
          >
            Administracion de pagos
          </button>
        )}
        {!userInfoFirestore.isAdmin && (
          <button
            className={
              clickChoice.isGrupo
                ? "navbar__btn navbar__btn-clicked"
                : "navbar__btn"
            }
            onClick={() => validateClick("grupo", setClickChoice)}
          >
            Mi grupo
          </button>
        )}
        {!userInfoFirestore.isAdmin && (
          <button
            className={
              clickChoice.isP
                ? "navbar__btn navbar__btn-clicked"
                : "navbar__btn"
            }
            onClick={() => validateClick("pagos", setClickChoice)}
          >
            Pagos
          </button>
        )}
        {userInfoFirestore.isAdmin && (
          <button
            className={
              clickChoice.isSocios
                ? "navbar__btn navbar__btn-clicked"
                : "navbar__btn"
            }
            onClick={() => validateClick("socios", setClickChoice)}
          >
            Socios
          </button>
        )}
        <button
          className={
            clickChoice.isCalendario
              ? "navbar__btn navbar__btn-clicked"
              : "navbar__btn"
          }
          onClick={() => validateClick("calendario", setClickChoice)}
        >
          Calendario
        </button>
        {userInfoFirestore.isAdmin && (
          <button
            className={
              clickChoice.isGrupos
                ? "navbar__btn navbar__btn-clicked"
                : "navbar__btn"
            }
            onClick={() => validateClick("grupos", setClickChoice)}
          >
            Grupos
          </button>
        )}
        <Link to={"/"}>
          <button className="navbar__btn">Inicio</button>
        </Link>
        <Link to={"/products"}>
          <button className="navbar__btn">Tienda</button>
        </Link>
      </div>
    </div>
  );
}

export default DashNabvar;
