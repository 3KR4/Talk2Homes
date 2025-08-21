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
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

// التجربة: lyrics للـ track الثالث
const lyrics = [
  { time: 0, text: "You were the one, the one I believed in" },
  { time: 3, text: "Now that you’re gone, my world is breaking" },
  { time: 6, text: "Shadows are long, memories fading" },
  { time: 9, text: "People you know, they change like the seasons" },
  { time: 12, text: "But I still feel you here tonight" },
];

// الداتا بتاعت التراكات
const tracks = [
  {
    id: 1,
    title: "Call Example 1",
    file: "/audio/sample1.mp3",
    time: "00.45s",
    lyrics: [],
  },
  {
    id: 2,
    title: "Call Example 2",
    file: "/audio/sample2.mp3",
    time: "01.16s",
    lyrics: [],
  },
  {
    id: 3,
    title: "Selena Gomez - People You Know (Demo)",
    file: "/audio/sample3.mp3",
    time: "02.35s",
    lyrics: lyrics, // هنا الكلمات
  },
];

// Component بتاع كل Audio
const AudioCard = forwardRef(({ track, isActive }, ref) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [currentLine, setCurrentLine] = useState(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

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

    // sync lyrics
    if (track.lyrics && track.lyrics.length > 0) {
      wavesurfer.current.on("audioprocess", (time) => {
        // البحث عن السطر الحالي
        const currentLineObj = [...track.lyrics]
          .reverse()
          .find((l) => l.time <= time);

        if (currentLineObj && currentLineObj.text !== currentLine) {
          // البحث عن السطر التالي
          const nextLineIndex = track.lyrics.findIndex((l) => l.time > time);

          if (nextLineIndex !== -1) {
            const nextLineTime = track.lyrics[nextLineIndex].time;
            const timeUntilNextLine = nextLineTime - time;

            // إذا بقي أقل من 0.5 ثانية للسطر التالي، نبدأ في إخفاء السطر الحالي
            if (timeUntilNextLine <= 0.5 && visible) {
              setVisible(false);
            } else if (
              timeUntilNextLine > 0.5 &&
              !visible &&
              currentLineObj.text === currentLine
            ) {
              setVisible(true);
            }
          }

          // تحديث النص الحالي
          if (currentLineObj.text !== currentLine) {
            setCurrentLine(currentLineObj.text);
            setVisible(true);
          }
        }
      });
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      wavesurfer.current.destroy();
    };
  }, [track.file, track.lyrics]);

  return (
    <div className={`card ${isActive || currentLine ? "active" : ""}`}>
      <div className="audio-waves" ref={waveformRef} />
      <h5 className={`lyric-line ${visible ? "show" : ""}`}>
        {currentLine || ""}
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
    <div className="records">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={300}
          slidesPerView={1}
          loop={true}
          speed={1200}
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

        <div className="custom-nav">
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

        <div className="custom-pagination">
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
