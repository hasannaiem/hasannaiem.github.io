import { profile } from '../data/profile'
import SectionTitle from '../components/SectionTitle'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="// ABOUT"
          title="Senior-minded QA with a discipline obsession."
        />

        <div className="space-y-6">
          {profile.bio.map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-lg md:text-xl text-ink-secondary leading-relaxed">
                {para}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.3}>
            <GlassCard className="mt-8 border-l-4 !border-l-accent-violet">
              <div className="flex items-start gap-4">
                <span className="text-3xl md:text-4xl text-accent-violet leading-none">
                  &ldquo;
                </span>
                <div>
                  <p className="text-xl md:text-2xl font-display italic text-ink-primary">
                    {profile.philosophy}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted font-mono">
                    — working philosophy
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
