import TopAnime from "@/components/TopAnime";

async function getData() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?sfw&filter=airing", {
    next: { revalidate: 1 },
  });
  const data = res.json();
  return data;
}
export type TopAnime = {
  data: [
    {
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
      trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
      };
      approved: true;
      titles: [
        {
          type: string;
          title: string;
        }
      ];
      title: string;
      title_english: string;
      title_japanese: string;
      title_synonyms: [string];
      type: string;
      source: string;
      episodes: number;
      status: string;
      airing: true;
      aired: {
        from: string;
        to: string;
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
          string: string;
        };
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
      producers: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      studios: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      themes: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: true;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
};
export default async function Home() {
  const data: TopAnime = await getData();
  const airing = data.data;
  // console.log(airing[0]);
  return (
    <div>
      <section className="flex items-center justify-center flex-wrap gap-4">
        {airing.map((air) => {
          return (
            <TopAnime
              key={air.mal_id}
              img={air.images.jpg.image_url}
              title={air.title}
            ></TopAnime>
          );
        })}
      </section>
    </div>
  );
}
