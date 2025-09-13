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
    href: '/projets',
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
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'TypeScript', logo: 'mdi:language-typescript' },
    { text: 'React', logo: 'mdi:react' },
    { text: 'Next.js', logo: 'simple-icons:nextdotjs' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'PHP', logo: 'mdi:language-php' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
  ],
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'GitHub', logo: 'mdi:github' },
  ],
  'Hosting and Cloud Services': [
    { text: 'Vercel', logo: 'mdi:vercel' },
    { text: 'Netlify', logo: 'cib:netlify' },
    { text: 'Cloudflare', logo: 'cib:cloudflare' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Ubuntu', logo: 'mdi:ubuntu' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'Node.js', logo: 'mdi:nodejs' },
  ],
  'Web Servers': [
    { text: 'Apache', logo: 'cib:apache' },
    { text: 'Nginx', logo: 'cib:nginx' },
  ],
  Databases: [
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'MongoDB', logo: 'cib:mongodb' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'mdi:discord' },
    { text: 'Spotify', logo: 'mdi:spotify' },
    { text: 'Visual Studio', logo: 'mdi:visual-studio' },
    { text: 'Firefox', logo: 'cib:firefox' },
  ],
}
