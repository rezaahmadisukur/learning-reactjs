import { useContext, useEffect, useState } from "react";
import { getTopAnime, getTopManga } from "../../../services/api";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Context } from "../../../contexts/Context";
import HomeCard from "./HomeCard";

const HomeContent = () => {
  const [topAnimeItems, setTopAnimeItems] = useState([]);
  const [topMangaItems, setTopMangaItems] = useState([]);
  const { topAnimeSwiperRef, topMangaSwiperRef } = useContext(Context);

  useEffect(() => {
    document.title = "Homepage MAL";
    getTopAnime((data) => {
      setTopAnimeItems(data.data);
      // console.log("Top Anime", data.data);
    });

    getTopManga((data) => {
      setTopMangaItems(data.data);
      // console.log("Top Manga", data.data);
    });
  }, [setTopAnimeItems, setTopMangaItems]);

  return (
    <div className="px-10 py-5 bg-my-dark text-my-white h-full">
      <div className="py-5">
        <div className="rounded overflow-hidden border-5">
          <img
            src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfrlSgfIEw-hX0imXlnY3qlZQoHl7Sx1z4CVxkWNdRMltLiGO6lkciwA1XsDjZto2aQJP9X7ulUOHfspuCwAdhfCngH7SZzsPZZn.jpg?r=551"
            alt="..."
          />
        </div>
        <div className="py-5">
          <div className="py-5 flex justify-between items-center">
            <h1>Top Anime</h1>
            <div className="text-md flex gap-5">
              <button
                onClick={() => topAnimeSwiperRef.current?.slidePrev()}
                className="w-8 h-8 rounded-full bg-my-gray font-bold grid place-content-center cursor-pointer hover:bg-slate-900"
              >
                <CaretLeft color="white" weight="bold" />
              </button>
              <button
                onClick={() => topAnimeSwiperRef.current?.slideNext()}
                className="w-8 h-8 rounded-full bg-my-gray font-bold grid place-content-center cursor-pointer hover:bg-slate-900"
              >
                <CaretRight color="white" weight="bold" />
              </button>
            </div>
          </div>
          <HomeCard items={topAnimeItems} swiperRef={topAnimeSwiperRef} />
        </div>
        <div className="py-5">
          <div className="py-5 flex justify-between items-center">
            <h1>Top Manga</h1>
            <div className="text-md flex gap-5">
              <button
                onClick={() => topMangaSwiperRef.current?.slidePrev()}
                className="w-8 h-8 rounded-full bg-my-gray font-bold grid place-content-center cursor-pointer hover:bg-slate-900"
              >
                <CaretLeft color="white" weight="bold" />
              </button>
              <button
                onClick={() => topMangaSwiperRef.current?.slideNext()}
                className="w-8 h-8 rounded-full bg-my-gray font-bold grid place-content-center cursor-pointer hover:bg-slate-900"
              >
                <CaretRight color="white" weight="bold" />
              </button>
            </div>
          </div>
          <HomeCard items={topMangaItems} swiperRef={topMangaSwiperRef} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
