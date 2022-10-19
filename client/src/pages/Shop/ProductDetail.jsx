import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  cleanProductDetail,
  getProductDetail,
} from "../../redux/actions/products";
import CreateProduct from "./CreateProduct";
import ShowProductDetail from "./ShowProductDetail";

import "./ShowProductDetail.css";

export default function ProductDetail() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { userInfoFirestore } = useSelector((state) => state.authReducer);

  const [editor, setEditor] = useState(false);
  let editMode = false;

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id, editor]);

  useEffect(() => {
    return () => dispatch(cleanProductDetail());
  }, [dispatch]);

  return (
    <div className="productDetail__container">
      {userInfoFirestore.isAdmin ? (
        <button
          onClick={() => {
            editMode = !editMode;
            setEditor(editMode);
          }}
        >
          {!editor ? "Editar" : "Ver detalle"}
        </button>
      ) : (
        <Link to={"/products"}>Volver</Link>
      )}
      {editor ? <CreateProduct isCreate={false} /> : <ShowProductDetail />}
    </div>
  );
}
