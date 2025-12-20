import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const HomeCard = (props) => {
  const { swiperRef, items } = props;
  const [slidePerView, setSlidePerView] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidePerView(2);
      } else {
        setSlidePerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slidePerView}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {items.length > 0 &&
          items.map((item) => (
            <SwiperSlide
              key={item.mal_id}
              className="h-100 bg-my-secondary rounded overflow-hidden"
            >
              <div className="h-80 w-full relative overflow-hidden">
                <img
                  src={item.images.webp.image_url}
                  alt="..."
                  className="h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
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
                    {item.episodes ? (
                      <p className="px-3 py-1 text-my-white bg-my-pink text-xs rounded font-semibold">
                        Eps {item.episodes}
                      </p>
                    ) : (
                      <>
                        {item.chapters !== null ? (
                          <p className="px-3 py-1 text-my-white bg-my-pink text-xs rounded font-semibold">
                            {item.chapters} Chap
                          </p>
                        ) : (
                          <p className="px-3 py-1 text-my-white bg-my-pink text-xs rounded font-semibold">
                            ? Chap
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between h-20">
                <Link
                  to={`/anime/${item.mal_id}/full`}
                  className="text-sm line-clamp-1 hover:text-my-pink hover:underline transition-all"
                >
                  {item.title}
                </Link>
                <p className="text-xs">
                  {item.type} | {item.genres[0].name}{" "}
                  {item.duration && (
                    <span>{`| ${item.duration.substring(0, 3)}m`}</span>
                  )}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HomeCard;
