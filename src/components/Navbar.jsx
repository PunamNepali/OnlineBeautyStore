import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-400 p-4 text-white">
      <ul className="flex flex-wrap gap-4 items-center">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
        <li><Link to="/products" className="hover:underline">Product</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/wishlist" className="hover:underline">View Wishlist</Link></li>
      </ul>
    </nav>
  );
}
