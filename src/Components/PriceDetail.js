import React from "react";
import Price from "./Price";
import PriceEmpty from "./PriceEmpty";

export default function PriceDetail(props) {
  const unitPrice = props.totalprice / props.buyed;
  const totalPrice = props.totalprice || 0;
  
  if (props.totalprice === "") {
    return (
      <div>
        Prijs: <PriceEmpty /> ({props.buyed} stuks)
      </div>
    );
  }

  return (
    <div>
      Prijs: <Price value={unitPrice} /> ({props.buyed} stuks, totaal:
      <Price value={totalPrice} />)
    </div>
  );
}
