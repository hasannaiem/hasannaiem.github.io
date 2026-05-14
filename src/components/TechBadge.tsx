interface Props {
  label: string
}

export default function TechBadge({ label }: Props) {
  return (
    <span
      className="
        inline-flex items-center
        px-3 py-1.5 rounded-full
        bg-glass-base border border-glass-border
        text-xs font-mono text-ink-secondary
        hover:border-accent-violet/40 hover:text-accent-violet
        transition-colors duration-200
      "
    >
      {label}
    </span>
  )
}
