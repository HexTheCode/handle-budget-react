import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  const [presupuesto, savePresupuesto] = useState(0);
  const [restante, saveRestante] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [gastos, saveGastos] = useState([]);

  const agregarNuevoGasto = (gasto) => {
    saveGastos([...gastos, gasto]);
    // saveRestante(restante - gasto.cantidad);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              savePresupuesto={savePresupuesto}
              saveRestante={saveRestante}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form agregarNuevoGasto={agregarNuevoGasto} />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
