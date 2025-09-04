export default function DeliveryAndReturns() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-serif text-center mb-6 text-pink-500">
        Delivery & Returns
      </h1>

      <p className="text-center mb-8 text-black max-w-2xl mx-auto">
        This website is a college project. Below is a sample of delivery and return policies
        you might see on a real eCommerce site.
      </p>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6">
        <div>
          <h2 className="text-xl font-medium mb-2 text-black">Delivery</h2>
          <p className="text-black">
            Orders are processed within 1-2 business days. Since this is a college project, 
            no real deliveries are made. In a real website, customers would receive shipping 
            updates via email.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2 text-black">Returns</h2>
          <p className="text-black">
            Products can be returned within 7 days of delivery in their original condition. 
            As this is a project, no actual returns are processed. This section is included 
            to demonstrate how a real eCommerce site would provide return information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2 text-black">Note</h2>
          <p className="text-black">
            All policies shown here are for demonstration purposes only and are part of our 
            college project.
          </p>
        </div>
      </div>
    </div>
  );
}
