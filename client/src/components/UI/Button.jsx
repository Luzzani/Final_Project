import React from "react";
import "./Admin.css";

function Button(clickChoice, handleChance) {
  return (
    <button
      className={
        clickChoice.isGrupo ? "navbar__btn navbar__btn-clicked" : "navbar__btn"
      }
      onClick={() => handleChance("grupo")}
    >
      Mi grupo
    </button>
  );
}

export default Button;
