"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header data-aos="fade-down" data-aos-delay="500">
      <div className="container">
        <Link href={`/`}>
          <Image className="logo" src={`/logo.png`} alt={`logo`} fill />
        </Link>

        <div className={`hold ${openNav ? "active" : ""}`}>
          <nav>
            <ul>
              <li data-aos="fade-down" data-aos-delay="600">
                <Link href={`/#about`}>about us</Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="800">
                <Link href={`/#services`}>services</Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="1000">
                <Link href={`/#whyUs`}>why Us</Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="1200">
                <Link href={`/#testimonials`}>testimonials</Link>
              </li>
              <li data-aos="fade-down" data-aos-delay="1400">
                <Link href={`/#contact`}>contact</Link>
              </li>
            </ul>
          </nav>

          <Link href={`/booking`} className={`main-button main-color`}>
            book a call
          </Link>
        </div>

        <FaBars className="bars" onClick={() => setOpenNav((prev) => !prev)} />
      </div>
    </header>
  );
}
