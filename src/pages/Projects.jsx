import React from 'react'
import image1 from "../assets/gallery/project-image -1.jpg";
import image2 from "../assets/gallery/project-image -2.jpg";
import image3 from "../assets/gallery/project-image -3.jpg";
import image4 from "../assets/gallery/project-image -4.jpg";
import image5 from "../assets/gallery/project-image -5.jpg";
import image6 from "../assets/gallery/project-image -6.jpg";
import image7 from "../assets/gallery/project-image -7.jpg";
import image8 from "../assets/gallery/project-image -8.jpg";
import image9 from "../assets/gallery/project-image -9.jpg";
import image10 from "../assets/gallery/project-image -10.jpg";
import image11 from "../assets/gallery/project-image -11.jpg";
import image12 from "../assets/gallery/project-image -12.jpg";
import image13 from "../assets/gallery/project-image -13.jpg";
import image14 from "../assets/gallery/project-image -14.jpg";
import image15 from "../assets/gallery/project-image -15.jpg";
import image16 from "../assets/gallery/project-image -16.jpg";
import image17 from "../assets/gallery/project-image -17.jpg";
import image18 from "../assets/gallery/project-image -18.jpg";
import image19 from "../assets/gallery/project-image -19.jpg";
import image20 from "../assets/gallery/project-image -20.jpg";
import image21 from "../assets/gallery/project-image -21.jpg";
import image22 from "../assets/gallery/project-image -22.jpg";
import image23 from "../assets/gallery/project-image -23.jpg";
import image24 from "../assets/gallery/project-image -24.jpg";
import image25 from "../assets/gallery/project-image -25.jpg";
import image26 from "../assets/gallery/project-image -26.jpg";
import image27 from "../assets/gallery/project-image -27.jpg";


function Projects() {
  return (
    <div className="mt-36 ">
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
                  <li> Federal University of Petroleum Resources Effurun</li>
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
      <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
        <img src={image2} alt="project-image-1" />
        <img src={image3} alt="project-image-1" />
        <img src={image4} alt="project-image-1" />
        <img src={image5} alt="project-image-1" />
        <img src={image6} alt="project-image-1" />
        <img src={image7} alt="project-image-1" />
        <img src={image8} alt="project-image-1" />
        <img src={image9} alt="project-image-1" />
        <img src={image10} alt="project-image-1" />
        <img src={image11} alt="project-image-1" />
        <img src={image12} alt="project-image-1" />
        <img src={image13} alt="project-image-1" />
        <img src={image14} alt="project-image-1" />
        <img src={image15} alt="project-image-1" />
        <img src={image16} alt="project-image-1" />
        <img src={image17} alt="project-image-1" />
        <img src={image18} alt="project-image-1" />
        <img src={image19} alt="project-image-1" />
        <img src={image20} alt="project-image-1" />
        <img src={image21} alt="project-image-1" />
        <img src={image22} alt="project-image-1" />
        <img src={image23} alt="project-image-1" />
        <img src={image24} alt="project-image-1" />
        <img src={image25} alt="project-image-1" />
        <img src={image26} alt="project-image-1" />
        <img src={image27} alt="project-image-1" />
      </div>
    </div>
  );
}

export default Projects