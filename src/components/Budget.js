import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";
import PropTypes from "prop-types";

const Budget = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: {presupuesto}€</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: {restante}€
      </div>
    </Fragment>
  );
};

Budget.prototype = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired,
};

export default Budget;
