import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import Budget from "./components/Budget";

function App() {
  const [presupuesto, savePresupuesto] = useState(0);
  const [restante, saveRestante] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [gastos, saveGastos] = useState([]);
  const [gasto, saveGasto] = useState({});
  const [creargasto, saveCrearGasto] = useState(false);

  useEffect(() => {
    if (creargasto) {
      saveGastos([...gastos, gasto]);

      const presupuestoRestante = restante - gasto.cantidad;
      saveRestante(presupuestoRestante);

      saveCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

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
                <Form saveGasto={saveGasto} crearGasto={saveCrearGasto} />
              </div>
              <div className="one-half column">
                <List gastos={gastos} />
                <Budget presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
