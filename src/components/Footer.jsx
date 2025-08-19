import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function () {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <Link href={`/`}>
            <Image className="logo" src={`/logo.png`} alt={``} fill />
          </Link>
          <ul>
            <h4>links</h4>

            <li>
              <Link href={``}>industries</Link>
            </li>
            <li>
              <Link href={``}>about us</Link>
            </li>
            <li>
              <Link href={``}>affiliates</Link>
            </li>
            <li>
              <Link href={``}>contact</Link>
            </li>
          </ul>
          <div className="holder">
            <ul>
              <h4>call us</h4>
              <li>
                <Link href={``}>phone: (786) 220-3280</Link>
              </li>
            </ul>
            <ul>
              <h4>email us</h4>
              <li>
                <Link href={``}>Sales@talktohomes.com</Link>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h4>newsletter</h4>
            <p>
              If you would like more information on how our consultants could
              help your business, contact us today!
            </p>
            <div className="social">
              <Link href={`/`} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Link>
              <Link href={`/`} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
              <Link href={`/`} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">
            Copyright © Talk2Homes | All Rights Reserved 2025 |{" "}
            <Link href={`/`}>Privacy Policy</Link> |{" "}
            <Link href={`/`}>Service Agreementy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
