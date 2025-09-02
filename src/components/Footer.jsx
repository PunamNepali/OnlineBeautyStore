export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white p-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-3 uppercase">Link Info</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Skin Care</li>
            <li>Makeup</li>
            <li>New Product</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 uppercase">Support</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 uppercase">About</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Team</li>
            <li>Delivery And Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 uppercase">Contact Us</h3>
          <p className="text-gray-200 mb-3">446 Ramblewood St. Gurnee, IL 60031</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l flex-1 outline-none"
            />
            <button className="bg-gray-800 p-2 rounded-r hover:bg-gray-700">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
