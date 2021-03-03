import { getVideos } from '../lib/vimeo'

export default function Videos({ videos }) {
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Videos
      </h1>
      <p className="text-lg mb-5 text-dark-gray dark:text-gray-300">
        Some captures from my trips around the world
      </p>
      <div className="flex flex-col items-center">
        {videos.map((video) => {
          return (
            <div key={video.id} className="w-full mb-10">
              <div
                className="relative h-0 max-w-full"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&color=086dff`}
                  width="768"
                  height="432"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <h1 className="text-2xl font-extrabold mb-1 tracking-tight">
                {video.title}
              </h1>
              <p>{video.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const videos = await getVideos()

  return {
    props: {
      videos: JSON.parse(JSON.stringify(videos)),
    },
  }
}
