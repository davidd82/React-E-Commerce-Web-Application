import Product from "./Product.jsx"

export default function FeaturedProducts({ products, cart, onAdd, onRemove, onDelete }) {
  return (
    <div className='container py-5' id='products-featured'>
      <div className='row'>
        <h2 className='col-12 mb-3'>Featured Products</h2>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        {products.map((product) => {

          const cartItem = cart.find(item => item.id === product.id);

          return (
            <Product
              key={product.id}
              product={product}
              quantity={cartItem ? cartItem.quantity : 0}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}