import { useEffect, useState } from 'react'

interface Props {
  lines: string[]
  typingSpeed?: number
  pauseDuration?: number
  className?: string
}

export default function TypingLine({
  lines,
  typingSpeed = 60,
  pauseDuration = 1800,
  className = '',
}: Props) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentLine = lines[lineIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < currentLine.length) {
      timeout = setTimeout(
        () => setCharIndex(charIndex + 1),
        typingSpeed,
      )
    } else if (!deleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(
        () => setCharIndex(charIndex - 1),
        typingSpeed / 2,
      )
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setLineIndex((lineIndex + 1) % lines.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, lineIndex, lines, typingSpeed, pauseDuration])

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{lines[lineIndex].substring(0, charIndex)}</span>
      <span
        className="inline-block w-[3px] h-[1em] ml-1 bg-accent-violet align-middle"
        style={{
          animation: 'blink 1s steps(2) infinite',
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  )
}
