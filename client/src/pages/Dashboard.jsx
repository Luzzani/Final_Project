import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase.config";

import { getAllInfoUsers } from "../redux/actions/auth";

import InfoCard from "../components/UI/InfoCard";
import FOTO from "../images/icono-marco-fotos-foto.webp";
import "./Admin.css";

import { validateClick } from "../utils/validateClick";

function Admin() {
  const dispatch = useDispatch();
  const [clickChoice, setClickChoice] = useState({
    isPerfil: true,
    isSocios: false,
    isPagos: false,
    isGrupos: false,
    isGrupo: false,
    isCalendario: false,
  });

  const { allUserFirestore, userInfoFirestore } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (userInfoFirestore.isAdmin) {
      getDocs(collection(firestore, "usuarios")).then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllInfoUsers(docs));
      });
    }
  }, [dispatch, userInfoFirestore]);

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
              clickChoice.isPagos
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
      <div className="admin__content">
        <h1 className="admin__title">Bienvenid@: {userInfoFirestore?.email}</h1>
        {clickChoice.isPerfil && (
          <InfoCard userInfoFirestore={userInfoFirestore} />
        )}
        {clickChoice.isSocios && (
          <div className="cards__container">
            {allUserFirestore ? (
              allUserFirestore.map((user) => {
                return !user.isAdmin ? (
                  <InfoCard
                    key={userInfoFirestore.document + Math.random()}
                    userInfoFirestore={user}
                  />
                ) : (
                  <></>
                );
              })
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
