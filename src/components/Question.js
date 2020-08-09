import React, { Fragment, useState } from "react";
import Error from "./Error";

const Question = ({ saveRestante, savePresupuesto }) => {
  // Crear State

  const [cantidad, saveCantidad] = useState(0);
  const [error, updateError] = useState(false);

  const handlePresupuesto = (e) => {
    saveCantidad(parseInt(e.target.value));
  };

  // Submit definir presupuesto
  const submit = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      updateError(true);
      return;
    }

    // Si se pasa la validacion
    updateError(false);

    savePresupuesto(cantidad);
    saveRestante(cantidad);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error message="Presupuesto Incorrecto" /> : null}

      <form onSubmit={submit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handlePresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Question;
