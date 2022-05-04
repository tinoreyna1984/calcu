import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [opeActual, setOpeActual] = useState("");
  const [resultado, setResultado] = useState(0);

  const [alerta, setAlerta] = useState(false);

  const numero = (digito) => {
    if (digito === ".") {
      if (num1.length > 0 || num2.length > 0) {
        if (opeActual === "") {
          setNum1(num1 + digito);
        } else {
          setNum2(num2 + digito);
        }
      } else {
        if (opeActual === "") {
          setNum1("0" + digito);
        } else {
          setNum2("0" + digito);
        }
      }
    } else {
      if (opeActual === "") {
        setNum1(num1 + digito);
      } else {
        setNum2(num2 + digito);
      }
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
      <div className="row m-3 shadow rounded">
        <div className="text-end p-3 fs-6">
          {opeActual ? num1 + opeActual : ""}
        </div>
        <div className="text-end p-3 fs-2">
          {resultado ? resultado : !opeActual ? num1 : num2}
        </div>
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <button
          onClick={() => {
            numero(7);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          7
        </button>
        <button
          onClick={() => {
            numero(8);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          8
        </button>
        <button
          onClick={() => {
            numero(9);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          9
        </button>
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <button
          onClick={() => {
            numero(4);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          4
        </button>
        <button
          onClick={() => {
            numero(5);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          5
        </button>
        <button
          onClick={() => {
            numero(6);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          6
        </button>
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <button
          onClick={() => {
            numero(1);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          1
        </button>
        <button
          onClick={() => {
            numero(2);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          2
        </button>
        <button
          onClick={() => {
            numero(3);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          3
        </button>
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <button
          onClick={() => {
            numero(0);
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          0
        </button>
        <button
          onClick={() => {
            operacion("+");
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          +
        </button>
        <button
          onClick={() => {
            operacion("-");
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          -
        </button>
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <button
          onClick={() => {
            operacion("*");
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          *
        </button>
        <button
          onClick={() => {
            operacion("/");
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          /
        </button>
        <button
          onClick={() => {
            res();
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          =
        </button>
      </div>
      <div className="row btn-toolbar row-cols-3" role="toolbar">
        <button
          onClick={() => {
            numero(".");
          }}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          .
        </button>
        <button
          onClick={reset}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          RESET
        </button>
        <button
          onClick={acerca}
          type="button"
          className="btn btn-outline-dark border-0 shadow"
        >
          ABOUT
        </button>
      </div>
      {!alerta ? (
        ""
      ) : (
        <div
          className="alert mt-3 alert-light shadow alert-dismissible fade show"
          role="alert"
        >
          <div>
            Hecho por{" "}
            <a
              className="text-decoration-none"
              href="https://tinexlab.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tino Reyna
            </a>
            <br/>
            <a
              className="btn btn-dark"
              href="https://github.com/tinoreyna1984/calcu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            onClick={acerca}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
