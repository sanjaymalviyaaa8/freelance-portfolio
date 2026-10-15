import { portfolio } from "@/data/portfolio";

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#0b0d10] px-5 py-24 sm:px-6 lg:px-10"
        >
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                        About Me
                    </p>

                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        {portfolio.tagline}
                    </h2>

                    <div className="space-y-4 text-sm leading-7 text-gray-400">
                        <p>
                            I&apos;m {portfolio.name}, a {portfolio.role} focused on
                            building modern, responsive, and user-friendly web experiences.
                        </p>

                        <p>
                            I enjoy turning designs and ideas into functional interfaces,
                            writing reusable components, and making websites work smoothly
                            across different screen sizes.
                        </p>

                        <p>
                            I&apos;m continuing to strengthen my skills by building practical
                            projects and exploring modern web development tools.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
                    >
                        Let&apos;s work together <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                    <p className="mb-6 text-sm font-semibold text-white">
                        Technologies I work with
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        {portfolio.skills.map((skill) => (<div
                            key={skill}
                            className="rounded-xl border border-white/10 px-4 py-4 text-sm text-gray-300 transition hover:border-lime-400/40 hover:text-lime-400"
                        >
                            <span className="mr-2 text-lime-400">✳</span>
                            {skill}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}