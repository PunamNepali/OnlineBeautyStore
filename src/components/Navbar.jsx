import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiShoppingCart, FiHeart } from "react-icons/fi"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white p-4 relative shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold text-pink-500">
          Beauty Store
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {currentUser ? (
            <>
              <li>Hello, {currentUser.username}</li>
              <li>
                <button onClick={logout} className="hover:underline">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth" className="hover:underline">
                Login/Signup
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </li>

          {/* Cart Icon */}
          <li>
            <Link to="/cart" className="hover:text-pink-500 text-2xl relative">
              <FiShoppingCart />
            </Link>
          </li>

          {/* Wishlist Icon */}
          <li>
            <Link to="/wishlist" className="hover:text-pink-500 text-2xl relative">
              <FiHeart />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-pink-300 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {currentUser ? (
              <>
                <li>Hi, {currentUser.username}</li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="hover:underline"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="hover:underline"
                >
                  Login/Signup
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                Products
              </Link>
            </li>

            {/* Mobile Icons */}
            <li>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-pink-500"
              >
                <FiShoppingCart />
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-pink-500"
              >
                <FiHeart />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
