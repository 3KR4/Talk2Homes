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
            Why Choose Talk2Homes
          </h2>
          <p data-aos="fade-right" data-aos-delay="300">
            At Talk2Homes, we know that success in real estate comes down to
            consistent conversations with the right homeowners. That’s why our
            team of trained virtual assistants works around the clock to qualify
            leads, set appointments, and keep your pipeline moving. We deliver
            exclusive, high-quality leads — NEVER SHARED— so you can focus on
            closing deals instead of chasing calls.
          </p>
          <hr data-aos="fade-right" data-aos-delay="400" />
          <p className="last-p" data-aos="fade-right" data-aos-delay="500">
            With seamless CRM integration and real people who know how to
            connect with sellers, we make sure every opportunity counts.
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
