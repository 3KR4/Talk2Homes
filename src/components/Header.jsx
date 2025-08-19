"use client";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function () {
  useEffect(() => {
    const header = document.querySelector("header");
    const landing = document.querySelector(".landing");

    const handleScroll = () => {
      const landingBottom = landing.offsetTop + landing.offsetHeight;
      if (window.scrollY > landingBottom) {
        header.classList.add("scroll");
        landing.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
        landing.classList.remove("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <Link href={`/`}>
          <Image className="logo" src={`/logo.png`} alt={``} fill />
        </Link>
        <div className="hold">
          <nav>
            <ul>
              <li>
                <Link href={`#about`}>about us</Link>
              </li>
              <li>
                <Link href={`#services`}>services</Link>
              </li>

              <li>
                <Link href={`#contact`}>contact</Link>
              </li>
            </ul>
          </nav>
          <Link href={`/booking`} className={`main-button main-color`}>
            book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
