"use client";

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import Landing from "@/components/Landing";
import Tools from "@/components/Tools";
import AboutUs from "@/components/AboutUs";
import Counters from "@/components/Counters";
import Service from "@/components/Service";
import NextTeam from "@/components/NextTeam";
import Video from "@/components/Video";
import Chat from "@/components/Chat";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

  return (
    <>
      <Landing />
      <div className="back-layer">
        <Tools />
        <AboutUs />
        <Counters />
        <Service />
        <NextTeam />
        <Video />
        <Chat />
        <div className="btns-holder">
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
      </div>
    </>
  );
}
