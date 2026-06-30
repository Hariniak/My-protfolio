export interface NavItem {
  id: string
  label: string
}

export interface ContactLink {
  type: 'email' | 'linkedin' | 'github' | 'location'
  href?: string
  text: string
}

export interface Stat {
  label: string
  value?: string
  target?: number
  suffix?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface ProjectModule {
  name: string
  description: string
}

export interface Project {
  name: string
  badge: string
  description: string
  modules?: ProjectModule[]
  tech: string[]
}

export interface SkillGroupData {
  label: string
  pills: string[]
}

export interface Education {
  degree: string
  school: string
  detail: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
}
