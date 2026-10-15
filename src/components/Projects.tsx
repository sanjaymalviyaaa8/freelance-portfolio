export default function Projects() {
    return (
        <section
            id="work"
            className="bg-[#0b0d10] px-5 py-24 sm:px-6 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                    Selected Work
                </p>

                <div className="grid gap-10 md:grid-cols-2 md:items-end">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Turning ideas into useful web experiences.
                    </h2>

                    <p className="max-w-xl text-sm leading-7 text-gray-400">
                        I build modern, responsive web interfaces with React and Next.js,
                        focusing on clean design, maintainable code, and a smooth user
                        experience. I&apos;m currently developing projects to showcase my
                        skills and approach to frontend development.
                    </p>
                </div>

                <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center sm:p-12">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-2xl text-lime-400">
                        ↗
                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-white">
                        New work is in progress
                    </h3>

                    <p className="mx-auto max-w-lg text-sm leading-7 text-gray-400">
                        I&apos;m working on practical web projects that demonstrate my
                        development skills. This section will feature completed projects
                        with real demos and source code as they become available.
                    </p>
                </div>
            </div>
        </section>
    );
}
// const projects = [
//   {
//     number: "01",
//     category: "FULL-STACK WEB APP",
//     title: "AI Todo Planner",
//     description:
//       "A smart task management app to organize tasks, set priorities, and plan daily work with AI assistance.",
//     tech: ["Next.js", "Node.js", "MongoDB"],
//     github: "https://github.com/sanjaymalviyaaa8/ai-todo-planner",
//     demo: "#",
//   },
//   {
//     number: "02",
//     category: "E-COMMERCE",
//     title: "Online Store",
//     description:
//       "A responsive shopping experience with product listings, category filters, and a clean checkout interface.",
//     tech: ["React", "Tailwind CSS", "REST API"],
//     github: "https://github.com/sanjaymalviyaaa8/online-store",
//     demo: "#",
//   },
//   {
//     number: "03",
//     category: "BUSINESS WEBSITE",
//     title: "Business Landing Page",
//     description:
//       "A modern business website designed to communicate services clearly and encourage customer inquiries.",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com/sanjaymalviyaaa8/business-website",
//     demo: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="work"
//       className="bg-[#0b0d10] px-5 py-24 sm:px-6 lg:px-10"
//     >
//       <div className="mx-auto max-w-7xl">
//         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
//           Selected Work
//         </p>

//         <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//           <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//             Projects built with purpose.
//           </h2>
//           <p className="max-w-md text-sm leading-7 text-gray-400">
//             A selection of web projects demonstrating my approach to
//             responsive design, useful features, and clean development.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((project) => (
//             <article
//               key={project.number}
//               className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-lime-400/40"
//             >
//               <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#202820] via-[#121713] to-[#0b0d10] p-6">
//                 <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0d10]/80 p-5 shadow-2xl transition duration-300 group-hover:-translate-y-1">
//                   <div className="mb-5 flex gap-2">
//                     <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
//                     <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
//                     <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
//                   </div>
//                   <div className="mb-4 h-2 w-1/3 rounded bg-white/20" />
//                   <div className="mb-5 grid grid-cols-3 gap-2">
//                     <div className="h-12 rounded bg-lime-400/15" />
//                     <div className="h-12 rounded bg-white/5" />
//                     <div className="h-12 rounded bg-white/5" />
//                   </div>
//                   <div className="space-y-2">
//                     <div className="h-2 w-full rounded bg-white/10" />
//                     <div className="h-2 w-2/3 rounded bg-white/10" />
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 sm:p-8">
//                 <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-lime-400">
//                   {project.category}
//                 </p>
//                 <h3 className="mb-3 text-2xl font-semibold text-white">
//                   {project.title}
//                 </h3>
//                 <p className="mb-5 text-sm leading-7 text-gray-400">
//                   {project.description}
//                 </p>

//                 <div className="mb-6 flex flex-wrap gap-2">
//                   {project.tech.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-5 text-sm font-medium">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-white transition hover:text-lime-400"
//                   >
//                     GitHub ↗
//                   </a>
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-white transition hover:text-lime-400"
//                   >
//                     Live Demo ↗
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }