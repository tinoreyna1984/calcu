import React from "react";

export const OtherButtons = ({ caption, handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-outline-dark border-0 shadow animate__animated animate__pulse animate__fast"
      >
        {caption}
      </button>
    </>
  );
};
