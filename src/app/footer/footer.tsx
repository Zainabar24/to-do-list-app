import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m5 12 4 4L19 6"
                                    />
                                </svg>
                            </span>

                            <span className="text-xl font-bold tracking-tight text-white">
                                Task<span className="text-indigo-400">ly</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                            Organize your day, focus on what matters, and get more done
                            with a simpler task manager.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold text-white">Product</h2>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <Link className="transition hover:text-white" href="/">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link className="transition hover:text-white" href="/tasks">
                                    My Tasks
                                </Link>
                            </li>
                            <li>
                                <Link className="transition hover:text-white" href="/completed">
                                    Completed
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold text-white">Resources</h2>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <Link className="transition hover:text-white" href="/help">
                                    Help center
                                </Link>
                            </li>
                            <li>
                                <Link className="transition hover:text-white" href="/about">
                                    Know About us
                                </Link>
                            </li>
                            <li>
                                <Link className="transition hover:text-white" href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold text-white">Stay organized</h2>
                        <p className="mt-4 text-sm leading-6 text-slate-400">
                            Keep your goals clear and your progress moving forward.
                        </p>

                        <Link
                            href="/tasks/new"
                            className="mt-5 inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                        >
                            Create a task
                            <span className="ml-2 text-lg leading-none">→</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Taskly. All rights reserved.</p>

                    <div className="flex gap-5">
                        <Link className="transition hover:text-white" href="/privacy">
                            Privacy
                        </Link>
                        <Link className="transition hover:text-white" href="/terms">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}