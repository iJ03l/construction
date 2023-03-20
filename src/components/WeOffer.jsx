import React, {useEffect} from 'react'
import badge from '../assets/images/pass.png'
import shake from '../assets/images/handshake.png'
import pin from '../assets/images/pin.png'
import tie from '../assets/images/tie.png'
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function WeOffer() {
      useEffect(() => {
        Aos.init({ duration: 2000 }, []);
      });
  return (
    <div>
      <section className="font-monserrat">
        <div className="grid md:grid-cols-12 bg-gray-50">
          <div className="col-span-12 flex flex-col gap-5 md:p-32 p-10">
            <h1
              className="uppercase md:text-5xl text-xl text-center md:text-left tracking-wider text-green-600 font-bold"
              data-aos="flip-left"
            >
              what we've stood for over{" "}
              <span className="font-normal text-warning">the years.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 gap-2 shadow-md"
                data-aos="slide-up"
              >
                <img src={badge} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  Excellence
                </h1>
                <p className="md:text-left text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  cumque recusandae suscipit ipsum dignissimos placeat quia
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md gap-2"
                data-aos="slide-up"
              >
                <img src={shake} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500  md:text-left text-center text-xl tracking-wider"
                  data-aos="flip-left"
                >
                  customer satisfaction
                </h1>
                <p className="md:text-left text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  cumque recusandae suscipit ipsum dignissimos placeat quia
                </p>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row gap-2 ">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="slide-up"
              >
                <img src={pin} alt="pin" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  quick delivery
                </h1>
                <p className="md:text-left text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  cumque recusandae suscipit ipsum dignissimos placeat quia
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="slide-up"
              >
                <img src={tie} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  time management
                </h1>
                <p className="md:text-left text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  cumque recusandae suscipit ipsum dignissimos placeat quia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeOffer