export const getVideos = async () => {
  const response = await fetch(
    'https://api.vimeo.com/me/albums/8200188/videos?sort=default',
    {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_API_KEY}`,
      },
    }
  )

  const videos = await response.json()

  return videos.data.map((video) => {
    const { name, description, uri } = video
    return {
      id: uri.replace('/videos/', ''),
      title: name,
      description,
    }
  })
}
