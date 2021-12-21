import React from "react";
const WordSound = ({ sourceSound }) => {
  return (
    <audio controls>
      <source src={sourceSound} />
    </audio>
  );
};

export default WordSound;
