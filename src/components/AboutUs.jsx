"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs({ isDesktop }) {
  return (
    <div id="about" className="landing about-us">
      <div className="container">
        <div className="left">
          <span data-aos="fade-right" data-aos-delay="100">
            about us
          </span>
          <h2 data-aos="fade-right" data-aos-delay="200">
            Why Our Clients Choose CallGeeks
          </h2>
          <p data-aos="fade-right" data-aos-delay="300">
            At CallGeeks, we believe every missed call is a missed
            opportunity.Thats why we built a team of highly trained virtual
            assistants to help you book more calls, qualify leads, and keep your
            business running — 24/7.
          </p>
          <hr data-aos="fade-right" data-aos-delay="400" />
          <p className="last-p" data-aos="fade-right" data-aos-delay="500">
            With seamless CRM integrations and real people (not scripts), we
            give your customers the attention they deserve while you focus on
            growing your business.
          </p>
          <Link
            href={`/booking`}
            className="main-button main-color"
            data-aos="fade-right"
            data-aos-delay="550"
          >
            learn more
          </Link>
        </div>

        {isDesktop && (
          <Image
            data-aos="fade-left"
            data-aos-delay="300"
            src={`/thumbnail1.jpg`}
            alt={`about-us`}
            fill
          />
        )}
      </div>
    </div>
  );
}
