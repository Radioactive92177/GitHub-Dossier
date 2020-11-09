import React from "react";
import Language from "./Language";

const Languages = ({ languagesData }) => {
  return (
    <>
      {languagesData.map((language) => {
        return <Language language={language} key={language.label} />;
      })}
    </>
  );
};

export default Languages;
