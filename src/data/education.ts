export interface Degree {
  degree: string
  institution: string
  shortInstitution: string
  period: string
  grade: string
}

export interface Course {
  name: string
  provider: string
  period: string
  duration: string
}

export const degrees: Degree[] = [
  {
    degree: 'Bachelor of Computer Science & Engineering',
    institution: 'American International University – Bangladesh',
    shortInstitution: 'AIUB',
    period: 'Jan 2024',
    grade: 'CGPA 3.39 / 4.00',
  },
]

export const courses: Course[] = [
  {
    name: 'Software Quality Assurance (SQA)',
    provider: 'Bug Resistance',
    period: 'Jan 2024',
    duration: '3 months',
  },
]
