import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Modifiers({
  setNewProduct,
  newProduct,
  handleSetNewProductProperties,
}) {
  const initialState = useSelector(
    (state) => state.productsReducer.productDetail
  )[0];

  const [addModifier, setAddModifier] = useState(false);
  const [newModifierType, setNewModifierType] = useState("");
  const [newModifierProperty, setNewModifierProperty] = useState("");
  const [enableOptions, setEnableOptions] = useState(false);
  const [newModifierValue, setNewModifierValue] = useState("");
  const [newModifier, setNeWModifier] = useState([]);
  const [disableAddModifier, setDisableAddModifier] = useState(true);
  const [modifiers, setModifiers] = useState(
    initialState ? [...initialState.modifiers] : []
  );

  const newModifierHanlder = (e) => {
    e.preventDefault();
    setAddModifier(true);
  };

  const newOptionHanlder = (e) => {
    e.preventDefault();
    setNeWModifier({
      [newModifierProperty]: [
        ...newModifier[newModifierProperty],
        newModifierValue,
      ],
    });
    setDisableAddModifier(false);
    setNewModifierValue("");
  };

  const addNewModifierHanlder = () => {
    setAddModifier(false);
    setModifiers([...modifiers, newModifier]);
    setNeWModifier({});
    setNewModifierType("");
    setDisableAddModifier(true);
    setNewProduct({
      ...newProduct,
      modifiers: [...modifiers, newModifier],
    });
  };

  const resetNewModifierHanlder = () => {
    setNeWModifier({});
    setNewModifierType("");
    setNewModifierProperty("");
    setDisableAddModifier(true);
  };

  const nameAndOptionsHandler = (e) => {
    e.preventDefault();
    setEnableOptions(true);
    setNeWModifier({ [newModifierProperty]: [] });
  };

  const prevViewModifierHanlder = (e) => {
    e.preventDefault();
    setDisableAddModifier(false);
    setNeWModifier({ [newModifierProperty]: "" });
  };

  const handleDeleteModifier = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let aux = modifiers;
    aux.splice(e.target.value, 1);
    setModifiers(aux);
    setNewProduct({
      ...newProduct,
      modifiers: aux,
    });
  };

  return (
    <>
      <label> Modificadores: </label>

      {modifiers?.map((obj, index) => {
        if (Object.values(obj)[0] === "") {
          return (
            <div key={index}>
              <label>{Object.keys(obj)[0]}:</label>
              <input placeholder={Object.keys(obj)[0]}></input>
              <button value={index} onClick={(e) => handleDeleteModifier(e)}>
                Eliminar
              </button>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <label>{Object.keys(obj)[0]}:</label>
              <select
                name={Object.keys(obj)[0]}
                id={index}
                value={0}
                readOnly={true}
              >
                <option value={0} disabled={true}>
                  {"selecciona una"}
                </option>
                {Object.values(obj)[0]?.map(
                  (option, i) => (
                    <option value={option} key={i}>
                      {option}
                    </option>
                  ) //cambiar a input type radio
                )}
              </select>
              <button value={index} onClick={(e) => handleDeleteModifier(e)}>
                Eliminar
              </button>
            </div>
          );
        }
      })}

      <div>
        <button onClick={newModifierHanlder}> Nuevo modificador ➕</button>
      </div>

      {addModifier ? (
        <label>
          {" "}
          Tipo:
          <select
            value={0}
            onChange={(e) => setNewModifierType(e.target.value)}
          >
            <option value={0} disabled={true}>
              {" "}
              selecciona tipo
            </option>
            <option value={"opciones"}>{"Opciones"}</option>
            <option value={"campoDeTexto"}>{"Campo de texto"}</option>
          </select>
        </label>
      ) : (
        <></>
      )}
      {newModifierType === "opciones" && addModifier ? (
        <>
          <h2>opciones</h2>
          <label>
            {" "}
            Nombre:
            <input
              onChange={(e) => {
                setNewModifierProperty(e.target.value);
              }}
            ></input>
          </label>
          <div>
            <button onClick={nameAndOptionsHandler}>
              Confirmar nombre y agregar opciones
            </button>
          </div>
          {enableOptions ? (
            <>
              <label>nueva opción</label>
              <input
                value={newModifierValue}
                onChange={(e) => {
                  setNewModifierValue(e.target.value);
                }}
              ></input>
              <div>
                <button onClick={newOptionHanlder}> agregar opción </button>
              </div>
              <p>
                {" "}
                nuevo modificador vista previa: {JSON.stringify(newModifier)}
              </p>
            </>
          ) : (
            <p>Confirma nombre para agregar opciones</p>
          )}
        </>
      ) : newModifierType === "campoDeTexto" ? (
        <>
          <h2>Texto</h2>
          <label>
            {" "}
            Nombre:
            <input
              onChange={(e) => {
                setNewModifierProperty(e.target.value);
              }}
            ></input>
          </label>
          <div>
            <button onClick={prevViewModifierHanlder}>
              Ver vista previa de modificador de texto
            </button>
          </div>
          <p>Nuevo modificador vista previa: {JSON.stringify(newModifier)}</p>
        </>
      ) : (
        <></>
      )}
      {!disableAddModifier ? (
        <div className="modifier__container-btn">
          <button disabled={disableAddModifier} onClick={addNewModifierHanlder}>
            {" "}
            Añadir nuevo modificador{" "}
          </button>
          <button onClick={resetNewModifierHanlder}>
            Resetear nuevo modificador
          </button>
        </div>
      ) : (
        <></>
      )}
      <p>Modificadores producto:{JSON.stringify(modifiers)}</p>
      <label>
        {" "}
        Días de plazo para el pago:
        <input
          type="number"
          name="paymentTerm"
          value={newProduct.paymentTerm}
          onChange={(e) => {
            handleSetNewProductProperties(e);
          }}
        ></input>
      </label>
    </>
  );
}

export default Modifiers;
