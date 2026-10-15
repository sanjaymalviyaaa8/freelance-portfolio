import { portfolio } from "@/data/portfolio";

const contactMethods = [
    {
        title: "Email me",
        description: "For project inquiries and collaboration.",
        action: "Send an email ↗",
        href: `mailto:${portfolio.email}`,
    },
    {
        title: "Chat on WhatsApp",
        description: "For a quick conversation about your project.",
        action: "Start a conversation ↗",
        href: `https://wa.me/${portfolio.phone}`,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#0b0d10] px-5 py-24 sm:px-6 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 md:p-14">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                        Get in Touch
                    </p>

                    <div className="grid gap-10 md:grid-cols-2 md:items-end">
                        <div>
                            <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                                Have a project in mind?
                                <span className="text-lime-400"> Let&apos;s talk.</span>
                            </h2>

                            <p className="max-w-lg text-sm leading-7 text-gray-400">
                                Looking for a developer to build or improve your website?
                                Reach out and tell me a little about what you have in mind.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.title}
                                    href={method.href}
                                    target={method.href.startsWith("https://") ? "_blank" : undefined}
                                    rel={method.href.startsWith("https://") ? "noreferrer" : undefined}
                                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 p-5 transition hover:border-lime-400/40 hover:bg-white/[0.03]"
                                >
                                    <div>
                                        <h3 className="mb-1 font-semibold text-white">
                                            {method.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {method.description}
                                        </p>
                                    </div>

                                    <span className="shrink-0 text-sm text-lime-400 transition group-hover:translate-x-1">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}