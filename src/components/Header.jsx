"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

export default function () {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header>
      <div className="container">
        <Link href={`/`}>
          <Image className="logo" src={`/logo.png`} alt={``} fill />
        </Link>
        <div className={`hold ${openNav ? "active" : ""}`}>
          <nav>
            <ul>
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
