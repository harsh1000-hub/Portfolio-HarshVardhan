import "./App.css";
import Porfile from "./assets/Photo.png";
import PorfileBg from "./assets/small.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Harsh Vardhan</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* Intro/Banner Section */}
        <section>
          <div className="container m-auto px-4 py-10 flex gap-6">
            <div>
              <h2 className="font-bold text-4xl">Hey, I'm Harsh Vardhan</h2>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">
                Software Developer
              </h2>
              <p className="mt-4 text-gray-400">
                Software Developer specializing in full-stack development, adept
                in Agile methodologies, and committed to delivering robust,
                scalable solutions through effective team collaboration and
                advanced problem-solving.
              </p>
            </div>
            <div className="relative">
              <img src={Porfile} width={520} className="relative z-10" />
              <img src={PorfileBg} className="absolute top-0 left-12 z-0 " />
            </div>
          </div>
        </section>
        {/* Projects */}
        <section>
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout Github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Designer furniture store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online store of designer
                  furniture. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout Github
                  </button>
                </div>
              </div>
            </div>

            {/* ---------------------- */}

            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Landing page for front-end developer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout Github
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Website redesign for The Venus project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                  (SCSS)
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live Preview
                  </button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout Github
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Technologies */}
          <section className="mt-12">
            <div className="container m-auto px-4">
              <h2 className="text-2xl font-semibold">Technologies</h2>
              <div className="mt-14">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">HTML5</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">
                      CSS, Sass & Bootstrap
                    </h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">
                      JavaScript, TypeScript, JQuery
                    </h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
