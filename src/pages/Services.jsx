import React from 'react'
import image1 from "../assets/images/construction-image4.jpg";
import image2 from "../assets/images/projects1.jpeg";
import image3 from "../assets/images/projects2.jpeg";
import { BsArrowDownSquareFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
function Services() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-96" id="image-set">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col"
        >
          <span className="text-3xl text-warning">our{""}</span>
          <span>services</span>
        </motion.h1>
      </div>

      <div>
        <div className="grid grid-cols-12 font-monserrat  w-full">
          <div className="md:col-span-6 col-span-12 ">
            <img
              src={image1}
              alt="image-here"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6 bg-gray-800 col-span-12 md:p-20 p-6 items-start">
            <h1 className="text-6xl py-5 font-bold uppercase text-green-600">
              <span className="font-light text-orange-500">what we</span> offer
            </h1>
            <div className="flex md:flex-row flex-col md:gap-4 text-white z-50">
              <div className="w-72 text-xl flex items-center ">
                We offer a range of services that span across energy audits,
                installations, commissioning and system maintenance
              </div>
              <div className="flex items-center justify-center md:mt-0 md:relative -mt-36">
                <span className="w-52 h-52 opacity-10 md:opacity-100 bg-green-700"></span>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-10">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-20 bg-gray-200 text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>construction services</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Our construction services encompass a wide range of
                    projects, including commercial, residential, industrial, and
                    infrastructure development. We provide turnkey solutions for
                    all phases of construction, from planning and design to
                    project management and execution. Our team of experts work
                    closely with clients to ensure that their vision is
                    realized, while also taking into account budgetary
                    constraints and timelines. We use the latest technology and
                    equipment to ensure that our projects are completed to the
                    highest quality standards, with a focus on safety and
                    sustainability.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Electrical services</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Installation, repair, and maintenance of electrical systems
                    and equipment in buildings, facilities, and industrial
                    sites. These services include the design and installation of
                    electrical wiring, lighting systems, power distribution
                    systems, and electrical control systems. Electrical
                    contractors also provide troubleshooting and repair services
                    to address electrical problems such as power outages,
                    circuit overloads, and electrical equipment malfunctions.
                    Additionally, electrical contractors offer maintenance
                    services to ensure that electrical systems continue to
                    function optimally and efficiently. Overall, electrical
                    services are essential for ensuring the safe and efficient
                    operation of electrical systems in residential, commercial,
                    and industrial settings.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Power Custom Installation</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    We specialize in custom solar power installations tailored
                    to meet the unique needs and requirements of our clients.
                    Our team of experts works closely with clients to design and
                    implement solar solutions that maximize energy production,
                    reduce costs, and minimize environmental impact. From
                    residential rooftops to large-scale commercial
                    installations, we have the experience and expertise to
                    deliver high-quality, customized solar power solutions.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Equipment Procurement</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    We provide reliable and efficient solar equipment
                    procurement services to clients across various industries.
                    Our team of experts ensures that the solar equipment we
                    procure is of the highest quality and meets the specific
                    needs of our clients. We have established relationships with
                    top manufacturers and suppliers in the industry, allowing us
                    to source solar equipment at competitive prices. Whether
                    it's for a small residential project or a large commercial
                    installation, we are committed to providing our clients with
                    the best solar equipment procurement solutions.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Powered Boreholes</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Solar Powered Boreholes are water systems that utilize solar
                    energy to pump water from underground sources to the
                    surface. These systems are a reliable and sustainable source
                    of water for communities, farms, and rural areas where
                    access to water is limited or nonexistent. The solar panels
                    used to power the boreholes are designed to convert sunlight
                    into electricity, which is stored in batteries for use when
                    the sun is not shining. This method of pumping water is
                    cost-effective, environmentally friendly, and provides a
                    long-term solution to water scarcity. The installation of
                    solar-powered boreholes has proven to be a game-changer in
                    many areas around the world, providing clean and safe water
                    to communities and reducing their dependence on traditional
                    energy sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-11">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10">
                  <span className="font-bold text-5xl text-warning">
                    Our Clients Since 1991
                  </span>
                  <span className="w-11 h-3 ml-10 bg-green-700"></span>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center">
                    <ul className="steps steps-vertical text-white">
                      <li data-content="★" className="step step-warning"></li>
                      <li data-content="★" className="step step-warning"></li>
                      <li data-content="★" className="step step-warning"></li>
                      <li data-content="★" className="step step-warning"></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Relyant Global</li>
                      <li> Central Asia Development Group (CADG)</li>
                      <li>Federal Ministry of Water Resources</li>
                      <li>
                        {" "}
                        Federal University of Petroleum Resources Effurun
                      </li>
                      <li>Federal Fire Service</li>
                      <li>Niger Delta Development Commission</li>
                      <li>Edo state Government</li>
                      <li>Delta state Government</li>
                      <li>Energy commission of Nigeria</li>
                      <li>
                        {" "}
                        Rural Water Supply and Sanitation Agency, RUWASA, Delta
                        State
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-12 gap-5 px-5 my-8">
          <div className="md:col-span-6 col-span-12 flex items-center justify-end">
            <img src={image2} alt="" className="h-96 object-cover" />
          </div>
          <div className="md:col-span-6 col-span-12 flex items-center justify-start">
            <img src={image3} alt="" className="h-96 " />
          </div>
        </div>
        <div className="w-full flex item-center justify-center">
          <button className="btn btn-lg bg-green-700 ">view gallery</button>
        </div>
      </div>
    </div>
  );
}

export default Services