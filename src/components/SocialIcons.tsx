interface IconProps {
  size?: number
  className?: string
}

export function GithubIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297a12 12 0 0 0-3.794 23.387c.6.111.82-.26.82-.578v-2.234c-3.338.726-4.043-1.61-4.043-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.832 2.807 1.302 3.492.996.108-.776.418-1.302.762-1.602-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.484 11.484 0 0 1 6.003 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .322.216.694.825.576A12 12 0 0 0 12 .297Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function StackOverflowIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.79v5.38H17.36zM6.77 14.32l8.79 1.83.37-1.76-8.79-1.83-.37 1.76zm1.16-4.21l8.14 3.79.76-1.62-8.14-3.79-.76 1.62zm2.25-4.01l6.9 5.74 1.15-1.39-6.9-5.74-1.15 1.39zM14.64 2l-1.45 1.07 5.36 7.21 1.45-1.07L14.64 2zM6.59 18.32h8.97v-1.79H6.59v1.79z" />
    </svg>
  )
}
