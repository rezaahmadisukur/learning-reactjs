import { Link } from "react-router-dom";
import LayoutApp from "../components/layouts/LayoutApp";

const HomePage = () => {
  return (
    <LayoutApp>
      <main>
        <section className="bg-slate-300">
          <div className="w-11/12 mx-auto lg:flex items-center">
            <div className="lg:w-2/3 w-full flex flex-col gap-8 pe-10 py-5">
              <p className="py-2 px-5 bg-slate-50 w-fit rounded-full text-sm lg:text-xl font-semibold flex gap-3 items-center ">
                <img
                  src="https://www.svgrepo.com/show/495229/discount-shape.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="text-lg lg:text-2xl font-bold">50% OFF</span>{" "}
                in Summer Super Sale
              </p>
              <div className="text-3xl lg:text-6xl font-bold flex flex-col gap-3">
                <h1>Step into style: Your</h1>
                <h1>Ultimate Fashion Destionation</h1>
              </div>
              <p className="text-lg lg:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium incidunt facere debitis quisquam dolorum perferendis
                maiores? Dignissimos fugit quas qui eius animi dicta,
                accusantium maxime!
              </p>
              <Link
                to="/products"
                className="flex gap-2 px-5 py-2 bg-slate-900 text-slate-100 rounded w-fit hover:bg-slate-800 transition-all"
              >
                Shop Now
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-1/3 lg:block hidden">
              <img src="images/maskot.png" alt="..." width={500} />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="grid grid-cols-1 gap-5  mx-5 lg:mx-10 lg:flex lg:justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://www.svgrepo.com/show/352446/shipping-fast.svg"
                alt="..."
                width={50}
                height={50}
                className=""
              />
              <div>
                <h4 className="font-bold text-lg">Free Shipping</h4>
                <p className="text-sm">Free Shipping for order above $180</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.svgrepo.com/show/502788/payment-card.svg"
                alt="..."
                width={50}
                height={50}
              />
              <div>
                <h4 className="font-bold text-lg">Flexible Payment</h4>
                <p className="text-sm">Multiple secure payment options</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.svgrepo.com/show/266800/headphones-support.svg"
                alt="..."
                width={50}
                height={50}
              />
              <div>
                <h4 className="font-bold text-lg">24x7 Support</h4>
                <p className="text-sm">We support online all days</p>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className=" max-w-full w-full  lg:p-10 hidden lg:grid grid-cols-2 gap-3">
            <div className="w-full bg-slate-300 rounded-2xl flex h-125">
              <div className="flex flex-col gap-5 w-2/3 p-10">
                <p className="px-5 py-2 bg-slate-100 rounded-full w-fit">
                  <span className="font-bold">1500+</span> Items
                </p>
                <h1 className="text-3xl font-bold text-slate-900">
                  For Women's
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, reiciendis!
                </p>
              </div>
              <img src="/public/images/for-women.png" alt="..." />
            </div>
            <div className="w-full grid grid-cols-1 gap-3">
              <div className="w-full bg-slate-300 rounded-2xl relative overflow-hidden">
                <div className="flex flex-col gap-5 w-2/3 p-10">
                  <p className="px-5 py-2 bg-slate-100 rounded-full w-fit">
                    <span className="font-bold">3000+</span> Items
                  </p>
                  <h1 className="text-3xl font-bold text-slate-900">
                    For Men's
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, reiciendis!
                  </p>
                </div>
                <img
                  src="/public/images/for-men.png"
                  alt="..."
                  className="absolute right-0 bottom-0 w-50"
                />
              </div>
              <div className="w-full bg-slate-300 rounded-2xl relative overflow-hidden">
                <div className="flex flex-col gap-5 w-2/3 p-10">
                  <p className="px-5 py-2 bg-slate-100 rounded-full w-fit">
                    <span className="font-bold">5000+</span> Items
                  </p>
                  <h1 className="text-3xl font-bold text-slate-900">
                    Accessories
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, reiciendis!
                  </p>
                </div>
                <img
                  src="/public/images/accessories.png"
                  alt="..."
                  className="absolute right-0 -bottom-3 w-50"
                />
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden max-w-full w-full  p-5 grid grid-cols-1 gap-3">
            <div className="w-full bg-slate-300 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col gap-5 p-5">
                <p className="px-5 py-2 bg-slate-100 rounded-full w-fit">
                  <span className="font-bold">1500+</span> Items
                </p>
                <h1 className="text-3xl font-bold text-slate-900">
                  For Women's
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, reiciendis!
                </p>
              </div>
              <img
                src="/public/images/for-men.png"
                alt="..."
                className="absolute right-0 bottom-0 w-50 hidden"
              />
            </div>
            <div className="w-full bg-slate-300 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col gap-5 p-5">
                <p className="px-5 py-2 bg-slate-100 rounded-full w-fit">
                  <span className="font-bold">3000+</span> Items
                </p>
                <h1 className="text-3xl font-bold text-slate-900">For Men's</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, reiciendis!
                </p>
              </div>
              <img
                src="/public/images/for-men.png"
                alt="..."
                className="absolute right-0 bottom-0 w-50 hidden"
              />
            </div>
            <div className="w-full bg-slate-300 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col gap-5 p-5">
                <p className="px-5 py-2 bg-slate-100 rounded-full w-fit">
                  <span className="font-bold">5000+</span> Items
                </p>
                <h1 className="text-3xl font-bold text-slate-900">
                  Accessories
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, reiciendis!
                </p>
              </div>
              <img
                src="/public/images/for-men.png"
                alt="..."
                className="absolute right-0 bottom-0 w-50 hidden"
              />
            </div>
          </div>
        </section>
      </main>
    </LayoutApp>
  );
};

export default HomePage;
