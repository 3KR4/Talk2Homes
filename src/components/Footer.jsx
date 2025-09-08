import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function () {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <Link href={`/`} data-aos="fade-up" data-aos-delay="0">
            <Image className="logo" src={`/logo.png`} alt={`logo`} fill />
          </Link>

          <ul data-aos="fade-up" data-aos-delay="200">
            <h4>Sections</h4>
            <li>
              <Link href={`/#about`}>about us</Link>
            </li>
            <li>
              <Link href={`/#services`}>services</Link>
            </li>
            <li>
              <Link href={`/#whyUs`}>why Us</Link>
            </li>
            <li>
              <Link href={`/#testimonials`}>testimonials</Link>
            </li>
            <li>
              <Link href={`/#contact`}>contact</Link>
            </li>
          </ul>

          <div className="holder" data-aos="fade-up" data-aos-delay="400">
            <ul>
              <h4>call us</h4>
              <li>
                <Link href={`/`}>phone: (786) 220-3280</Link>
              </li>
            </ul>
            <ul>
              <h4>email us</h4>
              <li>
                <a href="mailto:Sales@talktohomes.com">Sales@talktohomes.com</a>
              </li>
            </ul>
          </div>

          <div className="newsletter" data-aos="fade-up" data-aos-delay="600">
            <h4>Social</h4>
            <div className="social">
              <a
                className="face"
                href="https://www.facebook.com/profile.php?id=61559914903423"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                className="linked"
                href="https://www.linkedin.com/in/muhammad-fathi-a60942234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                className="whatsapp"
                href="https://wa.me/17862203280"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div
          className="bottom"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-offset="0"
        >
          <div className="copyright">
            Copyright © Talk2Homes | All Rights Reserved 2025 |{" "}
            <Link href={`/privacy`}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
