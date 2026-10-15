
"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
    ];

    return (
        <header className="relative z-50 border-b border-white/10 bg-[#0b0d10]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-10">
                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {portfolio.name}
                    <span className="text-lime-400">.</span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="hidden rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300 md:inline-flex"
                >
                    Let&apos;s talk ↗
                </a>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/5 md:hidden"
                >
                    <span className="text-2xl leading-none" aria-hidden="true">
                        {isMenuOpen ? "×" : "☰"}
                    </span>
                </button>
            </nav>

            {/* Mobile navigation dropdown */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0b0d10] px-5 pb-6 pt-3 shadow-xl md:hidden"
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-3 rounded-full bg-lime-400 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-lime-300"
                        >
                            Let&apos;s talk ↗
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
