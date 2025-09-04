export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-serif text-center mb-6 text-pink-500">
        Terms & Conditions
      </h1>

      <p className="text-center mb-8 text-black max-w-2xl mx-auto">
        This website is a college project. The following terms and conditions are for demonstration purposes only.
      </p>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Use of Website</h2>
          <p>
            By using this website, you agree that this site is intended for educational and demonstration purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Intellectual Property</h2>
          <p>
            All content on this site, including images, text, and code, is part of the college project and may not be used commercially.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Liability</h2>
          <p>
            This project is for learning purposes only. The creators are not responsible for any real transactions or losses.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Changes</h2>
          <p>
            The content and functionality of this website may change as part of the project development.
          </p>
        </section>
      </div>
    </div>
  );
}
