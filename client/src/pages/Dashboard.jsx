import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase.config";

import { getAllInfoUsers } from "../redux/actions/auth";

import InfoCard from "../components/UI/InfoCard";
import "./Admin.css";
import DashNabvar from "./DashNabvar";
import Navphone from "../components/Nav/Navphone";

function Admin() {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1450) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

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
    <>
      {isDesktop ? (
        <DashNabvar setClickChoice={setClickChoice} clickChoice={clickChoice} />
      ) : (
        <Navphone setClickChoice={setClickChoice} isDashboard={true} />
      )}

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
    </>
  );
}

export default Admin;
