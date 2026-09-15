import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-green-200/50 bg-green-50/70 shadow-sm backdrop-blur-xl">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
                <Link
                    href="/"
                    aria-label="Todo list home"
                    className="flex items-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 p-2.5 text-white shadow-lg shadow-green-600/25 transition hover:scale-105"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a3 3 0 0 1 6 0M9 5h6m-5 7 2 2 4-4m-6 8h6"
                        />
                    </svg>
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
            </nav>
        </header>
    );
}