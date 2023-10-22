async function getData() {
  const res = await fetch(
    "https://api.jikan.moe/v4/anime?order_by=popularity ",
    {
      next: { revalidate: 1 },
    }
  );
  const data = res.json();
  return data;
}
export type HotCake = {
  data: [
    {
      mal_id: 0;
      url: "string";
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: true;
      titles: [
        {
          type: "string";
          title: "string";
        }
      ];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: 0;
      status: "Finished Airing";
      airing: true;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: 0;
            month: 0;
            year: 0;
          };
          to: {
            day: 0;
            month: 0;
            year: 0;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: 0;
      scored_by: 0;
      rank: 0;
      popularity: 0;
      members: 0;
      favorites: 0;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: 0;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
    items: {
      count: 0;
      total: 0;
      per_page: 0;
    };
  };
};

export default async function Popular() {
  let data = await getData();
  let anime: HotCake = data;
  let animeData = anime.data;

  return (
    <main className="text-left mt-4 ">
      <div className="flex flex-col items-start justify-center space-y-3 w-fit mx-auto ">
        {animeData.map((anime) => {
          return (
            <div key={anime.mal_id} className="px-3 py-4 space-y-4">
              <h1 className="font-bold text-4xl">Title: {anime.title}</h1>
              <h1 className="font-bold text-3xl">
                {(anime.year = anime.year ?? "")}
              </h1>
              <h1 className="font-bold text-3xl">
                {(anime.episodes = anime.episodes ?? "No idea")}
              </h1>
              <h1 className="font-bold text-3xl">{anime.type}</h1>
              <img
                src={anime.images.jpg.image_url}
                alt="anime image"
                width={400}
                height={400}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
