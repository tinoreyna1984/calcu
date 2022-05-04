import React from "react";
import { AboutAlert } from "./components/AboutAlert";
import { Digit } from "./components/Digit";
import { Display } from "./components/Display";
import { Operand } from "./components/Operand";
import { OtherButtons } from "./components/OtherButtons";
import { useValues } from "./hooks/useValues";

const Calculadora = () => {
  
    const [num1,
    setNum1,
    num2,
    setNum2,
    opeActual,
    setOpeActual,
    resultado,
    setResultado,
    alerta,
    setAlerta,] = useValues();

  const numero = (digito) => {
    if (opeActual === "") {
      setNum1(num1 + digito);
    } else {
      setNum2(num2 + digito);
    }
  };

  const operacion = (op) => {
    setOpeActual(op);
  };

  const res = () => {
    switch (opeActual) {
      case "+":
        setResultado(Number(num1) + Number(num2));
        break;
      case "-":
        setResultado(Number(num1) - Number(num2));
        break;
      case "*":
        setResultado(parseFloat(Number(num1) * Number(num2)).toFixed(4));
        break;
      case "/":
        setResultado(
          Number(num2) !== 0
            ? parseFloat(Number(num1) / Number(num2)).toFixed(4)
            : "NaN"
        );
        break;
      default:
        break;
    }
    setNum1("");
    setNum2("");
    setOpeActual("");
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setOpeActual("");
    setResultado("");
  };

  const acerca = () => {
    setAlerta(!alerta);
  };

  return (
    <div className="container-flex border border-light m-3 p-5 shadow-lg rounded">
      <Display
        display1={opeActual ? num1 + opeActual : ""}
        display2={resultado ? resultado : !opeActual ? num1 : num2}
      />
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <Digit
          num="7"
          handleNumber={() => {
            numero(7);
          }}
        />
        <Digit
          num="8"
          handleNumber={() => {
            numero(8);
          }}
        />
        <Digit
          num="9"
          handleNumber={() => {
            numero(9);
          }}
        />
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <Digit
          num="4"
          handleNumber={() => {
            numero(4);
          }}
        />
        <Digit
          num="5"
          handleNumber={() => {
            numero(5);
          }}
        />
        <Digit
          num="6"
          handleNumber={() => {
            numero(6);
          }}
        />
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <Digit
          num="1"
          handleNumber={() => {
            numero(1);
          }}
        />
        <Digit
          num="2"
          handleNumber={() => {
            numero(2);
          }}
        />
        <Digit
          num="3"
          handleNumber={() => {
            numero(3);
          }}
        />
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <Digit
          num="0"
          handleNumber={() => {
            numero(0);
          }}
        />
        <Operand
          op="+"
          handleOp={() => {
            operacion("+");
          }}
        />
        <Operand
          op="-"
          handleOp={() => {
            operacion("-");
          }}
        />
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <Operand
          op="*"
          handleOp={() => {
            operacion("*");
          }}
        />
        <Operand
          op="/"
          handleOp={() => {
            operacion("/");
          }}
        />
        <Operand
          op="="
          handleOp={() => {
            res();
          }}
        />
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <Digit
          num="."
          handleNumber={() => {
            numero(".");
          }}
        />
        <OtherButtons caption="RESET" handleClick={reset} />
        <OtherButtons caption="ABOUT" handleClick={acerca} />
      </div>
      {!alerta ? "" : <AboutAlert handleAlert={acerca} />}
    </div>
  );
};

export default Calculadora;
