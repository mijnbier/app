import React from "react";

export default function AlcoholDetail(props) {
  const alcohol = props.alcohol;
  
  if (props.alcohol == null) {
    return (
      <span>
         - % Alc.
      </span>
    );
  }

  return (
    <span>
      {Number(alcohol).toFixed(1)}% Alc.
    </span>
  );
}
