async function getData() {
  const res = await fetch("https://api.jikan.moe/v4/random/anime", {
    next: { revalidate: 1 },
  });
  const data = res.json();
  return data;
}
export type Anime = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: string;
  approved: boolean;
  titles: [
    { type: string; title: string },
    {
      type: string;
      title: string;
    },
    { type: string; title: string },
    { type: string; title: string },
    { type: string; title: string },
    { type: string; title: string },
    { type: string; title: string },
    { type: string; title: string }
  ];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [];
  type: string;
  source: string;
  episodes: string;
  status: string;
  airing: boolean;
  aired: {
    from: Date;
    to: Date;
    prop: { from: [Object]; to: [Object] };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: [Object];
  licensors: [];
  studios: [Object];
  genres: [Object];
  explicit_genres: [];
  themes: [Object];
  demographics: [Object];
};

export default async function Home() {
  let data = await getData();
  let anime: Anime = data.data;
  let name = anime.title;
  let episodes = anime.episodes;
  let img = anime.images;
  console.log(img);
  return (
    <main className="text-center mt-4 ">
      <div className="flex flex-col items-center space-y-3 ">
        <h1 className="font-bold text-4xl">{name}</h1>
        <h1 className="font-bold text-3xl">
          {(episodes = episodes != null ? episodes : "Not found 😔")}
        </h1>
        <img
          src={img.jpg.image_url}
          alt="img from anime"
          width={400}
          height={600}
        />
      </div>
    </main>
  );
}
