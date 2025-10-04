"use client";
import React, { useState, useEffect } from "react";
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
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="big-holder">
        <Header />
        <LightRays
          raysOrigin="top"
          raysColor={isMobile ? "#FF7300" : "#FF821D"}
          raysSpeed={isMobile ? 2 : 0}
          lightSpread={1}
          rayLength={isMobile ? 10 : 2}
          fadeDistance={1}
          followMouse={false}
          saturation={0}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0.2}
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

      
      <div
        className="btns-holder"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-offset="50"
      >
        <FaAngleDoubleUp
          className={`scroll-top ${showScroll ? "active" : ""}`}
          onClick={scrollToTop}
        />
        <div
          className={`chat-holder ${showScroll ? "" : "active"}`}
          onClick={() => {
            document.querySelector(".chat").classList.add("active");
          }}
        >
          <span className="chat-label">lets begin now</span>
          <IoChatbubblesSharp className="chat-icon" />
        </div>
      </div>
    </>
  );
}
