import React from 'react'
import construction1 from "../assets/images/construction-image.jpg";
import construction2 from "../assets/images/construction-image3.jpg";
import construction3 from "../assets/images/construction-image5.jpg";
import image1 from "../assets/images/project-image-1.jpeg";
import image2 from "../assets/images/project-image-2.jpg";
import image3 from "../assets/images/project-image-3.jpg";
import image4 from "../assets/images/project-image-4.jpeg";
import image5 from "../assets/images/project-image-5.jpeg";
import image6 from "../assets/images/project-image-6.jpeg";
import image7 from "../assets/images/project-image-7.jpg";
import image8 from "../assets/images/project-image-8.jpeg";
import TypeWriterEffect from 'react-typewriter-effect';
import '../pages/timeline.css'
import { Link, NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="font-monserrat">
      <section>
        <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full lg:h-[700px] h-[200px]" id="image-div">
              <img
                src={construction1}
                alt="construction-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 lg:pt-0">
            <div className="lg:pb-10 pr-4 lg:pr-0">
              <h1 className="text-jet text-[2.5rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-20 ">
                <span className="text-green-600">
                  Unleashing excellence through
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#3F3D56",
                      fontWeight: 800,
                      display: "block",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={["COMMITMENT.", "Quality.", "Innovation."]}
                    multiTextDelay={2000}
                    typeSpeed={200}
                  />
                </span>
              </h1>
              <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
                We are a construction and electrical firm with extensive
                experience in building top-quality infrastructure. Our team of
                experts is dedicated to delivering exceptional services and
                ensuring that all projects are completed on time and within
                budget. Whether you're looking for custom solar installations,
                energy audits, equipment procurement, or any other construction
                or electrical services, we've got you covered. From concept to
                completion, we're here to provide you with the highest quality
                of service and deliver exceptional results that exceed your
                expectations. Don't wait, let's get started on your next project
                today!
              </p>
              <NavLink to="/about">
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-black">
                  Learn more
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
          <div className="lg:col-span-6 col-span-12 green-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full">
            <motion.h1
              initial={{ x: -250 }}
              animate={{ x: 0, y: -10 }}
              className="text-gray-500 uppercase text-[2.3rem] md:text-[2.5rem] text-muted py-1"
            >
              <span className="text-warning font-bold uppercase">
                Our Technical Expertise
              </span>{" "}
              in Building and Power Solutions.
            </motion.h1>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold"
            >
              With years of experience in the construction and electrical
              industry, we have developed a deep understanding of the technical
              aspects of building and maintaining infrastructure. Our team of
              experts are highly skilled in areas such as project management,
              design, engineering, construction, installation, and maintenance.
              We utilize the latest tools, technologies, and techniques to
              ensure that we deliver the highest quality workmanship, while
              adhering to strict safety and regulatory standards. Whether it’s a
              commercial or residential project, we have the expertise to take
              on any challenge and provide tailored solutions to meet your
              specific needs.
            </motion.p>
          </div>
          <div className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px] ">
            <img
              src={construction2}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12">
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            id="escape"
          >
            <img
              src={construction3}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full text-muted h-full">
            <h1 className="text-green-600 uppercase text-[2.5rem] py-1">
              <span className="text-muted font-bold">United in Purpose</span>{" "}
              Driven by Teamwork.
            </h1>
            <p className="text-black w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl text-muted lg:pb-0 md:pb-32">
              Our team works together towards a shared vision and common purpose
              of providing exceptional services, promoting sustainable
              development, and making a positive impact on the world. We uphold
              the highest standards of excellence and professionalism in all our
              endeavors, and believe that by working collaboratively, we can
              achieve more than any one individual could accomplish alone.
            </p>
          </div>
        </div>
      </section>

      <section className="flex px-6">
        <div className="flex flex-col md:justify-center md:items-center w-full my-8">
          <h1 className="flex flex-col md:items-center font-bold text-warning uppercase text-[2.5rem] ">
            <span className="text-3xl">our</span>
            <span className="text-green-600 md:text-[4rem] m-0">services</span>
          </h1>
          <span className="w-16 h-4 bg-warning relative rounded-full"></span>
          <div>
            <div className="main font-monserrat my-10 px-4">
              <h3 className="heading">Here's what we do</h3>

              <div className="container">
                <ul>
                  <li>
                    <h3 className="title font-semibold">
                      {" "}
                      We are Experts in Construction and Electrical services
                    </h3>
                    <p>
                      Our team of skilled craftsmen and licensed electricians
                      work together to deliver exceptional results that exceed
                      our clients' expectations. With a commitment to excellence
                      and innovation, we strive to set a new standard in the
                      construction and electrical services industry.
                    </p>
                    <a href="Services">Read More </a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Power Custom Installation
                    </h3>
                    <p>
                      From residential rooftops to large-scale commercial
                      installations, we have the experience and expertise to
                      deliver high-quality, customized solar power solutions.
                    </p>
                    <a href="/Services">Read More</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Equipment Procurement
                    </h3>
                    <p>
                      Whether it's for a small residential project or a large
                      commercial installation, we are committed to providing our
                      clients with the best solar equipment procurement
                      solutions.
                    </p>
                    <a href="services">Read More</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Powered Boreholes
                    </h3>
                    <p>
                      The installation of solar-powered boreholes has proven to
                      be a game-changer in many areas around the world,
                      providing clean and safe water to communities and reducing
                      their dependence on traditional energy sources.
                    </p>
                    <a href="Services">Read More </a>
                    <span className="circle"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-6">
        <div className="flex md:justify-center md:items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Recent </span>
            <span className="font-thin text-black"> projects</span>
          </h1>
        </div>
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
          <img src={image1} alt="project-image-1" />
          <img src={image2} alt="project-image-1" />
          <img src={image3} alt="project-image-1" />
          <img src={image4} alt="project-image-1" />
          <img src={image5} alt="project-image-1" />
          <img src={image6} alt="project-image-1" />
          <img src={image7} alt="project-image-1" />
          <img src={image8} alt="project-image-1" />
        </div>

        <div className="w-full flex items-center justify-center mb-12">
          <NavLink to="/projects">
            <button className="btn btn-lg btn-success text-white">
              see gallery{" "}
            </button>
          </NavLink>
        </div>
      </section>

      <section className="flex px-6">
        {/* <div className="flex flex-col justify-center items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Testimonials</span>
          </h1>
          <span className="w-16 h-4 bg-green-600 relative rounded-full"></span>
        </div> */}
      </section>
    </div>
  );
}

export default Home