import React from "react";

import FOTO from "../../images/icono-marco-fotos-foto.webp";

import "./InfoCard.css";

function InfoCard({ userInfoFirestore }) {
  return (
    <div className="card__info">
      <img className="card__image" src={FOTO} alt="" />
      <h2>{userInfoFirestore.name}</h2>
      <p>Edad: {userInfoFirestore.years}</p>
      <p>Fecha de nacimiento: {userInfoFirestore.birthDate}</p>
      <p>Tipo de sangre: {userInfoFirestore.bloodType}</p>
      <p>Número de teléfono: {userInfoFirestore.cell}</p>
      <p>Tipo de documento: {userInfoFirestore.typeDoc}</p>
      <p>Documento: {userInfoFirestore.document}</p>
      <p>Email: {userInfoFirestore.email}</p>
      <h3>Contacto de emergencia: {userInfoFirestore.emergencyName}</h3>
      <p>Número de teléfono: {userInfoFirestore.emergencyContact}</p>
      <p>Parentesco: {userInfoFirestore.emergencyRel}</p>
      <p>Seguro de salud: {userInfoFirestore.health}</p>
    </div>
  );
}

export default InfoCard;
