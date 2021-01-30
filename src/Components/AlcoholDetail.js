import React from "react";

export default function AlcoholDetail(props) {
  const alcohol = props.alcohol;
  console.log(alcohol)
  
  if (props.alcohol == null) {
      console.log(props.alcohol)
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
