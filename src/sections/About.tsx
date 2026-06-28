import { GraduationCap, BookOpen } from 'lucide-react'
import { profile } from '../data/profile'
import { degrees, courses } from '../data/education'
import SectionTitle from '../components/SectionTitle'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="// ABOUT"
          title="Shift-left quality engineering with a discipline obsession."
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

          <ScrollReveal delay={0.4}>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {degrees.map((d) => (
                <GlassCard key={d.institution} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-violet/10 text-accent-violet flex-shrink-0 mt-0.5">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-accent-violet uppercase tracking-wider mb-1">
                      {d.period}
                    </div>
                    <div className="font-semibold text-sm text-ink-primary">{d.degree}</div>
                    <div className="text-xs text-ink-muted mt-0.5">{d.shortInstitution} · {d.institution.split('–')[1]?.trim() ?? d.institution}</div>
                  </div>
                </GlassCard>
              ))}
              {courses.map((c) => (
                <GlassCard key={c.name} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue flex-shrink-0 mt-0.5">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-accent-blue uppercase tracking-wider mb-1">
                      {c.period} · {c.duration}
                    </div>
                    <div className="font-semibold text-sm text-ink-primary">{c.name}</div>
                    <div className="text-xs text-ink-muted mt-0.5">{c.provider}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
