import React from "react";
import construction1 from "../assets/images/construction-image-null.jpg";
import icon1 from "../assets/images/ico1.png";
import icon2 from "../assets/images/ico3.png";
import icon3 from "../assets/images/ico2.png";
import TypeWriterEffect from "react-typewriter-effect";

function About() {
  return (
    <div>
      <div className="grid w-full grid-cols-12 h-full mb-10 ">
        <div className="col-span-12 w-full h-96 " id="image-set">
          <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
            <span className="text-3xl">Here's{""}</span>
            <span>who we are</span>
          </h1>
        </div>
        <div className="col-span-12 -mt-[7%] w-[80%] mx-auto bg-white shadow-xl">
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-6 col-span-12 md:p-20 p-6">
              <h1 className="text-4xl py-5 font-bold uppercase text-green-600">
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
              <p className="text-2xl">
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
            <div className="md:col-span-6 col-span-12 p-6">
              <img src={construction1} alt="construction image" />
            </div>
          </div>
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-3 col-span-12 p-6 md:w-[50px] md:h-80">
              {/* <img src={construction1} alt="dummy" /> */}
            </div>
            <div className="md:col-span-9 bg-gray-800 col-span-12 md:p-20 p-6">
              <h1 className="text-6xl py-5 font-bold uppercase text-green-600">
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

          <div className="grid grid-cols-12 justify-center flex-1 items-center -mt-20 ">
            <div className="col-span-12 font-monserrat my-10">
              <h1
                className="w-full flex h-96 gap-2 items-center
               justify-center font-bold uppercase md:text-5xl text-xl text-green-800"
              >
                <span>Here's what </span>
                <span className="font-medium md:font-thin w-50 text-warning">
                  we stand for
                </span>
              </h1>
              <div className="flex md:flex-row flex-col -mt-20 flex-wrap items-center self-start justify-center gap-8">
                <div className="flex flex-col text-center w-80 gap-3 items-center self-start justify-center">
                  <img src={icon1} className="w-28" alt="dummy" />
                  <h1 className="text-3xl font-bold text-green-700">
                    ACCOUNTABILITY
                  </h1>
                  <p className="text-xl">
                    Assuming responsibility for our actions and decisions is at
                    the core of our company's values and ethos. We believe that
                    our every decision and action has a consequential impact on
                    our clients, team members, and the broader community. As
                    such, we approach each project with a profound sense of care
                    and diligence, fully acknowledging that we are accountable
                    for the outcomes of our actions.
                  </p>
                </div>

                <div className="flex flex-col text-center w-80 gap-3 items-center self-start justify-center">
                  <img src={icon3} className="w-28" alt="dummy" />
                  <h1 className="text-3xl font-bold text-green-700">
                    EXCELLENCE
                  </h1>
                  <p className="text-xl">
                    we hold ourselves to the highest standards of excellence and
                    professionalism in all aspects of our work. We understand
                    that our clients entrust us with their most valuable assets,
                    and we take this responsibility very seriously. As such, we
                    approach every project with an unwavering commitment to
                    quality, precision, and attention to detail.
                  </p>
                </div>

                <div className="flex flex-col text-center w-80  gap-3 items-center self-start justify-center">
                  <img src={icon2} className="w-28 text-3xl " alt="dummy" />
                  <h1 className="text-3xl font-bold text-green-700">RESPECT</h1>
                  <p className="text-xl">
                    Respect is a cornerstone of our company culture, and we hold
                    it in high regard in all our interactions with fellow
                    employees, clients, contractors, and suppliers. We believe
                    that by treating everyone with dignity and respect, we can
                    foster an environment of inclusivity, trust, and
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
