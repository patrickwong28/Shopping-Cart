export default function ShopItem(product) {
  return {
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
    id: product.id,
  };
}
