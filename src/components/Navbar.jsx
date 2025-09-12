// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi"; // added search icon

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false); // search toggle
//   const { currentUser, logout } = useAuth();

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-white p-4 relative shadow-md">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-3xl font-semibold text-pink-500">
//             Beauty Store
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-6 items-center">
//             {currentUser ? (
//               <>
//                 <li>Hello, {currentUser.username}</li>
//                 <li>
//                   <button onClick={logout} className="hover:underline">
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link to="/auth" className="hover:underline">
//                   Login/Signup
//                 </Link>
//               </li>
//             )}
//             <li>
//               <Link to="/about" className="hover:underline">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="hover:underline">
//                 Products
//               </Link>
//             </li>

//             {/* Search Icon */}
//             <li>
//               <button
//                 onClick={() => setShowSearch(!showSearch)}
//                 className="text-2xl text-pink-500 hover:text-pink-600"
//               >
//                 <FiSearch />
//               </button>
//             </li>

//             {/* Cart Icon */}
//             <li>
//               <Link to="/cart" className="hover:text-pink-500 text-2xl relative">
//                 <FiShoppingCart />
//               </Link>
//             </li>

//             {/* Wishlist Icon */}
//             <li>
//               <Link
//                 to="/wishlist"
//                 className="hover:text-pink-500 text-2xl relative"
//               >
//                 <FiHeart />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Search Section (toggle) */}
//       {showSearch && (
//         <div className="bg-gray-50 py-6 shadow-md text-center">
//           <h2 className="text-xl font-semibold mb-4">Search for products</h2>

//           {/* Search Choices */}
//           <div className="flex flex-wrap gap-3 justify-center mb-4">
//             {["Bodycare", "Skincare", "Haircare"].map((item) => (
//               <button
//                 key={item}
//                 className="px-4 py-2 border border-pink-500 text-pink-600 rounded-md hover:bg-pink-500 hover:text-white transition"
//               >
//                 {item.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           <p className="text-gray-500">
//             Start typing to see products you are looking for.
//           </p>
//         </div>
//       )}
//     </>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
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

            {/* Search Icon */}
            <li>
              <button
                onClick={() => navigate("/search")}
                className="text-2xl text-pink-500 hover:text-pink-600"
              >
                <FiSearch />
              </button>
            </li>

            {/* Cart Icon */}
            <li>
              <Link to="/cart" className="hover:text-pink-500 text-2xl relative">
                <FiShoppingCart />
              </Link>
            </li>

            {/* Wishlist Icon */}
            <li>
              <Link
                to="/wishlist"
                className="hover:text-pink-500 text-2xl relative"
              >
                <FiHeart />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
