import React from "react";

export default function AlcoholDetail(props) {
  const alcohol = props.alcohol;
  
  if (props.alcohol == null) {
    return (
      <div>
        Alcohol: - %
      </div>
    );
  }

  return (
    <div>
      Alcohol: {Number(alcohol).toFixed(1)} %
    </div>
  );
}
