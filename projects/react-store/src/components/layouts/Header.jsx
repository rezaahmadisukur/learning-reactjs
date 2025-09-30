import { Link } from "react-router-dom";
import { Context } from "../../Contexts/Context";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(Context);
  const location = useLocation();

  return (
    <>
      <header className="w-full p-5 shadow-sm">
        {/* Navbar Dekstop */}
        <nav className="hidden md:flex justify-between items-center w-11/12 mx-auto">
          <div>
            <Link to="/" className="text-xl font-bold uppercase">
              Store
            </Link>
          </div>
          <ul className="flex justify-center items-center gap-10">
            <li>
              <Link
                to="/"
                className={`hover:font-bold transition-all ${
                  location.pathname === "/" ? "activeLink" : null
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:font-bold transition-all ${
                  location.pathname === "/products" ? "activeLink" : ""
                }`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:font-bold transition-all ${
                  location.pathname === "/about" ? "activeLink" : null
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:font-bold transition-all ${
                  location.pathname === "/contact" ? "activeLink" : null
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cart.length > 0 ? (
                <div className="w-5 h-5 bg-slate-900 text-slate-100 rounded-full absolute -top-2 -right-2 flex justify-center items-center text-xs">
                  {cart.length > 0 &&
                    cart.reduce((acc, cur) => acc + cur.qty, 0)}
                </div>
              ) : null}
            </Link>
          </div>
        </nav>

        {/* Navbar Mobile */}
        <nav className="md:hidden flex justify-between items-center w-11/12 mx-auto">
          <div>
            <Link to="/" className="text-xl font-bold uppercase">
              Store
            </Link>
          </div>
          <div>
            <Link to="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cart.length > 0 ? (
                <div className="w-5 h-5 bg-slate-900 text-slate-100 rounded-full absolute -top-2 -right-2 flex justify-center items-center text-xs">
                  {cart.length > 0 &&
                    cart.reduce((acc, cur) => acc + cur.qty, 0)}
                </div>
              ) : null}
            </Link>
          </div>
        </nav>
      </header>
      <ul className="md:hidden flex my-5 justify-center items-center gap-10">
        <li>
          <Link
            to="/"
            className={`hover:font-bold transition-all ${
              location.pathname === "/" ? "activeLink" : null
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`hover:font-bold transition-all ${
              location.pathname === "/products" ? "activeLink" : null
            }`}
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`hover:font-bold transition-all ${
              location.pathname === "/about" ? "activeLink" : null
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:font-bold transition-all ${
              location.pathname === "/contact" ? "activeLink" : null
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
