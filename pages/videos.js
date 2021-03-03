import { getVideos } from '../lib/vimeo'
import VideoCard from '../components/VideoCard'

export default function Videos({ videos }) {
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Videos
      </h1>
      <p className="text-lg mb-5 text-dark-gray dark:text-gray-300">
        I love both to travel and to make videos. So when I have the occasion to
        go on some cool place, I like to make clips and capture my favourite
        moments. This is a small collection of things I've captured around the
        world.
      </p>
      <div className="grid grid-cols-autofill gap-4 mt-6 mb-20">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
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
