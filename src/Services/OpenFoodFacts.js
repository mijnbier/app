import fetch from "node-fetch";

export default async function getBrand(code) {
  const url = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;
  const response = await fetch(url);
  const json = await response.json();

  if (json.product.brands === json.product.product_name) {
    return json.product.product_name;
  } else {
    return `${json.product.brands} ${json.product.product_name}`;
  }
}
