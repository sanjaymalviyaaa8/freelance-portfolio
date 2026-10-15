
const services = [
    "React & Next.js Development",
    "Responsive Website Development",
    "API Integration & Dashboards",
    "Bug Fixes & UI Improvements",
];

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-10">
            <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-lime-400" />
                    React Developer · Available for freelance
                </div>

                <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                    I build digital
                    <span className="block text-lime-400">experiences</span>
                    that work.
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                    I help businesses turn ideas into fast, responsive and
                    user-friendly websites and web applications using React
                    and Next.js.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        href="#contact"
                        className="rounded-full bg-lime-400 px-7 py-3.5 font-semibold text-black transition hover:bg-lime-300"
                    >
                        Start a project ↗
                    </a>

                    <a
                        href="#work"
                        className="rounded-full border border-white/15 px-7 py-3.5 font-medium transition hover:border-white/40"
                    >
                        Explore my work
                    </a>
                </div>

                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
                    <span>✓ Responsive design</span>
                    <span>✓ Clean, reusable code</span>
                    <span>✓ Reliable delivery</span>
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-5 rounded-[2rem] bg-lime-400/10 blur-3xl" />

                <div className="relative rounded-3xl border border-white/10 bg-[#12151a] p-7 shadow-2xl sm:p-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6">
                        <div>
                            <p className="text-sm text-gray-500">MY APPROACH</p>
                            <h2 className="mt-2 text-2xl font-semibold">
                                Ideas into products.
                            </h2>
                        </div>
                        <span className="text-3xl text-lime-400">✳</span>
                    </div>

                    <div className="space-y-6 py-8">
                        {services.map((service, index) => (
                            <div key={service} className="flex items-center gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm text-lime-400">
                                    0{index + 1}
                                </span>

                                <span className="text-sm text-gray-200 sm:text-base">
                                    {service}
                                </span>

                                <span className="ml-auto text-gray-600">↗</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">
                        <p className="text-sm text-gray-400">
                            Have a project in mind?
                        </p>
                        <a
                            href="#contact"
                            className="mt-2 inline-block font-medium text-lime-400 hover:text-lime-300"
                        >
                            Let&apos;s build something great →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
