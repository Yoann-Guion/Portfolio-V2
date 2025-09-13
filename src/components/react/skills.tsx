import { useEffect } from 'react'
import { technologies, type Technologies, type Category } from '../../consts'
import { InfiniteScroll } from '../ui/infinite-scroll'
import { type IconType } from 'react-icons'
import { FaQuestionCircle, FaSass } from 'react-icons/fa'
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiPhp,
  SiAstro,
  SiTailwindcss,
  SiGit,
  SiCloudflare,
  SiNetlify,
  SiUbuntu,
  SiNodedotjs,
  SiApache,
  SiNginx,
  SiMysql,
  SiMongodb,
  SiDiscord,
  SiBrave,
  SiGithub,
  SiVercel,
  SiFirefoxbrowser,
  SiReact,
  SiGooglechrome,
  SiZod,
  SiRedux,
  SiSymfony,
  SiDocker,
  SiJest,
  SiExpress
} from 'react-icons/si'
import { FileCode, LucideAppWindow, Code } from 'lucide-react'
import { RiNextjsFill } from "react-icons/ri";
import { GiPolarBear } from "react-icons/gi";

const iconMap: { [key: string]: IconType } = {
  'apache': SiApache,
  'astro': SiAstro,
  'brave': SiBrave,
  'cloudflare': SiCloudflare,
  'css3': SiCss3,
  'discord': SiDiscord,
  'docker': SiDocker,
  'express': SiExpress,
  'firefox': SiFirefoxbrowser,
  'git': SiGit,
  'github': SiGithub,
  'google-chrome': SiGooglechrome,
  'html5': SiHtml5,
  'javascript': SiJavascript,
  'jest': SiJest,
  'mongodb': SiMongodb,
  'mysql': SiMysql,
  'netlify': SiNetlify,
  'nextjs': RiNextjsFill,
  'nginx': SiNginx,
  'nodejs': SiNodedotjs,
  'php': SiPhp,
  'react': SiReact,
  'redux': SiRedux,
  'sass': FaSass,
  'symfony': SiSymfony,
  'tailwind': SiTailwindcss,
  'typescript': SiTypescript,
  'ubuntu': SiUbuntu,
  'vercel': SiVercel,
  'visual-studio-code': FileCode,
  'visual-studio': Code,
  'windows': LucideAppWindow,
  'zod': SiZod,
  'zustand': GiPolarBear

}

const categories = Object.keys(technologies)
const groupSize = Math.ceil(categories.length / 3)
const categoryGroups = [
  categories.slice(0, groupSize),
  categories.slice(groupSize, groupSize * 2),
  categories.slice(groupSize * 2),
]

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach((badge) => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-full">
      <div className="space-y-2">
        {categoryGroups.map((group, groupIndex) => (
          <InfiniteScroll
            key={groupIndex}
            duration={50000}
            direction={groupIndex % 2 === 0 ? 'normal' : 'reverse'}
            showFade={true}
            className="flex flex-row justify-center"
          >
            {group.flatMap((category) =>
              technologies[category as keyof Technologies].map(
                (tech: Category, techIndex: number) => {
                  const IconComponent = iconMap[tech.logo] || FaQuestionCircle
                  return (
                    <div
                      key={`${category}-${techIndex}`}
                      className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                      data-tech-name={`${category}-${techIndex}`}
                    >
                      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                        <IconComponent className="tech-icon text-primary" />
                      </span>
                      <span className="text-foreground font-medium">
                        {tech.text}
                      </span>
                    </div>
                  )
                },
              ),
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
