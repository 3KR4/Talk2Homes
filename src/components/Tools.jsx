"use client";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function () {
  return (
    <ul className="tools container">
      <li>
        <Image src={`/tools/1.png`} alt={`tool-1`} fill />
      </li>
      <li>
        <Image src={`/tools/2.png`} alt={`tool-2`} fill />
      </li>
      <li>
        <Image src={`/tools/3.png`} alt={`tool-3`} fill />
      </li>
      <li>
        <Image src={`/tools/4.png`} alt={`tool-4`} fill />
      </li>
      <li>
        <Image src={`/tools/5.png`} alt={`tool-5`} fill />
      </li>
    </ul>
  );
}
