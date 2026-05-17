import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import './App.css'
import Navbar from "./Navbar.jsx"
import Header from './Header.jsx'
import Divider from './Divider.jsx'
import FeaturedProducts from './FeaturedProducts.jsx'
import Footer from './Footer.jsx'
import Subtotal from './Subtotal.jsx';
import { useState } from 'react'; 
import TotalCount from './TotalCount.jsx';
import AddProduct from "./AddProduct";



function App() {

  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Did you know that there's a tunnel under Ocean Blvd | Vinyl Version",
      image: "./img/vinyl.jpg",
      price: 35,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Did you know that there's a tunnel under Ocean Blvd | T-Shirt",
      image: "./img/shirt.jpg",
      price: 20,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Did you know that there's a tunnel under Ocean Blvd | CD Version",
      image: "./img/cd.jpg",
      price: 15,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Lana Del Rey Necklace | Stainless Steel Necklace Pendant and Chain",
      image: "./img/necklace.jpg",
      price: 10,
      rating: 4.5,
    }
  ]);

  function handleDeleteProduct(productId) {
    // Remove product from products list
    setProducts(prev => prev.filter(p => p.id !== productId));

    // Also remove from cart if it exists there
    setCart(prev => prev.filter(item => item.id !== productId));
  }

  function handleAddProduct(newProduct) {
    setProducts(prev => [
      ...prev,
      { ...newProduct, id: Date.now() }
    ]);
  }

  function handleAdd(product) {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleRemove(product) {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter(item => item.id !== product.id);
      }

      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalcount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Divider></Divider>
    <FeaturedProducts products={products} cart={cart} onAdd={handleAdd} onRemove={handleRemove} onDelete={handleDeleteProduct}/>
    <TotalCount totalcount={totalcount}></TotalCount>
    <Subtotal subtotal={subtotal}></Subtotal>
    <AddProduct onAddProduct={handleAddProduct}/>
    <Footer></Footer>
    </>
    
  )
}

export default App
