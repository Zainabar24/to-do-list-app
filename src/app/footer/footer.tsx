import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-green-200/50 bg-green-50/70 text-green-950 shadow-inner backdrop-blur-xl">
            <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg shadow-green-600/25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a3 3 0 0 1 6 0M9 5h6m-5 7 2 2 4-4m-6 8h6"
                                />
                            </svg>
                        </span>

                        <span className="text-xl font-bold tracking-tight text-green-950">
                            My<span className="text-emerald-600">Tasks</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/about"
                            className="text-sm font-semibold text-green-700 transition hover:text-green-950"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="text-sm font-semibold text-green-700 transition hover:text-green-950"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="mt-8 border-t border-green-200/70 pt-5 text-center text-sm text-green-700/70">
                    © {new Date().getFullYear()} MyTasks. Stay organized, stay focused.
                </div>
            </div>
        </footer>
    );
}