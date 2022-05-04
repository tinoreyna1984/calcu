import { useState } from "react";

export const useValues = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [opeActual, setOpeActual] = useState("");
  const [resultado, setResultado] = useState(0);
  const [alerta, setAlerta] = useState(false);
  
  return [
    num1,
    setNum1,
    num2,
    setNum2,
    opeActual,
    setOpeActual,
    resultado,
    setResultado,
    alerta,
    setAlerta,
  ];
};
