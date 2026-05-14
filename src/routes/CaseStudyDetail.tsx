import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Target, Wrench, Trophy } from 'lucide-react'
import { projects } from '../data/projects'
import GlassCard from '../components/GlassCard'
import TechBadge from '../components/TechBadge'
import ScrollReveal from '../components/ScrollReveal'
import Footer from '../sections/Footer'

export default function CaseStudyDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <Navigate to="/case-studies" replace />

  return (
    <main>
      <section className="pt-32 pb-12 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/case-studies"
            className="
              inline-flex items-center gap-2 mb-8
              text-ink-muted hover:text-accent-violet
              transition-colors text-sm
            "
          >
            <ArrowLeft size={16} />
            Back to case studies
          </Link>

          <span
            className="
              inline-flex items-center
              px-2.5 py-1 rounded-full mb-4
              bg-accent-violet/15 text-accent-violet
              text-xs font-mono uppercase tracking-wider
              border border-accent-violet/25
            "
          >
            {project.status}
          </span>

          <h1 className="text-h1 md:text-display font-display font-bold mb-3">
            <span className="text-gradient">{project.name}</span>
          </h1>
          <p className="font-mono text-sm text-ink-muted uppercase tracking-wider mb-6">
            {project.domain}
          </p>

          <p className="text-lg text-ink-secondary leading-relaxed mb-8">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <TechBadge key={s} label={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <ScrollReveal>
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-accent-violet" size={20} />
                <h2 className="font-display font-semibold text-xl">The problem</h2>
              </div>
              <p className="text-ink-secondary leading-relaxed">{project.problem}</p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-accent-blue" size={20} />
                <h2 className="font-display font-semibold text-xl">Approach</h2>
              </div>
              <ul className="space-y-3 text-ink-secondary">
                {project.approach.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent-blue font-mono text-xs mt-1.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-accent-pink" size={20} />
                <h2 className="font-display font-semibold text-xl">Wins</h2>
              </div>
              <ul className="space-y-3 text-ink-secondary">
                {project.wins.map((w, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent-pink mt-1.5">→</span>
                    <span className="leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
