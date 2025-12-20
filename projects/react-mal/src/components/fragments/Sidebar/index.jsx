import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  HouseLine,
  Compass,
  Video,
  Books,
  CaretDown
} from "@phosphor-icons/react";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-my-gray text-my-white ps-2 h-full">
      <div className="w-full">
        {/* Images Menu */}
        <div className="flex flex-col justify-center items-center p-10">
          <img
            src="/public/assets/images/logo/logo.png"
            alt="logo..."
            width={100}
            height={100}
          />
          <h1 className="text-xl font-bold">Kitsunime</h1>
        </div>
        {/* Start Menus */}
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-md text-my-white px-5 py-2">Menu</h2>
          <ul className="flex flex-col gap-2">
            <li
              className={`w-full hover:border-e-4 hover:border-my-pink transition-all  ${
                location.pathname === "/"
                  ? "text-my-pink border-e-4 border-my-pink"
                  : null
              }`}
            >
              <Link
                to="/"
                className={`px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600 ${
                  location.pathname === "/" ? "bg-slate-600" : null
                }`}
              >
                <HouseLine size={32} />
                Home
              </Link>
            </li>
            <li
              className={`w-full hover:border-e-4 hover:border-my-pink transition-all ${
                location.pathname === "/explore"
                  ? "text-my-pink border-e-4 border-my-pink"
                  : null
              }`}
            >
              <Link
                to="/explore"
                className={`px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600 ${
                  location.pathname === "/explore" ? "bg-slate-600" : null
                }`}
              >
                <Compass size={32} />
                Explore
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="px-5 py-2 w-11/12 rounded flex items-center gap-2 transition-all hover:bg-slate-600 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <Video size={32} />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Anime
                </span>
                <CaretDown />
              </button>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li className="ps-5 w-full hover:border-e-4 hover:border-my-pink transition-all">
                  <Link className="px-5 py-2 w-11/12 rounded flex items-center gap-2 hover:text-my-pink transition-all hover:bg-slate-600 ">
                    Top Anime
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* End Menus */}
      </div>
    </div>
  );
};

export default Sidebar;
