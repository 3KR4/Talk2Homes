"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const tracks = [
  { id: 1, title: "Call Example 1", file: "/audio/sample1.mp3" },
  { id: 2, title: "Call Example 2", file: "/audio/sample2.mp3" },
  { id: 3, title: "Call Example 3", file: "/audio/sample3.mp3" },
  { id: 4, title: "Call Example 1", file: "/audio/sample1.mp3" },
  { id: 5, title: "Call Example 2", file: "/audio/sample2.mp3" },
  { id: 6, title: "Call Example 3", file: "/audio/sample3.mp3" },
  { id: 7, title: "Call Example 1", file: "/audio/sample1.mp3" },
  { id: 8, title: "Call Example 2", file: "/audio/sample2.mp3" },
  { id: 9, title: "Call Example 3", file: "/audio/sample3.mp3" },
];

function AudioCard({ track, onPlayChange }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#e1e1e1",
      progressColor: "#fe7e16",
      cursorColor: "#e1e1e1",
      height: 100,
      responsive: true,
    });

    wavesurfer.current.load(track.file);

    wavesurfer.current.on("play", () => {
      setIsPlaying(true);
      onPlayChange(true);
    });

    wavesurfer.current.on("pause", () => {
      setIsPlaying(false);
      onPlayChange(false);
    });

    return () => {
      wavesurfer.current.destroy();
    };
  }, [track.file]);

  const togglePlay = () => {
    wavesurfer.current.playPause();
  };

  return (
    <div className="card">
      <h5>{track.title}</h5>
      <div className="audio-waves" ref={waveformRef} />
      <button onClick={togglePlay} className="play">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}

export default function Landing() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [anyPlaying, setAnyPlaying] = useState(false);

  // Custom autoplay loop
  useEffect(() => {
    if (!anyPlaying) {
      const interval = setInterval(() => {
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [anyPlaying]);

  const handlePlayChange = (isPlaying) => {
    if (isPlaying) setAnyPlaying(true);
    else setAnyPlaying(false); // will re-enable autoplay
  };

  console.log(activeIndex);

  return (
    <div className="landing">
      <div className="container">
        <div className="left">
          <h2>Never miss a lead again.</h2>
          <p>
            Empower your business with real virtual assistants who handle your
            calls, qualify leads, and schedule appointments — 24/7.
          </p>
          <div className="holder">
            <button className="main-button main-color">get started</button>
            <Link href={`/`} className="main-button">
              book a call
            </Link>
          </div>
        </div>

        <div className="right">
          <h4>Listen to our LIVE Calls</h4>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1000}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {tracks.map((track) => (
              <SwiperSlide key={track.id}>
                <AudioCard track={track} onPlayChange={handlePlayChange} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Custom Navigation */}
          <div className="custom-nav">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <FaAngleLeft />
            </button>
            <div className="custom-pagination">
              {tracks.map((_, i) => (
                <span
                  key={i}
                  className={i === activeIndex ? "dot active" : "dot"}
                />
              ))}
            </div>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
