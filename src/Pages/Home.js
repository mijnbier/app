import React from "react";
import logo from "../pub.svg";
import { data } from "../Data";
import "./Home.css";
import BeerList from "../Components/BeerList";

import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import getBrand from "../Services/OpenFoodFacts";

export default function Home() {
  const [barcode, setBarcode] = React.useState("Not Found");
  const [brand, setBrand] = React.useState("...");

  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <p>Mijn Bier App</p>
      <BeerList name="Duncan" data={data}></BeerList>

      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={async (err, result) => {
          if (result) {
            setBarcode(result.text);
            const response = await getBrand(result.text);
            setBrand(response);
          }
        }}
      />

      <p>{barcode}</p>
      <p>{brand}</p>
    </header>
  );
}
