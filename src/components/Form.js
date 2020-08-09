import React, { useState } from "react";
import Error from "./Error";
const Form = () => {
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

    // pasar gasto componente principal

    // resetear el form
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

export default Form;
