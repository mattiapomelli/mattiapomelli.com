import Icon from './Icon'

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  githubLink,
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col justify-between dark:bg-dark-blue-800">
      <header>
        <div className="flex items-center justify-between">
          <Icon icon={title.toLowerCase()} className="w-10 h-10 fill-current" />
          <div className="flex items-center">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Icon icon="github" className="w-5 h-5 ml-3 fill-current" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon icon="link" className="w-5 h-5 ml-3 fill-current" />
            </a>
          </div>
        </div>
        <h4 className="text-2xl font-extrabold my-4">{title}</h4>
        <p className="dark:text-gray-300 leading-snug">{description}</p>
      </header>
      <footer>
        <ul className="flex flex-wrap mt-7">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-light-blue-gray dark:bg-dark-blue-600 py-1 px-1.5 rounded-md mr-1 mt-1 text-sm font-mono text-main-blue dark:text-main-light-blue"
            >
              {tag}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}
