import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { Link } from "react-router";

const importantLinks = [
 { name: "Home" },
  { name: "About" },
  { name: "Services" },
  { name: "Login" },
];
const links = [
  { name: "Privacy Policy" },
  { name: "Services" },
  { name: "About us" },
];

const Footers = () => {
  return (
    <div className="text-white bg-gradient-to-r from-violet-900 to-violet-800 w-full">
      <div className="container mx-auto p-4">
        {/* Footer Content Section */}
        <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3">
          {/* Left Section */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-2xl sm:text-3xl">
              <a href="/#home" className="uppercase">
                Charity
                <span className="inline-block font-bold text-primary">
                  <span>For </span> Animals
                </span>
              </a>
            </h1>
            <p className="text-justify text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas doloribus minima odit mollitia minus deserunt qui, explicabo
              necessitatibus, amet dolore corrupti laborum ea perspiciatis
              doloremque adipisci tempora, molestias libero.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Greater Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 8923500783</p>
            </div>
          </div>

          {/* Center Section */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* Important Links */}
            <div className="px-4 py-8">
              <h1 className="text-xl font-bold">Term</h1>
              <ul className="flex flex-col gap-3 mt-4">
                <FooterLinks Links={importantLinks} />
              </ul>
            </div>

            {/* Other Links */}
            <div className="px-4 py-8">
              <h1 className="text-xl font-bold">Links</h1>
              <ul className="flex flex-col gap-3 mt-4">
               <FooterLinks Links={links} />
              </ul>
            </div>

            {/* Social Links */}
            <div className="px-4 py-8">
              <h1 className="text-xl font-bold mb-4">Social Links</h1>
              <div className="flex flex-col gap-3">
                <a href="https://www.facebook.com/" className="flex items-center gap-2">
                  <FaFacebook className="text-2xl md:text-3xl" />
                  Facebook
                </a>
                <a href="https://www.instagram.com/#" className="flex items-center gap-2">
                  <FaInstagram className="text-2xl md:text-3xl" />
                  Instagram
                </a>
                <a href="https://www.linkedin.com/" className="flex items-center gap-2">
                  <FaLinkedin className="text-2xl md:text-3xl" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="px-4 py-8 flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224408.21865806595!2d77.35118478539344!3d28.498260405148766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1732983992319!5m2!1sen!2sin"
              className="w-full max-w-lg h-64 sm:h-80 md:h-96"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="border-t border-gray-500/10 py-6 text-center">
          <p>Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footers;


