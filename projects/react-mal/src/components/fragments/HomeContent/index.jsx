import { useEffect, useRef, useState } from "react";
import { getTopAnime } from "../../../services/api";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [items, setItems] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    getTopAnime((data) => {
      setItems(data.data);
      console.log(data.data);
    });
  }, [setItems]);

  return (
    <div className="px-10 py-5 bg-my-dark text-my-white h-full">
      <div>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Anime, Manga..."
          className="bg-my-white placeholder:text-slate-600 px-5 py-2 rounded w-1/2"
        />
      </div>

      <div className="py-5">
        <div className="rounded overflow-hidden">
          <img
            src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfrlSgfIEw-hX0imXlnY3qlZQoHl7Sx1z4CVxkWNdRMltLiGO6lkciwA1XsDjZto2aQJP9X7ulUOHfspuCwAdhfCngH7SZzsPZZn.jpg?r=551"
            alt=""
          />
        </div>

        <div className="py-5">
          <div className="py-5 flex justify-between items-center">
            <h1>Top Anime</h1>
            <div className="text-md flex gap-5">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-8 h-8 rounded-full bg-my-gray font-bold grid place-content-center cursor-pointer hover:bg-slate-900"
              >
                <CaretLeft color="white" weight="bold" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-8 h-8 rounded-full bg-my-gray font-bold grid place-content-center cursor-pointer hover:bg-slate-900"
              >
                <CaretRight color="white" weight="bold" />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // className="grid lg:grid-cols-5 gap-3 grid-cols-3"
          >
            {items.length > 0 &&
              items.map((item) => (
                <SwiperSlide
                  key={item.mal_id}
                  className="h-100 bg-my-secondary rounded overflow-hidden"
                >
                  <div className="h-80 w-full relative">
                    <img
                      src={item.images.webp.image_url}
                      alt="..."
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 flex justify-between items-center w-full p-1">
                      <div className="flex gap-2">
                        <p className="uppercase p-1 bg-my-white text-my-dark rounded text-xs font-bold">
                          sub
                        </p>
                        <p className="uppercase p-1 bg-my-white text-my-dark rounded text-xs font-bold">
                          dub
                        </p>
                      </div>
                      <div>
                        <p className="px-3 py-1 text-my-white bg-my-pink text-xs rounded font-semibold">
                          Ep {item.episodes} / {item.episodes}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 flex flex-col justify-between h-20">
                    <Link className="text-sm line-clamp-1 hover:text-my-pink hover:underline transition-all">
                      {item.title}
                    </Link>
                    <p className="text-xs">
                      {item.type} | {item.genres[0].name} |{" "}
                      {`${item.duration.substring(0, 2)}m`}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
