import LayoutApp from "../components/layouts/LayoutApp";

const ContactPage = () => {
  return (
    <LayoutApp>
      <header className=" p-5 my-10 text-center flex flex-col gap-3">
        <h1 className="font-bold text-5xl text-slate-800">Contact Us</h1>
        <p className="text-slate-500 font-semibold lg:w-1/2 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          delectus sequi alias aperiam adipisci culpa eos distinctio
          perspiciatis amet facilis.
        </p>
      </header>

      <section className="px-5 lg:px-15 bg-slate-300 py-5 lg:py-10 lg:flex w-full lg:gap-5 lg:items-center">
        <div className="flex flex-col gap-5 lg:w-1/2">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 font-bold text-3xl">Get In Touch</h1>
            <p className="font-semibold text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              at, minima tempore saepe magni ratione quas voluptatum officiis
              quos explicabo.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 text-slate-100 w-12 h-12 flex justify-center items-center rounded-full">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Address</h4>
                <p className="text-slate-500 font-semibold">
                  London Eye, London UK
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 text-slate-100 w-12 h-12 flex justify-center items-center rounded-full">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone Number</h4>
                <p className="text-slate-500 font-semibold">+123-456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-800 text-slate-100 w-12 h-12 flex justify-center items-center rounded-full">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-slate-500 font-semibold">mailto@subx.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Message Input */}
        <div className="bg-slate-100 rounded-2xl my-10 p-5 lg:w-1/2">
          <h1 className="text-3xl font-bold text-slate-900 mb-5">
            Send a Message
          </h1>
          <form className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-b w-full border-slate-500 text-xl h-10  focus:outline-0"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="border-b w-full border-slate-500 text-xl h-10  focus:outline-0"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={3}
                cols={30}
                className="border-b w-full border-slate-500 text-xl focus:outline-0"
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                className="py-2 w-full text-center text-slate-100 bg-slate-800 rounded-full cursor-pointer hover:bg-slate-900 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="p-5 flex justify-center items-center h-100 lg:px-15">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.4125322776554!2d-0.12209412477293394!3d51.50318971101271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e1!3m2!1sid!2sid!4v1759048087065!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </section>
    </LayoutApp>
  );
};

export default ContactPage;
