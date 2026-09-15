
export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">

      <main className="mx-auto min-h-[calc(100vh-180px)] max-w-4xl px-4 py-10 sm:px-6">
        <section className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-xl shadow-green-900/10 backdrop-blur-xl sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg shadow-green-600/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.5a8.38 8.38 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.8L3 21l1.8-4.2A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"
                />
              </svg>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-green-950">
              Contact <span className="text-emerald-600">Us</span>
            </h1>

            <p className="mt-3 text-green-700">
              Have a question? Send us a message.
            </p>
          </div>

          <form className="mx-auto mt-10 max-w-2xl space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-green-900"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-green-200/70 bg-white/60 px-4 py-3 text-green-950 outline-none backdrop-blur-md transition placeholder:text-green-600/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-green-900"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-green-200/70 bg-white/60 px-4 py-3 text-green-950 outline-none backdrop-blur-md transition placeholder:text-green-600/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300/50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-green-900"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-green-200/70 bg-white/60 px-4 py-3 text-green-950 outline-none backdrop-blur-md transition placeholder:text-green-600/60 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300/50"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 px-5 py-3 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:from-green-700 hover:to-emerald-800"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 rounded-2xl border border-teal-200/60 bg-teal-100/70 p-5 text-center backdrop-blur-md">
            <p className="text-sm text-teal-700">
              This app was created by
            </p>
            <p className="mt-1 text-xl font-bold text-teal-950">Zainab</p>
          </div>
        </section>
      </main>
    </div>
  );
}