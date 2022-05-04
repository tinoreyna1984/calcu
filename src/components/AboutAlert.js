import React from "react";

export const AboutAlert = ({ handleAlert }) => {
  return (
    <div
      className="alert mt-3 alert-light shadow alert-dismissible fade show animate__animated animate__rubberBand animate__fast"
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
        <br />
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
        onClick={handleAlert}
      ></button>
    </div>
  );
};
