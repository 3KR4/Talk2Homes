"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";

export default function Contact({ isDesktop }) {
  return (
    <div id="contact" className="contact">
      <h1 data-aos="fade-up">Contact Us</h1>
      <h4 data-aos="fade-up" data-aos-delay="100">
        Leave your details and we’ll get back to you shortly.
      </h4>

      <div className="container">
        <div data-aos="fade-up" data-aos-delay="200">
          <Form />
        </div>
      </div>
    </div>
  );
}
