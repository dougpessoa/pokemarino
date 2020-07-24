
import { uuid } from 'uuidv4';

export default function addPokemonToCart(
  id: number, 
  price: number, 
  name: string,
  image: string
) {

  const productsInLocalstorage = localStorage.getItem("@Pokemarino: products");

  let products = [];   

  if(productsInLocalstorage) {
    products = JSON.parse(productsInLocalstorage);
  }

  const product = {
    uuid: uuid(),
    id,
    name,
    price,
    image
  };

  products.push(product);

  localStorage.setItem("@Pokemarino: products", JSON.stringify(products));
}