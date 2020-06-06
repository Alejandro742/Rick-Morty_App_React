import React from "react";

const Mensaje = ({ msg }) => {
  return (
    <div className="alert alert-danger p-2 mb-2 mt-2 fntsz-third">{msg}</div>
  );
};

export default Mensaje;
