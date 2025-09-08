"use client";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function () {
  return (
    <ul className="tools ">
      <li data-aos="zoom-in" data-aos-delay="100">
        <Image className="black" src={`/tools/1.png`} alt={`Ready Mode`} fill />
        <h4>Ready Mode</h4>
      </li>
      <li data-aos="zoom-in" data-aos-delay="250">
        <Image className="black" src={`/tools/2.png`} alt={`Dialpad`} fill />
        <h4>Dialpad</h4>
      </li>
      <li data-aos="zoom-in" data-aos-delay="450">
        <Image className="black" src={`/tools/3.png`} alt={`Resimpli`} fill />
        <h4>Resimpli</h4>
      </li>
      <li data-aos="zoom-in" data-aos-delay="650">
        <Image
          className="black"
          src={`/tools/4.png`}
          alt={`Prop Stream`}
          fill
        />
        <h4>Prop Stream</h4>
      </li>
      <li data-aos="zoom-in" data-aos-delay="850">
        <Image src={`/tools/5.png`} alt={`Go High Level`} fill />
        <h4>Go High Level</h4>
      </li>
      <li data-aos="zoom-in" data-aos-delay="1050">
        <Image className="black" src={`/tools/6.png`} alt={`Podio`} fill />
        <h4>Podio</h4>
      </li>
    </ul>
  );
}
