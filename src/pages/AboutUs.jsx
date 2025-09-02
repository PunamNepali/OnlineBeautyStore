// // src/pages/About.jsx
// import React from "react";

// export default function About() {
//   return (
//     <main className="flex-grow px-6 py-16 bg-pink-50 text-gray-800">
//       <section className="max-w-5xl mx-auto mb-16">
//         <h2 className="text-5xl font-bold mb-6 text-center text-pink-600">About Us</h2>
//         <p className="text-lg text-center mb-10">
//            We're a team of passionate beauty enthusiasts dedicated to helping you achieve the skin of your dreams.
//         </p>

//         {/* Grid for features */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-3 text-pink-500">Our Experts</h3>
//             <p>
//               Skincare scientists, makeup artists, and beauty professionals creating highquality, effective products.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-3 text-pink-500">Natural Ingredients</h3>
//             <p>
//               We use only the finest natural ingredients. Our packaging is fully recyclable and eco-friendly.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-3 text-pink-500">Our Mission</h3>
//             <p>
//               To provide the best skincare products that work for your skin while promoting overall well-being.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-5xl mx-auto text-center">
//         <p className="text-gray-700 text-lg mb-8">
//           Our story began with a shared love for natural ingredients and sustainable practices. Over time, it has evolved into a comprehensive range of products that cater to diverse skin types and concerns.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-3 text-pink-500">Quality Products</h3>
//             <p>
//               Carefully crafted skincare and beauty products that are effective and safe.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-3 text-pink-500">Sustainability</h3>
//             <p>
//               Eco-friendly ingredients and packaging to support a sustainable lifestyle.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-3 text-pink-500">Customer Care</h3>
//             <p>
//               Our mission is to ensure healthy skin and overall satisfaction for all our customers.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <main className="flex-grow px-6 py-16 bg-pink-50 text-gray-800">
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-6 text-center text-pink-600">About Us</h2>
        <p className="text-lg text-center mb-10">
         We bring you the best products from top skincare, haircare, and beauty brands, all in one place.
        </p>

        {/* Grid for features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-500">Top Brands</h3>
            <p>
              We carefully select products from leading beauty brands to ensure quality and reliability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-500">Wide Selection</h3>
            <p>
              Our store offers a variety of products for all skin types, concerns, and beauty preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-500">Easy Shopping</h3>
            <p>
              Convenient browsing, simple checkout, and secure payment options make shopping effortless.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-center">
        <p className="text-gray-700 text-lg mb-8">
          Our goal is to make your beauty shopping experience simple, enjoyable, and reliable. We constantly update our collection to bring you the latest and most popular products from trusted brands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-500">Customer Satisfaction</h3>
            <p>
              We are dedicated to providing excellent customer service and support for all your beauty needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-500">Authentic Products</h3>
            <p>
              All products sold in our store are 100% authentic and sourced directly from brands or authorized distributors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-500">Fast Delivery</h3>
            <p>
              We provide fast and reliable delivery so you can enjoy your favorite beauty products as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

