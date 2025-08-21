"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs({ isDesktop }) {
  return (
    <div id="about" className="landing about-us">
      <div className="container">
        <div className="left">
          <span>about us</span>
          <h2>Why Our Clients Choose CallGeeks</h2>
          <p>
            At CallGeeks, we believe every missed call is a missed
            opportunity.Thats why we built a team of highly trained virtual
            assistants to help you book more calls, qualify leads, and keep your
            business running — 24/7.
          </p>
          <hr />
          <p className="last-p">
            With seamless CRM integrations and real people (not scripts), we
            give your customers the attention they deserve while you focus on
            growing your business.
          </p>
          <Link href={`/booking`} className="main-button main-color">
            learn more
          </Link>
        </div>

        {isDesktop && <Image src={`/aboutus.png`} alt={`about-us`} fill />}
      </div>
    </div>
  );
}
