import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
          <div>
            <p className="font-bold text-xl">Ilham Arip</p>
            <p>Software Engineer</p>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
          </div> 
          <div>
            <div className="grid grid-flow-col gap-4">
              {[
                { icon: <FaTwitter size={24} />, url: "#" },
                { icon: <FaGithub size={24} />, url: "#" },
                { icon: <FaLinkedin size={24} />, url: "#" },
              ].map((social, index) => (
                <a key={index} href={social.url} className="transition-transform hover:scale-125">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      );
}

export default Footer
