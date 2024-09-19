import { useEffect, useState } from 'react';
import ShopItem from '../Utility/ShopItem';
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch(
        'https://fakestoreapi.com/products/category/electronics'
      );
      return resp;
    };

    fetchProducts()
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(
            'There was an issue with fetching the resource',
            resp.status
          );
        }
      })
      .then((data) => {
        let shopItems = data.map((product) => ShopItem(product));

        setProducts(shopItems);
      })
      .catch((err) => {
        console.log('An error ocurred: ', err);
      });
  }, []);

  const handleClick = ({ name, description, price, image, id }) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === name);

      // If the item exists in the cart, update the quantity, else insert the new item to the cart
      if (index >= 0) {
        // Target the item who's quantity needs to be updated
        const newQuantity = prevCart[index].quantity + 1;

        const newCart = [
          ...prevCart.slice(0, index),
          { ...prevCart[index], quantity: newQuantity },
          ...prevCart.slice(index + 1, prevCart.length),
        ];

        console.log('CART', newCart);

        return newCart;
      } else {
        let newItem = { name, description, price, image, id, quantity: 1 };

        return [...prevCart, newItem];
      }
    });
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <img src={product.image} />
          <p>${product.price}</p>
          <button onClick={() => handleClick(product)}>Add to Cart</button>
        </div>
      ))}
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} Quantity: {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}
