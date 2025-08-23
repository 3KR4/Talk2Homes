"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Tools from "@/components/Tools";
import AboutUs from "@/components/AboutUs";
import Counters from "@/components/Counters";
import Service from "@/components/Service";
import WhyUs from "@/components/WhyUs";
import NextTeam from "@/components/NextTeam";
import Testimonials from "@/components/Testimonials";
import LightRays from "@/components/LightRays";

import Contact from "@/components/Contact";
import Chat from "@/components/Chat";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IoChatbubblesSharp } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const landing = document.querySelector(".landing");

    const handleScroll = () => {
      const landingBottom = landing.offsetTop + landing.offsetHeight;
      if (window.scrollY > landingBottom) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1050);
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="big-holder">
        <Header />

        <LightRays
          raysOrigin="top"
          raysColor="#FF821D"
          raysSpeed={0.1}
          lightSpread={2}
          rayLength={3}
          fadeDistance={1}
          followMouse={false}
          saturation={0}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0.3}
          className="custom-rays"
        />
        <Landing />
      </div>
      <div className="back-layer">
        <Tools />
        <AboutUs isDesktop={isDesktop} />
      </div>
      <Counters />
      <Service />
      <WhyUs isDesktop={isDesktop} />
      <NextTeam />
      <Testimonials />

      <Contact isDesktop={isDesktop} />
      <Chat />
      <div className="btns-holder" data-aos="fade-left" data-aos-delay="600">
        <FaAngleDoubleUp
          className={`scroll-top ${showScroll ? "active" : ""}`}
          onClick={scrollToTop}
        />
        <IoChatbubblesSharp
          className="chat-icon"
          onClick={() => {
            document.querySelector(".chat").classList.add("active");
          }}
        />
      </div>
    </>
  );
}
