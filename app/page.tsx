import { BlogPosts } from 'app/components/posts'
import { Section } from 'app/components/section'
import { SkillsGrid } from 'app/components/skills'
import { Timeline } from 'app/components/timeline'
import { ProjectsGrid } from 'app/components/projects'
import { FadeIn } from 'app/components/fade-in'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="space-y-4">
      {/* Hero */}
      <Section
        id="hero"
        noFade
        className="pt-8 pb-8"
        fullWidth
        title={undefined}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight title">
            <span className="block text-gradient animate-gradient-sheen">
              Ciao, I'm Ashley.
            </span>
          </h1>
          <p className="mt-6 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            Builder, curious mind & lifelong learner exploring the intersection of
            <span className="font-medium text-neutral-900 dark:text-neutral-100"> AGI</span>, delightful developer tooling, and immersive game experiences.
            I love crafting clean, accessible interfaces and resilient backend systems—while tinkering with AI-powered workflows & procedural generation.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 text-sm">
            <Link href="#projects" className="px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow hover:shadow-md transition-shadow">
              Featured Projects
            </Link>
            <Link href="#contact" className="px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About Me"
        title="Description"
        description={
          <>
            These days I'm experimenting with lightweight <strong>AI-assisted development loops</strong>, building internal tools that reduce cognitive overhead, and honing a <strong>game design mindset</strong> to influence product intuitiveness. I'm also documenting learning paths for complex topics to make them more accessible.
          </>
        }
      >
        <FadeIn direction="none" className="grid gap-6 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
            <h3 className="font-medium mb-2 text-sm tracking-wide text-neutral-600 dark:text-neutral-300 uppercase">Principles</h3>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              <li>Clarity over cleverness</li>
              <li>Small composable primitives</li>
              <li>Progressive enhancement & accessibility</li>
              <li>Measure before optimizing</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
            <h3 className="font-medium mb-2 text-sm tracking-wide text-neutral-600 dark:text-neutral-300 uppercase">Currently Learning</h3>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              <li>Rust systems fundamentals</li>
              <li>LLM agent orchestration patterns</li>
              <li>Procedural content generation</li>
              <li>Rendering / shaders basics</li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        eyebrow="Skills"
        title="Tech Stack"
        description="Series of familiar tools, libraries, and languages I use regularly."
      >
        <SkillsGrid />
      </Section>

      {/* Experience Timeline */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Work Experience"
        description="A concise timeline of roles, impact areas, and explorations."
      >
        <Timeline />
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected work & experiments"
        description="A mix of professional, indie, and exploratory builds—more coming soon."
      >
        <ProjectsGrid />
      </Section>

      {/* Blog */}
      <Section
        id="writing"
        eyebrow="Writing"
        title="Latest posts"
        description="Thought snippets & deeper dives—development, learning systems, AI, game design."
      >
        <div className="mt-2">
          <BlogPosts />
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's collaborate"
        description="Open to interesting opportunities, knowledge sharing, and creative experiments. Feel free to reach out."
      >
        <FadeIn direction="none" className="flex flex-col gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Best ways to reach me:
          </p>
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <Link className="underline decoration-neutral-400 dark:decoration-neutral-600 hover:text-indigo-600 dark:hover:text-indigo-400" href="mailto:ashley@example.com">Email</Link>
            </li>
            <li>
              <Link className="underline decoration-neutral-400 dark:decoration-neutral-600 hover:text-indigo-600 dark:hover:text-indigo-400" href="https://github.com/OmniAshley" target="_blank">GitHub</Link>
            </li>
            <li>
              <Link className="underline decoration-neutral-400 dark:decoration-neutral-600 hover:text-indigo-600 dark:hover:text-indigo-400" href="https://www.linkedin.com" target="_blank">LinkedIn</Link>
            </li>
          </ul>
        </FadeIn>
      </Section>
    </div>
  )
}
                                                                                