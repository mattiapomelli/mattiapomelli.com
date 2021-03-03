export default function VideoCard({ id, title, description }) {
  return (
    <div
      key={id}
      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-4"
    >
      <div
        className="relative h-0 max-w-full"
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <div className="p-5">
        <h4 className="text-xl font-extrabold">{title}</h4>
        <p className="dark:text-gray-300 leading-snug">{description}</p>
      </div>
    </div>
  )
}
