import { Analytics } from "@vercel/analytics/next";
import StarryNight, { Moon } from "@/components/StarryNight";
import {
  awards,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from "@/constants/resume";

const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

const card = "rounded-2xl border border-white/10 bg-[#0b1628]/80 p-6 backdrop-blur-sm";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={title.toLowerCase()} className="scroll-mt-20 py-14">
      <h2 className="mb-8 font-serif text-3xl text-[#e8eeff]">{title}</h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-[#3d4a99] bg-[#1a1f5e]/60 px-3 py-1 text-xs text-[#c8d4f0]">
      {children}
    </li>
  );
}

export default function Portfolio() {
  return (
    <>
      <Analytics />
      <StarryNight />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#020510]/70 backdrop-blur-sm">
        <nav
          aria-label="Sections"
          className="mx-auto flex max-w-3xl gap-x-5 overflow-x-auto px-4 py-4 text-sm text-[#a9b8d8] sm:justify-end"
        >
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="whitespace-nowrap transition-colors hover:text-[#F4D58D]"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <div className="relative flex min-h-[calc(100svh-53px)] items-center px-4">
        <Moon />
        <div className="relative mx-auto w-full max-w-3xl animate-fadeUp">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#a9b8d8]">
            {profile.role}
          </p>
          <h1 className="font-serif text-5xl leading-tight text-[#e8eeff] sm:text-7xl">
            {profile.name}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl border border-[#3d4a99] bg-[#1a1f5e] px-7 py-3 text-sm tracking-widest text-[#c8d4f0] transition-all duration-300 hover:-translate-y-px hover:border-[#6b7ee8] hover:bg-[#222880] hover:text-[#e8eeff] hover:shadow-[0_4px_24px_rgba(80,100,220,0.25)]"
            >
              View projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-white/15 px-7 py-3 text-sm tracking-widest text-[#c8d4f0] transition-colors hover:border-[#F4D58D] hover:text-[#F4D58D]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 pb-10">
        <Section title="About">
          <p className={`${card} leading-relaxed text-[#c8d4f0]`}>{profile.summary}</p>
        </Section>

        <Section title="Experience">
          <ol className="space-y-5">
            {experience.map((job) => (
              <li key={job.company} className={card}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-medium text-[#e8eeff]">
                    {job.title} <span className="text-[#F4D58D]">· {job.company}</span>
                  </h3>
                  <p className="text-sm text-[#a9b8d8]">{job.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#c8d4f0]">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Projects">
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className={`${card} flex flex-col`}>
                <h3 className="font-medium text-[#e8eeff]">{project.name}</h3>
                <p className="mt-1 text-xs text-[#a9b8d8]">{project.period}</p>
                <p className="mb-4 mt-3 flex-1 text-sm leading-relaxed text-[#c8d4f0]">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <dl className={`${card} space-y-5`}>
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt className="mb-2 text-sm text-[#a9b8d8]">{group}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Background">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className={card}>
              <h3 className="font-medium text-[#e8eeff]">{education.school}</h3>
              <p className="mt-1 text-xs text-[#a9b8d8]">{education.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#c8d4f0]">{education.degree}</p>
              <h3 className="mt-6 font-medium text-[#e8eeff]">Spoken languages</h3>
              <ul className="mt-3 space-y-1 text-sm text-[#c8d4f0]">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
            <div className={card}>
              <h3 className="font-medium text-[#e8eeff]">Awards and recognition</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[#c8d4f0]">
                {awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Contact">
          <div className={`${card} flex flex-wrap gap-x-8 gap-y-3 text-[#c8d4f0]`}>
            <a className="underline-offset-4 hover:text-[#F4D58D] hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="underline-offset-4 hover:text-[#F4D58D] hover:underline" href={profile.github}>
              GitHub: kevinwynsor
            </a>
            <a className="underline-offset-4 hover:text-[#F4D58D] hover:underline" href={profile.linkedin}>
              LinkedIn: Kevin Wynsor U. Kong
            </a>
          </div>
        </Section>
      </main>
    </>
  );
}
