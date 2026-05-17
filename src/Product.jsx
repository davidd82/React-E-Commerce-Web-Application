import './Product.css';

export default function Product({ product, quantity, onAdd, onRemove, onDelete }) {

  function handleAdd() {
    onAdd(product);
  }

  function handleRemove() {
    onRemove(product);
  } 

  function handleDelete() {
    onDelete(product.id);
  }

  return (
    <div className='col'>
      <div className="card h-100">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
        />

        <div className="card-body">
          <h5 className='card-title'>{product.name}</h5>

          <p><b>Price:</b> ${product.price}</p>
          <p><b>Rating:</b> {product.rating} ☆</p>

          <div className="d-flex align-items-center gap-2">
            <span>In Cart:</span>

            <button
              id="sub-btn"
              onClick={handleRemove}
              disabled={quantity === 0}
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              id="add-btn"
              onClick={handleAdd}
            >
              +
            </button>

          </div>

          <button
              className="btn btn-danger btn-sm mt-3"
              onClick={handleDelete}
            >
              Delete
          </button>

        </div>
      </div>
    </div>
  );
}