import { Badge } from '@/components/ui/badge'
import { Hash } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'

const ProjectCardJSX = ({ entry }: { entry: CollectionEntry<'projects'> }) => {
  return (
    <div className="hover:bg-secondary/50 rounded-xl border p-4 transition-colors duration-300 ease-in-out">
      <a
        href={`/projects/${entry.id}`}
        className="flex flex-col gap-4 sm:flex-row"
        aria-label={`Lien vers le projet ${entry.data.name}`}
      >
        <div className="shrink-0 w-full sm:w-40 h-28 rounded-md overflow-hidden">
          <img
            src={entry.data.image.src}
            alt={entry.data.name}
            className="object-cover w-full h-full"
            loading="lazy"
            width={160}
            height={112}
          />
        </div>

        <div className="grow flex flex-col justify-between">
          <h3 className="mb-1 text-lg font-medium text-foreground">{entry.data.name}</h3>
          <p className="text-muted-foreground mb-2 text-sm line-clamp-3">
            {entry.data.description || 'Description à venir...'}
          </p>

          {entry.data.tags && (
            <div className="flex flex-wrap gap-2">
              {entry.data.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-x-1"
                >
                  <Hash size={12} />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export default ProjectCardJSX
