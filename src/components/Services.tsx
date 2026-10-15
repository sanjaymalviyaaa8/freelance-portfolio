"use client";
import { portfolio } from "@/data/portfolio";

export default function Services() {
    return (
        <section
            id="services"
            className="bg-[#0b0d10] px-5 py-24 sm:px-6 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                    What I Do
                </p>

                <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Services that help your business grow.
                    </h2>
                    <p className="max-w-md text-sm leading-6 text-gray-400">
                        From building your first website to creating polished web
                        applications, I help turn ideas into reality.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {portfolio.services.map((service) => (
                        <article
                            key={service.number}
                            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/[0.04] sm:p-8"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    {service.number}
                                </span>
                                <span className="text-xl text-lime-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                    ↗
                                </span>
                            </div>

                            <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                                {service.title}
                            </h3>

                            <p className="mb-6 max-w-lg text-sm leading-7 text-gray-400">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}