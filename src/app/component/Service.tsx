import Image from "next/image";
export default function Service() {
  return (
    <section className="text-slate-300  bg-gradient-to-r from-black to-orange-700 ">
      <div className="flex justify-center items-center bg-black bg-opacity-35 py-3 ">
          <h2 className="text-4xl font-bold text-white animate-bounce">Services</h2>
          </div>
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            {/* card 1 */}
            <div className="h-full bg-black bg-opacity-35 px-8 pb-10 rounded-lg overflow-hidden text-center relative">
              <Image
                src="/card-2.jpg"
                alt="image"
                className="py-10 duration-300 hover:scale-105 rounded-md"
                width={500}
                height={500}
              />
              <h2 className="tracking-widest text-xs title-font font-medium text-slate-50 mb-1">
                Services
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Bulding saclable web applications with modren technologies
              </h1>
              <p className="leading-relaxed mb-3">
                Expertise in designing and developing scalable web applications
                using modern technologies and frameworks
              </p>

              <a className="text-slate-50 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-slate-50 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-black border-opacity-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-slate-50 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            {/* card 2 */}
            <div className="h-full bg-black bg-opacity-35 px-8 pb-24 rounded-lg overflow-hidden text-center relative">
              <Image
                src="/card4.jpg"
                alt="image"
                className="py-10 duration-300 hover:scale-105 rounded-md"
                width={500}
                height={500}
              />
              <h2 className="tracking-widest text-xs title-font font-medium text-slate-50 mb-1">
                Services
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                User Experience (UX) Designer User Interface (UI) Designer
              </h1>
              <p className="leading-relaxed mb-3">
                {" "}
                Expertise in crafting user-centered design experiences with
                intuitive and engaging interfaces.
              </p>
              <a className="text-slate-50 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-slate-50 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-slate-50 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            {/* card 3 */}
            <div className="h-full  bg-black bg-opacity-35 px-8 pb-24 rounded-lg overflow-hidden text-center relative">
              <Image
                src="/ai.jpg"
                alt="image"
                className="py-10 duration-300 hover:scale-105 rounded-md"
                width={500}
                height={500}
              />
              <h2 className="tracking-widest text-xs title-font font-medium text-slate-50 mb-1">
                Services
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Web Solution Architect web desingn & Deveiopment expert
              </h1>
              <p className="leading-relaxed mb-3">
                Exploring and developing innovative AI solutions for real-world
                problems, improving efficiency and productivity
              </p>
              <a className="text-slate-50 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
               <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-slate-50 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-slate-50 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor" 
                     strokeWidth="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24" 
                   >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
