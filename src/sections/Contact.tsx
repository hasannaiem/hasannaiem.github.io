import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, StackOverflowIcon } from '../components/SocialIcons'
import { profile } from '../data/profile'
import SectionTitle from '../components/SectionTitle'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in/hasannaiem509',
    href: profile.socials.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@hasannaiem',
    href: profile.socials.github,
  },
  {
    icon: StackOverflowIcon,
    label: 'Stack Overflow',
    value: 'users/32112898',
    href: profile.socials.stackoverflow,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          center
          eyebrow="// CONTACT"
          title="Got a flaky suite? Let's talk."
          description={`Currently based in ${profile.location} · ${profile.timezone} · Open to remote contracts and full-time.`}
        />

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {channels.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group"
                >
                  <GlassCard className="flex items-center gap-4">
                    <div
                      className="
                        p-3 rounded-xl
                        bg-accent-violet/15 text-accent-violet
                        border border-accent-violet/25
                        group-hover:bg-accent-violet/25
                        transition-colors
                      "
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                        {c.label}
                      </div>
                      <div className="text-ink-primary font-medium truncate">
                        {c.value}
                      </div>
                    </div>
                  </GlassCard>
                </a>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
