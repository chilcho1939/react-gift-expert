export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PsXO6j7aspEPiU3fJsOMV0h55secwfeG&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data = [] } = await res.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized.url
  }))

  return gifs;
}