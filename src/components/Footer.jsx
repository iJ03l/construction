import React from 'react'
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer p-28 text-lg bg-base-200 text-base-content font-semibold">
      <div className="flex flex-col -mt-10">
        <img className="w-32 m-0 p-0" src={logo} alt="logo-image" />
        <p>
          LUCKY LUMACS LTD
          <br />
          Contact us for efficient energy solutions.
          <br />
          <a href="/Contact" className="link text-blue-600 font-semibold">
            info@luckylumacs.com
          </a>
        </p>
      </div>
      <div className="uppercase">
        <span className="footer-title">Explore</span>
        <a href="/About" className="link link-hover">
          Who we are
        </a>
        <a href="/Services" className="link link-hover">
          Services
        </a>
        <a className="link link-hover">
          faq<span className="lowercase">s</span>
        </a>
      </div>
      <div className="uppercase">
        <span className="footer-title">Company</span>
        <a href="/Projects" className="link link-hover">
          Projects
        </a>
        <a href="/Contact" className="link link-hover">
          Contact
        </a>
        <a className="link link-hover">Customer support</a>
      </div>
      <div className="uppercase">
        <span className="footer-title uppercase">reach out</span>
        <a className="link link-hover">PH: +1-865-984-1330</a>
        <a className="link link-hover">inquiry@global.com</a>
        <a className='font-thin text-sm font-monserrat text-green-900'> COPYRIGHT 2022. All right reserved.</a>
      </div>
    </footer>
  );
}

export default Footer