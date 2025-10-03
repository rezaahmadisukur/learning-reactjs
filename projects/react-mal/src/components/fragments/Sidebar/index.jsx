import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HouseLine, Compass, Video, Books } from "@phosphor-icons/react";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-my-gray text-my-white ps-2 h-full">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center p-10">
          <img
            src="/public/assets/images/logo/logo.png"
            alt="logo..."
            width={100}
            height={100}
          />
          <h1 className="text-xl">Kitsunime</h1>
        </div>
        {/* Start Menus */}
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-md text-my-white px-5 py-2">Menu</h2>
          <ul className="flex flex-col gap-2">
            <Link
              className={`w-full hover:border-e-4 hover:border-my-pink transition-all ${
                location.pathname === "/"
                  ? "text-my-pink border-e-4 border-my-pink"
                  : null
              }`}
            >
              <li
                className={`px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600 ${
                  location.pathname === "/" ? "bg-slate-600" : null
                }`}
              >
                <HouseLine size={32} />
                Home
              </li>
            </Link>
            <Link
              className={`w-full hover:border-e-4 hover:border-my-pink transition-all`}
            >
              <li
                className={`px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600`}
              >
                <Compass size={32} />
                Explore
              </li>
            </Link>
            <Link
              className={`w-full hover:border-e-4 hover:border-my-pink transition-all`}
            >
              <li
                className={`px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600`}
              >
                <Video size={32} />
                Anime
              </li>
            </Link>
            <Link
              className={`w-full hover:border-e-4 hover:border-my-pink transition-all`}
            >
              <li
                className={`px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600`}
              >
                <Books size={32} />
                Manga
              </li>
            </Link>
          </ul>
        </div>
        {/* End Menus */}
      </div>
    </div>
  );
};

export default Sidebar;
