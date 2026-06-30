import type {
  NavItem,
  ContactLink,
  Stat,
  Experience,
  Project,
  SkillGroupData,
  Education,
  Certification,
} from '@/types'

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

export const contactLinks: ContactLink[] = [
  { type: 'email', href: 'mailto:harini2002ak@gmail.com', text: 'harini2002ak@gmail.com' },
  { type: 'linkedin', href: 'https://linkedin.com/in/harini-gowri', text: 'linkedin.com/in/harini-gowri' },
  { type: 'github', href: 'https://github.com/Hariniak', text: 'github.com/Hariniak' },
  { type: 'location', text: 'Bengaluru, Karnataka, India' },
]

export const stats: Stat[] = [
  { label: 'reduction in\nvalidation time', target: 75, suffix: '%' },
  { label: 'SKUs automated\nper cycle', target: 1500, suffix: '+' },
  { label: 'less effort on\nreport generation', target: 40, suffix: '%' },
  { label: 'years building\nERP systems', target: 3, suffix: '+' },
  { label: 'tickets closed\nper day', value: '4–5' },
]

export const summary =
  'Software Developer with <strong>3+ years of experience</strong> building enterprise ERP applications using <strong>Vue.js, Java, Spring Boot, REST APIs, and MongoDB</strong>. Delivered 3–4 production ERP modules end-to-end within a cross-functional team of 10+, and reduced product validation time by <strong>over 75%</strong> by engineering API and Playwright-based automation pipelines. Known for fast support turnaround, workflow automation, and clean, reusable component architecture.'

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Hikeon Technologies',
    location: 'Bengaluru',
    period: 'Jan 2023 — Present',
    bullets: [
      'Delivered <strong>3–4 production ERP modules</strong> (Product Management, KPI Tracking, Material Combination) as part of a 10+ member cross-functional team, end-to-end from requirement gathering to deployment.',
      'Engineered a <strong>ShipHero API integration</strong> that replaced manual product validation for 1,000–1,500 SKUs per cycle — cutting processing time from ~8 hours per 300–400 items to half a day at 4× the volume.',
      'Built a <strong>Playwright-based automation pipeline</strong> (using Claude AI) to handle product validation scenarios not covered by API, eliminating a remaining class of manual QA effort entirely.',
      'Automated business reporting workflows using <strong>Google Apps Script</strong>, reducing report generation effort by approximately 40% and freeing the team from repetitive data tasks.',
      'Maintained a support ticket closure rate of <strong>4–5 product data tickets per day</strong>, consistently resolving issues same-day and minimising downstream impact on business operations.',
      'Architected <strong>reusable Vue.js component libraries</strong> adopted across multiple ERP modules, reducing duplication and accelerating feature delivery across sprint cycles.',
      'Led <strong>Thymeleaf-to-Vue.js frontend migration</strong>, modernising legacy server-side rendered views into reactive single-page components, significantly improving UI maintainability and developer velocity.',
      'Integrated RESTful APIs and optimised frontend-backend communication, improving application reliability and user experience across ERP workflows.',
      'Implemented <strong>unit and end-to-end testing</strong> (Jest, Cypress) that improved application stability and reduced production defect rates.',
      'Participated in Agile ceremonies — sprint planning, stand-ups, backlog refinement, retrospectives — collaborating closely with product owners, QA, and backend developers.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Enterprise Resource Planning System',
    badge: 'Production',
    description:
      'Full-featured ERP system serving a cross-functional team of 10+. Built three distinct modules end-to-end as primary frontend developer, each integrating with backend services and external APIs.',
    modules: [
      {
        name: 'Product Management',
        description:
          'ShipHero API + Playwright pipeline replaced 8-hr manual SKU validation; scaled to 1,500 SKUs at 4× throughput.',
      },
      {
        name: 'KPI Management',
        description: 'Real-time tracking dashboards giving stakeholders live visibility into business metrics.',
      },
      {
        name: 'Material Combination',
        description: 'Workflow design with full backend API integration for seamless data processing.',
      },
    ],
    tech: ['Vue.js', 'Java', 'REST APIs', 'MongoDB', 'ShipHero API', 'Playwright'],
  },
  {
    name: 'Employee Management System',
    badge: 'Full-Stack',
    description:
      'Full CRUD operations with REST API integration, JWT authentication, and role-based access control. Built to production quality with a focus on security and maintainability.',
    tech: ['Vue.js', 'Spring Boot', 'MySQL', 'JWT', 'RBAC'],
  },
  {
    name: 'Task Management Application',
    badge: 'Full-Stack',
    description:
      'Task creation, assignment, and tracking with REST API communication and database integration. Responsive UI with real-time state management across the full stack.',
    tech: ['Vue.js', 'Spring Boot', 'MongoDB', 'REST API'],
  },
]

export const skillGroups: SkillGroupData[] = [
  { label: 'Frontend', pills: ['Vue.js 2 & 3', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'] },
  { label: 'Backend', pills: ['Java', 'Spring Boot', 'REST API Dev'] },
  { label: 'Automation', pills: ['Playwright', 'Google Apps Script', 'Excel Macros'] },
  { label: 'Databases', pills: ['MongoDB', 'MySQL'] },
  { label: 'Testing', pills: ['Jest', 'Vitest', 'Cypress', 'Unit Testing'] },
  { label: 'Tools & Platforms', pills: ['Git / GitHub', 'Postman', 'Jira', 'Asana', 'ShipHero API'] },
  { label: 'Methodologies', pills: ['Agile', 'Scrum', 'SDLC'] },
]

export const education: Education = {
  degree: 'B.E. — Computer Science & Engineering',
  school: 'Vivekanandha College of Engineering for Women',
  detail: 'Data Structures · Algorithms · Web Development · Software Engineering',
  period: '2019 – 2023',
}

export const certifications: Certification[] = [
  { name: 'Claude Code in Action', issuer: 'Anthropic' },
  { name: 'Frontend Development Training', issuer: 'Professional Certification' },
  { name: 'Java Development Training', issuer: 'Professional Certification' },
]
