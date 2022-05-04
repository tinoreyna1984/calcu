import React from "react";

export const Display = ({ display1, display2 }) => {
  return (
    <div className="row m-3 shadow rounded animate__animated animate__rubberBand animate__fast">
      <div className="text-end p-3 fs-6">{display1}</div>
      <div className="text-end p-3 fs-2">{display2}</div>
    </div>
  );
};
