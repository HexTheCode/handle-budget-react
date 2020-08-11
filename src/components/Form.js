import React, { useState } from "react";
import Error from "./Error";
import ShortId from "shortid";
import PropTypes from "prop-types";

const Form = ({ saveGasto, crearGasto }) => {
  const [nombreGasto, saveNombre] = useState("");
  const [cantidad, saveCantidad] = useState(0);
  const [error, saveError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    // Validar
    if (nombreGasto.trim() === "" || isNaN(cantidad) || cantidad < 1) {
      saveError(true);
      return;
    }
    saveError(false);
    // construir gasto

    const gasto = {
      nombre: nombreGasto,
      cantidad,
      id: ShortId.generate(),
    };

    // pasar gasto componente principal

    saveGasto(gasto);
    crearGasto(true);

    // resetear el form

    saveCantidad(0);
    saveNombre("");
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>

      {error ? (
        <Error message="Campos Obligatorios o Presupuesto Incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombreGasto}
          onChange={(e) => saveNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => saveCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Form.prototype = {
  crearGasto: PropTypes.func.isRequired(),
  saveGasto: PropTypes.func.isRequired(),
};

export default Form;
