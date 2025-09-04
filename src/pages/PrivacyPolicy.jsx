export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-serif text-center mb-6 text-pink-500">
        Privacy Policy
      </h1>

      <p className="text-center mb-8 text-black max-w-2xl mx-auto">
        This website is a college project. Any personal information collected is for demonstration purposes only.
      </p>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6 text-black">
        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Information Collection</h2>
          <p>
            For this project, only basic information (name, email, password) is collected locally using browser storage (localStorage).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Use of Information</h2>
          <p>
            Information is used only for demonstrating login/signup functionality. No real data is shared.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Cookies</h2>
          <p>
            This project does not use cookies or tracking for real purposes. All data is stored in localStorage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2 text-black">Third-Party Services</h2>
          <p>
            No third-party services are integrated for collecting personal data. This page is for demonstration only.
          </p>
        </section>
      </div>
    </div>
  );
}
