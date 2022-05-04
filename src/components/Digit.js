import React from "react";

export const Digit = ({ num, handleNumber }) => {
  return (
    <>
      <button
        onClick={handleNumber}
        type="button"
        className="btn btn-outline-dark border-0 shadow animate__animated animate__pulse animate__fast"
      >
        {num}
      </button>
    </>
  );
};
