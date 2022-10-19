import React from "react";

function ProductStock({ onHandler, isOrder, newProduct, onHandlerNewProd }) {
  return (
    <>
      <label>
        {" "}
        Producto bajo pedido o bajo stock:
        <select onChange={onHandler}>
          <option value={-1} disabled={true}>
            {"tipo de producto"}
          </option>
          <option value={true}>{"bajo pedido"}</option>
          <option value={false}>{"bajo stock"}</option>
        </select>
      </label>
      {isOrder === "false" ? (
        <>
          <label>
            Existencias:
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={(e) => {
                onHandlerNewProd(e);
              }}
            ></input>
          </label>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductStock;
