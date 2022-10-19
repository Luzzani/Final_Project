import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./SearchbarProduct.css";

function SearchbarProduct(props) {
  const { userInfoFirestore } = useSelector((state) => state.authReducer);

  const {
    handleAllProducts,
    setCreationDiv,
    handleTags,
    allTags,
    tags,
    deleteTag,
    handleClean,
  } = props;

  return (
    <div className="search__container">
      <Link
        to={
          userInfoFirestore?.isAdmin ? "/dashboard-admin" : "/dashboard-player"
        }
      >
        Volver
      </Link>
      <button onClick={(e) => handleAllProducts(e)}>TODOS LOS PRODUCTOS</button>
      {userInfoFirestore?.isAdmin ? (
        <button
          onClick={(e) => {
            setCreationDiv(true);
          }}
        >
          CREAR PRODUCTO
        </button>
      ) : (
        <></>
      )}
      <select defaultValue="title2">
        <option value="title2" disabled={true}>
          Filtar por: Precio
        </option>
        <option>Mas económico</option>
        <option>Mas costoso</option>
      </select>
      <select defaultValue="title" onChange={(e) => handleTags(e)}>
        <option value="title" disabled={true}>
          Filtar por:
        </option>
        {allTags?.map((tag) => {
          return (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          );
        })}
      </select>
      {tags.length > 0 ? (
        <ul>
          {tags?.map((tagId) => {
            return (
              <li key={tagId} value={tagId} onClick={(e) => deleteTag(e)}>
                {allTags.find((t) => t.id === Number(tagId)).name} ❌
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No has seleccionado etiquetas</p>
      )}
      <button onClick={(e) => handleClean(e)}>LIMPIAR</button>
    </div>
  );
}

export default SearchbarProduct;
