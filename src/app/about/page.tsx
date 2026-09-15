
export default function About() {
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
                  d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a3 3 0 0 1 6 0M9 5h6m-5 7 2 2 4-4m-6 8h6"
                />
              </svg>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-green-950">
              About <span className="text-emerald-600">MyTasks</span>
            </h1>

            <p className="mt-3 text-green-700">
              A simple and beautiful way to organize your daily tasks.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200/60 bg-green-100/70 p-5 backdrop-blur-md">
              <h2 className="text-lg font-bold text-green-950">
                Stay organized
              </h2>
              <p className="mt-2 leading-7 text-green-800/80">
                MyTasks helps you add, complete, and manage your tasks from one
                clean and focused workspace.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/60 bg-emerald-100/70 p-5 backdrop-blur-md">
              <h2 className="text-lg font-bold text-emerald-950">
                Simple productivity
              </h2>
              <p className="mt-2 leading-7 text-emerald-800/80">
                Filter your tasks by all, active, or completed status and keep
                track of your progress with ease.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-teal-200/60 bg-teal-100/70 p-5 text-center backdrop-blur-md">
            <p className="text-sm uppercase tracking-wider text-teal-700">
              Created by
            </p>
            <p className="mt-1 text-2xl font-bold text-teal-950">Zainab</p>
          </div>
        </section>
      </main>

      
    </div>
  );
}