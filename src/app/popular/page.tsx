import TopAnime from "@/components/TopAnime";

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
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5 w-fit ">
        {animeData.map((anime) => {
          return (
            <TopAnime
              key={anime.mal_id}
              img={anime.images.jpg.image_url}
              title={anime.title}
            ></TopAnime>
          );
        })}
      </section>
    </main>
  );
}
