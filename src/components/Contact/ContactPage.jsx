export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-6 py-12 mt-10
    md:mt-0 ">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need help? Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full">
                📍
              </div>
              <p className="text-gray-700">123 Street, Phnom Penh, Cambodia</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full">
                📞
              </div>
              <p className="text-gray-700">+855 123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full">
                ✉️
              </div>
              <p className="text-gray-700">support@yourbrand.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full">
                🌐
              </div>
              <p className="text-gray-700">www.yourbrand.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
