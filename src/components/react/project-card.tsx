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
        <div className="h-45 w-full shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-45">
          <img
            src={entry.data.image.src}
            alt={entry.data.name}
            className="h-full w-full object-cover"
            loading="lazy"
            width={160}
            height={112}
          />
        </div>

        <div className="flex grow flex-col justify-between">
          <h3 className="text-foreground mb-1 text-lg font-medium">
            {entry.data.name}
          </h3>
          <p className="text-muted-foreground mb-2 line-clamp-3 text-sm">
            {entry.data.description || 'Description à venir...'}
          </p>

          {entry.data.tags && (
            <div className="flex flex-wrap gap-2">
              {entry.data.tags.slice(0, 4).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-x-1"
                >
                  <Hash size={12} />

                  {tag}
                </Badge>
              ))}
              {entry.data.tags.length > 4 && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-x-1"
                >
                  +{entry.data.tags.length - 4}
                </Badge>
              )}
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export default ProjectCardJSX
