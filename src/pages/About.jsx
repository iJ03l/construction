import React, { useEffect } from "react";
import construction1 from "../assets/images/construction-image-null.jpg";
import icon1 from "../assets/images/ico1.png";
import icon2 from "../assets/images/ico3.png";
import icon3 from "../assets/images/ico2.png";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from 'framer-motion'
import { IoMdArrowDropdown } from 'react-icons/io'
import WeOffer from "../components/WeOffer";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
      Aos.init({ duration: 2000 }, []);
    });

  return (
    <div className="overflow-x-hidden">
      <div className="grid w-full grid-cols-12 h-full mb-10 overflow-x-hidden " >
        <div className="col-span-12 w-full h-96 " id="image-set">
          <motion.h1
            className="flex text-white font-monserrat md:text-5xl uppercase font-semibold md:items-center items-center md:justify-center md:mt-0 mt-12 h-full w-full text-center flex-col"
            data-aos="slide-in"
          >
            <span className="text-3xl">Here's{""}</span>
            <span>who we are</span>
            <IoMdArrowDropdown className="text-2xl text-warning" />
          </motion.h1>
          <div></div>
        </div>
        <div className="col-span-12 md:-mt-[7%] -mt-[30%] md:w-[80%] mx-auto bg-white shadow-xl">
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-6 col-span-12 md:p-20 p-6">
              <h1 className="md:text-4xl text-xl py-5 font-bold uppercase text-green-600">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgb(22 163 74)",
                    fontWeight: 700,
                    display: "block",
                  }}
                  startDelay={2000}
                  cursorColor="rgb(22 163 74)"
                  multiText={[
                    "Discover Our Story: Passion, Precision, and Perseverance in Every Project",
                  ]}
                  multiTextDelay={2000}
                  typeSpeed={60}
                />
              </h1>
              <p className="text-lg" data-aos="fade-in">
                At the forefront of the development and construction industry,
                we strive to set the pace with our unwavering commitment to
                exceptional quality, uncompromising integrity, and unparalleled
                resourcefulness. Our overarching mission is to enhance the value
                we offer to our clients by continually elevating the standards
                of our service delivery. With a relentless focus on continuous
                improvement, we are dedicated to delivering value-added services
                that meet and exceed our clients' expectations.
              </p>
            </div>
            <div
              className="md:col-span-6 col-span-12 p-6"
              data-aos="slide-left"
            >
              <img src={construction1} alt="construction image" />
            </div>
          </div>
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-3 col-span-12 p-6 md:w-[50px] md:h-80">
              {/* <img src={construction1} alt="dummy" /> */}
            </div>
            <div className="md:col-span-9 bg-gray-800 col-span-12 md:p-20 p-6">
              <h1
                className="text-6xl py-5 font-bold uppercase text-green-600"
                data-aos="zoom-in"
              >
                <span className="font-light text-warning">Vision &</span>{" "}
                mission
              </h1>
              <div className="flex md:flex-row flex-col md:gap-4 text-white">
                <div>
                  As a prominent player in Nigeria's thriving renewable energy
                  sector, we have established ourselves as a premier provider of
                  sustainable solutions since our inception in 1991. With our
                  extensive expertise, we have transformed numerous businesses,
                  SMEs, and government sites into vibrant ecosystems of
                  renewable energy through the installation of cutting-edge
                  rooftop solar panels, innovative battery storage systems, and
                  state-of-the-art solar carports. Our unwavering commitment to
                  delivering sustainable solutions has led us to collaborate
                  with some of the most prominent brands in the industry,
                  enabling us to provide our clients with unrivaled financial
                  savings and renewable energy across the length and breadth of
                  the country. With a dedicated team of seasoned professionals
                  and a passion for excellence, we are committed to forging
                  long-lasting partnerships with our clients and delivering
                  sustainable energy solutions that inspire and uplift
                  communities.
                </div>
                <div>
                  When it comes to rooftop solar panels, our unparalleled
                  expertise is second to none. While our competitors were
                  fixated on mounting rooftop solutions, we blazed a new trail
                  by spearheading the installation of groundbreaking solar
                  carports. Our unwavering commitment to providing tailored
                  solar solutions for our diverse clientele has been the driving
                  force behind our success, enabling us to maintain an
                  unwavering focus and continuously raise the bar in solar
                  installation across the nation. By leveraging our strategic
                  partnerships with leading international engineering firms and
                  technical partners, we remain at the forefront of the latest
                  innovations and technological advancements in the field. This
                  enables us to keep pace with global trends and provide our
                  clients with bespoke, cutting-edge solutions that are tailored
                  to their unique needs and requirements. With a passion for
                  excellence and a track record of delivering outstanding
                  results, we remain dedicated to setting the standards in solar
                  installation and propelling the renewable energy sector
                  forward.
                </div>
              </div>
            </div>
          </div>

          <div>
            <WeOffer />
          </div>
        </div>
      </div>

      <div className="w-full font-monserrat">
        <div className="flex flex-col items-center text-center mt-10 py-20 bg-slate-700 w-full">
          <h1
            className="uppercase text-4xl text-warning py-5 font-semibold"
            data-aos="slide-right"
          >
            KNOW more about our company
          </h1>
          <p className="text-white md:px-60" data-aos="slide-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae qui quasi vero amet neque ipsam deserunt error
            temporibus sit exercitationem, culpa accusamus dicta animi atque
            placeat tempore dolorem, obcaecati at! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nesciunt ratione voluptatem rerum
            doloremque omnis mollitia a officia fugit, libero non soluta
            placeat, corporis, nostrum ad? Architecto aliquid quo
            exercitationem, omnis ratione ipsam ea. Voluptatum expedita aliquam
            impedit repellendus quibusdam fuga neque a, tempore velit porro est
            reprehenderit architecto eveniet ad. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Praesentium quisquam modi libero,
            quaerat cupiditate accusamus magni? Ipsum facilis itaque aliquid?
            Nobis dolore modi dolorem eaque quidem. Incidunt quas error id
            nesciunt modi explicabo atque esse itaque cum aliquam expedita odio
            et cumque eaque minus consectetur maxime asperiores ipsa commodi,
            necessitatibus dicta inventore sit, quisquam est? Rem distinctio
            sapiente doloribus quisquam asperiores reiciendis magni aspernatur
            dolorem sequi, odit delectus! Natus voluptate non rem praesentium
            perspiciatis facere alias eligendi fuga ipsam accusamus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
