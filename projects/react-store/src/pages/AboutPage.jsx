import LayoutApp from "../components/layouts/LayoutApp";

const AboutPage = () => {
  return (
    <LayoutApp>
      <header className=" p-5 my-10 text-center flex flex-col gap-3">
        <h1 className="font-bold text-5xl text-slate-800">About Us</h1>
        <p className="text-slate-500 font-semibold lg:w-1/2 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          delectus sequi alias aperiam adipisci culpa eos distinctio
          perspiciatis amet facilis.
        </p>
      </header>

      <section className="flex gap-10 w-full px-5 py-10 lg:px-15 items-center flex-col lg:flex-row bg-slate-300">
        <div className="lg:w-1/2">
          <img src="/public/images/company.jpg" alt="..." />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-1 lg:gap-5">
            <h1 className="capitalize text-2xl font-bold lg:text-4xl">
              we have the best instructors available in the city
            </h1>
            <p className="font-medium text-sm text-slate-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              commodi dicta ducimus quod quos. Asperiores rem quasi dicta
              consequuntur dolorum eius sunt, soluta nisi quis porro
              necessitatibus corrupti a vero dignissimos quia incidunt, error ad
              nam illum excepturi, id voluptatibus. Illum consequatur
              consectetur, explicabo natus eos quibusdam ex labore reiciendis!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="border w-10 h-10 rounded-full p-2 bg-slate-800 text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              <span className="font-bold">Online Tutoring</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="border w-10 h-10 rounded-full p-2 bg-slate-800 text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <span className="font-bold">50+ Courses</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="border w-10 h-10 rounded-full p-2 bg-slate-800 text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-bold">50+ Courses</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="border w-10 h-10 rounded-full p-2 bg-slate-800 text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <span className="font-bold">Activate Learning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 flex flex-col gap-5 lg:gap-20  lg:px-15">
        <div className="text-center flex flex-col gap-3">
          <p className="text-xs text-slate-700 uppercase">Testimonial</p>
          <h1 className="text-xl font-bold text-slate-900 capitalize lg:text-3xl">
            what did our customer say about us ?
          </h1>
          <p className="text-sm font-semibold text-slate-500 lg:w-1/3 lg:mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            ullam expedita porro dolor vel earum maxime aliquid nemo, ducimus
            neque.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="p-3 rounded-lg flex flex-col justify-center items-center bg-slate-300">
            <p className="text-center text-slate-800 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat nihil sed aliquid aliquam esse.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <img
                src="https://img.freepik.com/free-photo/content-confident-handsome-asian-businessman-looking-camera_1262-17002.jpg?uid=R166627764&ga=GA1.1.2008072554.1754400016&semt=ais_hybrid&w=740&q=80"
                alt="..."
                className="object-cover w-15 h-15 rounded-full"
              />
              <div>
                <h4 className="font-bold text-slate-900">Adam Smith</h4>
                <p className="text-sm font-lg text-slate-600">Customer</p>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-lg flex flex-col justify-center items-center bg-slate-300">
            <p className="text-center text-slate-800 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat nihil sed aliquid aliquam esse.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <img
                src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?uid=R166627764&ga=GA1.1.2008072554.1754400016&semt=ais_hybrid&w=740&q=80"
                alt="..."
                className="object-cover w-15 h-15 rounded-full"
              />
              <div>
                <h4 className="font-bold text-slate-900">Robert Fox</h4>
                <p className="text-sm font-lg text-slate-600">Customer</p>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-lg flex flex-col justify-center items-center bg-slate-300">
            <p className="text-center text-slate-800 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat nihil sed aliquid aliquam esse.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <img
                src="https://img.freepik.com/free-photo/positive-lady-standing-isolated_171337-2121.jpg?uid=R166627764&ga=GA1.1.2008072554.1754400016&semt=ais_hybrid&w=740&q=80"
                alt="..."
                className="object-cover w-15 h-15 rounded-full"
              />
              <div>
                <h4 className="font-bold text-slate-900">Roy Cardona</h4>
                <p className="text-sm font-lg text-slate-600">Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </LayoutApp>
  );
};

export default AboutPage;
