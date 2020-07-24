import IPokemonLocalStorage from '../interfaces/IPokemonLocalStorage';

interface ObjectOfCart {
  uuid: string; 
}

const loadStorage = (): IPokemonLocalStorage[] => {
  const productsInLocalstorage = localStorage.getItem("@Pokemarino: products");

  let products = []; 

  if(productsInLocalstorage) {
    products = JSON.parse(productsInLocalstorage);
  }

  return products;
};

const deleteItemFromStorage = (uuid: string, listOfCart: ObjectOfCart[]): void => {
  const index = listOfCart.map(item => { return item.uuid }).indexOf(uuid);
  listOfCart.splice(index, 1);

  localStorage.setItem("@Pokemarino: products", JSON.stringify(listOfCart));
}

export { loadStorage, deleteItemFromStorage };