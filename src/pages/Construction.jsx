import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Construction() {

    
  useEffect(() => {
    Aos.init({ duration: 2000 }, []);
  });

  return (
    <div className="overflow-x-hidden">
      <div
        className="grid grid-cols-12 w-full pt-10 md:h-[50vh] h-[50vh]"
        id="construction-wrapper"
      >
        <div className="col-span-12">
          <div className="flex flex-col h-full px-5 gap-3">
            <h1
              className="font-monserrat md:text-5xl text-xl font-bold text-green-500 mt-auto"
              data-aos="slide-left"
            >
              Your partner for successful <br />
              <span className="text-white font-normal">
                Civil Engineering and Construction projects.
              </span>
              <br />
              <div
                className="w-32 h-3 my-2 bg-warning"
                data-aos="slide-up"
              ></div>
            </h1>
            <p className="md:w-[50vw] font-monserrat text-sm md:text-xl font-normal text-white md:block mb-10"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Construction