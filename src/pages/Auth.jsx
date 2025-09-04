// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Auth() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();
//   const { login, currentUser } = useAuth();

//   //  Only redirect if already logged in
//   useEffect(() => {
//     if (currentUser) {
//       navigate("/");
//     }
//   }, [currentUser, navigate]);

//   const handleSignup = () => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     if (users.find((user) => user.username === username)) {
//       setError("User already exists!");
//       return false;
//     }

//     users.push({ username, password });
//     localStorage.setItem("users", JSON.stringify(users));
//     setIsLogin(true);
//     setUsername("");
//     setPassword("");
//     setError("Signup successful! Please login.");
//     return true;
//   };

//   const handleLogin = () => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       login(user);
//       navigate("/"); //  redirect only after successful login
//       return true;
//     } else {
//       setError("Invalid credentials!");
//       return false;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     isLogin ? handleLogin() : handleSignup();
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 mt-10 border rounded shadow">
//       {/* Toggle buttons */}
//       <div className="flex mb-4">
//         <button
//           onClick={() => setIsLogin(true)}
//           className={`flex-1 p-2 ${
//             isLogin ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Login
//         </button>
//         <button
//           onClick={() => setIsLogin(false)}
//           className={`flex-1 p-2 ${
//             !isLogin ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Signup
//         </button>
//       </div>

//       <h2 className="text-2xl mb-4 text-center">
//         {isLogin ? "Login" : "Signup"}
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         <button
//           type="submit"
//           className={`p-2 text-white rounded ${
//             isLogin ? "bg-green-500" : "bg-blue-500"
//           }`}
//         >
//           {isLogin ? "Login" : "Signup"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Auth;

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup
  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      alert("Email already exists. Try logging in!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
    setIsSignup(false);
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      alert("Login successful!");
      login(user);
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-3"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-3"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-pink-500 hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
