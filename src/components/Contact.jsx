"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";

export default function Contact({ isDesktop }) {
  return (
    <div id="contact" className="contact">
      <h1>Contact Us</h1>
      <h4>Leave your details and we’ll get back to you shortly.</h4>
      <div className="container">
        {isDesktop && <Image src={`/aboutus.png`} alt={`about-us`} fill />}
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
