const apiKEY = "5PccOCzRCAIR3r9ubJhpAi5gs0ayP0NA";

const getGifs = ({ gifName, page }) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${gifName}&limit=10&offset=${page*10}&rating=g&lang=en`;

  return fetch(apiURL)
    .then((r) => r.json())
    .then((resp) => {
      const gifs = resp.data
      const allGifs = gifs.map((gif) => {
        const title = gif.title.split(" GIF")[0];
        return {
          id: gif.id,
          title: title || 'This GIF has no title',
          image: gif.images.fixed_height.url,
          url: gif.images.original.url,
        };
      });
      return allGifs;
    });
};

export default getGifs;
