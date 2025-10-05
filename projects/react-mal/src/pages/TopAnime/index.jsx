import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const TopAnime = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-red-500 flex items-center justify-center text-white text-2xl">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopAnime;
