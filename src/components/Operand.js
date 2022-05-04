import React from "react";

export const Operand = ({ op, handleOp }) => {
  return (
    <>
      <button
        onClick={handleOp}
        type="button"
        className="btn btn-outline-dark border-0 shadow animate__animated animate__pulse animate__fast"
      >
        {op}
      </button>
    </>
  );
};
