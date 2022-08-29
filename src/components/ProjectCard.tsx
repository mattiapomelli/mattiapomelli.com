import ExternalLinkIcon from '@/icons/external-link.svg'
import GithubIcon from '@/icons/github.svg'
import { Project } from '@/lib/projects'
import { H4, TextSmall } from './Text'

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, tags, url, githubUrl } = project

  const Logo = project.logo

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col dark:bg-dark-blue-800">
      <header className="flex items-center justify-between">
        <Logo className="w-10 h-10" />
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </header>
      <main className="flex-grow mt-4">
        <H4 className="mb-4">{title}</H4>
        <TextSmall>{description}</TextSmall>
      </main>
      <footer>
        <ul className="flex flex-wrap mt-7 gap-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-light-blue-gray dark:bg-dark-blue-600 py-1 px-1.5 rounded-md text-sm font-mono text-main-blue dark:text-main-light-blue"
            >
              {tag}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

export default ProjectCard
