import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Yoann GUION',
  description:
    "Junior Full Stack Developer specializing in modern web technologies. Expert in React, Node.js, TypeScript, and cloud development. Read my latest tech tutorials, project insights, and programming tips on web development, DevOps, and software engineering best practices.",
  href: 'https://yoannguion.com',
  author: 'Yoann Guion',
  locale: 'fr-FR',
  location: 'France',
  email: 'yoann'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'accueil',
  },
  {
    href: '/projects',
    label: 'projets',
  },
  {
    href: '/a-propos',
    label: 'à propos',
  },
  // {
  //   href: '/blog',
  //   label: 'blog',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Yoann-Guion',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/yoann-guion/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:yoannguion@ik.com',
    label: 'Email',
  },
  {
    href: 'https://app.daily.dev/ptiyo',
    label: 'DailyDev',
  },
  // {
  //   href: 'tel:+33',
  //   label: 'Phone',
  // },
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  DailyDev: 'lucide:code',
  Email: 'lucide:mail',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  LinkedIn: 'lucide:linkedin',
  Phone: 'lucide:phone',
  RSS: 'lucide:rss',
  Website: 'lucide:globe',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Frameworks and Libraries': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'html5' },
    { text: 'JavaScript', logo: 'javascript' },
    { text: 'TypeScript', logo: 'typescript' },
    { text: 'CSS', logo: 'css3' },
    { text: 'Sass', logo: 'sass' },
    { text: 'Node.js', logo: 'nodejs' },
    { text: 'PHP', logo: 'php' },
  ],
  'Frameworks and Libraries': [
    { text: 'React', logo: 'react' },
    { text: 'Next.js', logo: 'nextjs' },
    { text: 'Tailwind CSS', logo: 'tailwind' },
    { text: 'Zod', logo: 'zod' },
    { text: 'Redux', logo: 'redux' },
    { text: 'Zustand', logo: 'zustand' },
    { text: 'Express', logo: 'express' },
    { text: 'Astro', logo: 'astro' },
    { text: 'Symfony', logo: 'symfony' },
  ],
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'visual-studio-code' },
    { text: 'Git', logo: 'git' },
    { text: 'GitHub', logo: 'github' },
    { text: 'Jest', logo: 'jest' },
    { text: 'Docker', logo: 'docker' },
  ],
  'Hosting and Cloud Services': [
    { text: 'Vercel', logo: 'vercel' },
    { text: 'Netlify', logo: 'netlify' },
    { text: 'Cloudflare', logo: 'cloudflare' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'windows' },
    { text: 'Ubuntu', logo: 'ubuntu' },
  ],
  'Other Programming Languages and Technologies': [
  ],
  'Web Servers': [
    { text: 'Apache', logo: 'apache' },
    { text: 'Nginx', logo: 'nginx' },
  ],
  Databases: [
    { text: 'MySQL', logo: 'mysql' },
    { text: 'MongoDB', logo: 'mongodb' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'discord' },
    { text: 'Firefox', logo: 'firefox' },
    { text: 'Chrome', logo: 'google-chrome' },
  ],
}
