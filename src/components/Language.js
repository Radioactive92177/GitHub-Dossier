import React from "react";

const Language = ({ language }) => {
  return (
    <>
      <h1>{language.label}</h1>
      <h3>{language.value}</h3>
    </>
  );
};

export default Language;
