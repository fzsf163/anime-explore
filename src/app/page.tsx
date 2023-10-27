import MasonaryTile from "@/components/MasonaryTile";
import TopAnime from "@/components/TopAnime";
import { TopAnimeType } from "@/types";
async function getData() {
  const res = await fetch(
    "https://api.jikan.moe/v4/top/anime?sfw&filter=airing"
  );
  const data = res.json();
  return data;
}
async function getTopAnime() {
  const res = await fetch(
    "https://api.jikan.moe/v4/top/anime?sfw&filter=bypopularity"
  );
  const data = res.json();
  return data;
}

export default async function Home() {
  const data: TopAnimeType = await getData();
  const popular: TopAnimeType = await getTopAnime();
  const airing = data.data;
  const popularData = popular.data;
  // console.log(popularData[0]);
  return (
    <main>
      <section className="bg-bg-pop">
        <div className="flex items-start justify-center  max-w-[1550px] mx-auto py-10">
          <div className="w-fit sticky top-16 ms-5 mt-5 me-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="text-center text-4xl font-mono font-extrabold "
            >
              <g
                id="feTrophy0"
                fill="none"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
              >
                <g id="feTrophy1" fill="currentColor">
                  <path
                    id="feTrophy2"
                    d="M6.207 9H6a2 2 0 1 1 0-4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 1 1 0 4h-.207A5.504 5.504 0 0 1 13 12.978V17h1a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h1v-1a2 2 0 0 1 2-2h1v-4.022A5.504 5.504 0 0 1 6.207 9ZM8 4v3.5a3.5 3.5 0 0 0 3.5 3.5h1A3.5 3.5 0 0 0 16 7.5V4H8Z"
                  />
                </g>
              </g>
            </svg>
            <hr className="mt-5 opacity-25" />
            <hr className="mt-5 opacity-25" />
          </div>
          {/* popular */}
          <section>
            <MasonaryTile data={popularData}></MasonaryTile>
          </section>
        </div>
      </section>

      {/* airing */}
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-5 w-fit">
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
    </main>
  );
}
