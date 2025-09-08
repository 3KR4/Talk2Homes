import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import {
  transcript1,
  transcript2,
  transcript3,
  transcript4,
  transcript5,
} from "@/components/transcript";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

const tracks = [
  {
    id: 1,
    title: "Amy",
    file: "/audio/sample1.mp3",
    lyrics: transcript1,
  },
  {
    id: 2,
    title: "Jane",
    file: "/audio/sample2.mp3",
    lyrics: transcript2,
  },
  {
    id: 3,
    title: "Leah",
    file: "/audio/sample3.mp3",
    lyrics: transcript3,
  },
  {
    id: 4,
    title: "Mark ",
    file: "/audio/sample4.mp3",
    lyrics: transcript4,
  },
  {
    id: 5,
    title: "Rose",
    file: "/audio/sample5.mp3",
    lyrics: transcript5,
  },
];

const AudioCard = forwardRef(({ track, isActive }, ref) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [currentLine, setCurrentLine] = useState(null);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => wavesurfer.current?.play(),
    pause: () => wavesurfer.current?.pause(),
    isPlaying: () => wavesurfer.current?.isPlaying(),
    getCurrentTime: () => wavesurfer.current?.getCurrentTime() || 0,
  }));

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#8C8C8C",
      progressColor: "#DA711B",
      cursorColor: "#e1e1e1",
      height: 70,
      responsive: true,
    });

    wavesurfer.current.load(track.file);

    const updateLyrics = (time, force = false) => {
      if (!track.lyrics || track.lyrics.length === 0) return;

      const currentLineObj = [...track.lyrics]
        .reverse()
        .find((l) => l.time <= time);

      if (
        currentLineObj &&
        (force || currentLineObj.text !== currentLine?.text)
      ) {
        setCurrentLine({
          text: currentLineObj.text,
          speaker: currentLineObj?.speaker,
        });
        setVisible(true);
      }
    };

    wavesurfer.current.on("audioprocess", (time) => {
      updateLyrics(time);
    });

    wavesurfer.current.on("seek", (progress) => {
      const duration = wavesurfer.current.getDuration();
      const time = progress * duration;
      console.log("👉 Seek event:", time.toFixed(2));
      updateLyrics(time, true);
    });

    wavesurfer.current.on("interaction", () => {
      const time = wavesurfer.current.getCurrentTime();
      console.log("🖱️ Interaction event at:", time.toFixed(2));
      updateLyrics(time, true);
    });

    return () => {
      wavesurfer.current.destroy();
    };
  }, [track.file, track.lyrics]);

  return (
    <div className={`card ${isActive || currentLine?.text ? "active" : ""}`}>
      <h4>{track?.title}</h4>
      <div className="audio-waves" ref={waveformRef} />
      <h5 className={`lyric-line ${visible ? "show" : ""}`}>
        <strong>
          {currentLine?.speaker ? currentLine.speaker + ": " : ""}
        </strong>
        {currentLine?.text || ""}
      </h5>
    </div>
  );
});

export default function Recordes() {
  const swiperRef = useRef(null);
  const waveSurfers = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const togglePlay = () => {
    waveSurfers.current.forEach((ws, i) => {
      if (i !== activeIndex && ws?.isPlaying()) {
        ws.pause();
      }
    });

    const currentWS = waveSurfers.current[activeIndex];
    if (currentWS) {
      if (currentWS.isPlaying()) {
        currentWS.pause();
        setIsPlaying(false);
      } else {
        currentWS.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="records" data-aos="fade-up" data-aos-delay="800">
      <h3>Listen to our Real calls</h3>
      <div className="container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={300}
          slidesPerView={1}
          loop={true}
          speed={1600}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);

            const currentWS = waveSurfers.current[swiper.realIndex];
            if (currentWS && currentWS.isPlaying()) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }}
        >
          {tracks.map((track, index) => (
            <SwiperSlide key={track.id}>
              <AudioCard
                ref={(el) => (waveSurfers.current[index] = el)}
                track={track}
                isActive={isPlaying && activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-nav" data-aos="fade-up" data-aos-delay="1000">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <IoIosSkipBackward />
          </button>

          <button onClick={togglePlay} className="play">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button onClick={() => swiperRef.current?.slideNext()}>
            <IoIosSkipForward />
          </button>
        </div>

        <div
          className="custom-pagination"
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="1200"
        >
          {tracks.map((_, i) => (
            <span
              key={i}
              className={i === activeIndex ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
