import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createProduct,
  getFilterTags,
  updateProduct,
} from "../../redux/actions/products";
import Labels from "./Labels";
import Modifiers from "./Modifiers";
import ProductProperties from "./ProductProperties";
import ProductStock from "./ProductStock";
import { validate } from "./utils/validate";
import "./CreateProduct.css";

export default function CreateProduct({ isCreate, setCreationDiv }) {
  const { id } = useParams();

  const initialState = useSelector(
    (state) => state.productsReducer.productDetail
  )[0];
  const {
    name,
    image,
    price,
    description,
    filterTags,
    initialIsOrder,
    state,
    paymentTerm,
    stock,
  } = { ...initialState };

  const dispatch = useDispatch();
  const allFilterTags = useSelector(
    (state) => state.productsReducer.filterTags
  );
  const [tags, setTags] = useState(
    initialState ? filterTags.map((obj) => obj.id) : []
  );
  const [isOrder, setIsOrder] = useState(true);
  const [error, setError] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: initialState ? name : "",
    price: initialState ? price : 0,
    description: initialState ? description : "",
    image: initialState ? image : "",
    modifiers: [],
    FilterTags: initialState ? filterTags.map((obj) => obj.id) : [],
    isOrder: initialState ? initialIsOrder : true,
    stock: initialState ? stock : 0,
    state: initialState ? state : true,
    paymentTerm: initialState ? paymentTerm : 0,
  });

  useEffect(() => {
    async function getTags() {
      await dispatch(getFilterTags());
    }
    getTags();
  }, [dispatch]);

  const handleTags = (e) => {
    if (tags.indexOf(Number(e.target.value)) === -1)
      setTags([...tags, Number(e.target.value)]);
    setNewProduct({
      ...newProduct,
      FilterTags: [...tags, Number(e.target.value)],
    });
  };

  const deleteTag = (e) => {
    let aux = tags;
    aux.splice(tags.indexOf(Number(e.target.value)), 1);
    setTags([...aux]);
    setNewProduct({
      ...newProduct,
      FilterTags: aux,
    });
  };

  const handleSetNewProductProperties = (e) => {
    e.preventDefault();
    setNewProduct({
      ...newProduct,
      [e.target.name]: isNaN(e.target.value)
        ? e.target.value
        : Number(e.target.value),
    });
    validate(newProduct);
  };

  const OrderOrStockHanlde = (e) => {
    e.preventDefault();
    setIsOrder(e.target.value);
    setNewProduct({
      ...newProduct,
      isOrder: e.target.value === "true",
    });
  };

  const confirmHandler = async (e) => {
    e.preventDefault();
    const error = validate(newProduct);

    if (error !== "") {
      setError(error);
      return;
    }
    try {
      
      if (isCreate) {
        console.log("PRUEBA DISPATCH....");
        let response = await dispatch(createProduct(newProduct));
        
        

        /* if (response.type) {
          setNewProduct({
            name: "",
            price: 0,
            description: "",
            image: "",
            modifiers: [],
            FilterTags: [],
            isOrder: true,
            stock: 0,
            state: true,
            paymentTerm: 0,
          });
          setTags([]);
          setIsOrder(true);
          setCreationDiv(false);

          alert("producto creado");
        } */
      } else {
        dispatch(updateProduct(id, newProduct));
        alert("Producto modificado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form__product-container">
      <form className="form__product">
        <button
          className="close__button"
          onClick={() => {
            setCreationDiv(false);
          }}
        >
          X
        </button>
        <h1 className="create__product-title">Crear producto</h1>
        {error === "" ? <></> : <p className="product__input-error">{error}</p>}
        <ProductProperties
          newProduct={newProduct}
          handleSetNewProductProperties={handleSetNewProductProperties}
          setNewProduct={setNewProduct}
        />
        <Modifiers
          setNewProduct={setNewProduct}
          newProduct={newProduct}
          handleSetNewProductProperties={handleSetNewProductProperties}
        />
        <Labels
          handleTags={handleTags}
          filterTags={allFilterTags}
          tags={tags}
          deleteTag={deleteTag}
        />
        <ProductStock
          onHandler={OrderOrStockHanlde}
          isOrder={isOrder}
          newProduct={newProduct}
          onHandlerNewProd={handleSetNewProductProperties}
        />
        <button type="submit" onClick={confirmHandler}>
          Confirmar producto
        </button>
      </form>
    </div>
  );
}
