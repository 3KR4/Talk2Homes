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

// مثال: لازم يكون عندك transcript متعرف فوق أو تجيبه من API
const transcript = [
  { time: 0, speaker: "Owner", text: "Hello?" },
  { time: 4, speaker: "Amy", text: "Hi, am I speaking to Ian?" },
  { time: 6, speaker: "Owner", text: "Yes, how can I help you?" },
  {
    time: 8,
    speaker: "Amy",
    text: "Hi, Ian. This is Amy. I was calling, recording the Property when it 1435 Burlingen. Wanted to see if you were interested in selling.",
  },
  { time: 18, speaker: "Owner", text: "No, I'm not." },
  {
    time: 20,
    speaker: "Amy",
    text: "And do you have any other properties you consider selling?",
  },
  { time: 25, speaker: "Owner", text: "Maybe." },
  { time: 28, speaker: "Amy", text: "Which state?" },
  { time: 31, speaker: "Owner", text: "Maybe one other." },
  { time: 36, speaker: "Amy", text: "It's in Michigan as well?" },
  { time: 39, speaker: "Owner", text: "Yes." },
  {
    time: 40,
    speaker: "Amy",
    text: "Okay, what's the address? Sorry, what did you say? I didn't catch that.",
  },
  { time: 47, speaker: "Owner", text: "Where are you located?" },
  { time: 49, speaker: "Amy", text: "Oh, we're in Michigan." },
  {
    time: 51,
    speaker: "Owner",
    text: "Okay, a second. 4890 Loadwick. That's around the corner from Gross Point.",
  },
  {
    time: 69,
    speaker: "Amy",
    text: "Oh. Can you spell the street for me? The street name?",
  },
  { time: 72, speaker: "Owner", text: "L, O, A, D, W, I, C." },
  {
    time: 76,
    speaker: "Amy",
    text: "K. I get it. Waldrick Street. Indeed. Try it. Zip code 48224, correct?",
  },
  { time: 82, speaker: "Owner", text: "That's correct." },
  {
    time: 84,
    speaker: "Amy",
    text: "And do you have a price in mind for this one?",
  },
  { time: 86, speaker: "Owner", text: "No." },
  {
    time: 88,
    speaker: "Amy",
    text: "Okay. Does it need any repairs or any updates?",
  },
  {
    time: 93,
    speaker: "Owner",
    text: "I mean, it's rented, so I'm pretty sure. More than likely, yeah.",
  },
  {
    time: 99,
    speaker: "Amy",
    text: "Okay. Is it rented month to month or annual?",
  },
  { time: 102, speaker: "Owner", text: "Month to month." },
  { time: 105, speaker: "Amy", text: "Okay. And how old is the roof?" },
  {
    time: 110,
    speaker: "Owner",
    text: "I want to think it's about eight years old.",
  },
  { time: 114, speaker: "Amy", text: "And what about the H vac?" },
  { time: 117, speaker: "Owner", text: "It has regular H vac." },
  {
    time: 122,
    speaker: "Amy",
    text: "Okay. And it's two bedrooms, one bathroom and 1,000 square feet, correct?",
  },
  { time: 127, speaker: "Owner", text: "Correct." },
  {
    time: 128,
    speaker: "Amy",
    text: "All right. You said it's rented at the moment, so why are you thinking about selling?",
  },
  { time: 135, speaker: "Owner", text: "Yeah, I would consider." },
  {
    time: 140,
    speaker: "Amy",
    text: "Yeah, I was asking why are you considering selling this one, seeing that it's rented at the moment?",
  },
  { time: 145, speaker: "Owner", text: "Because I live in New York." },
  {
    time: 147,
    speaker: "Amy",
    text: "Oh. Yeah, that's why. Okay. And if we came to an agreement, how much time would you need to close?",
  },
  {
    time: 156,
    speaker: "Owner",
    text: "I don't think I would need a whole lot of time.",
  },
  { time: 159, speaker: "Amy", text: "So we can do it as soon as possible?" },
  { time: 162, speaker: "Owner", text: "Yeah." },
  {
    time: 163,
    speaker: "Amy",
    text: "All right. And the properties off market, correct?",
  },
  { time: 166, speaker: "Owner", text: "It's off market. Yes, it is." },
  {
    time: 168,
    speaker: "Amy",
    text: "Okay, let me just confirm with you. The name is Ian Chapman and the address is the one at 4890 Lawdwick's. P&D for it. The code, 48224. Do you have an email that I can contact you on?",
  },
  { time: 179, speaker: "Owner", text: "Not right now." },
  {
    time: 181,
    speaker: "Amy",
    text: "All right, got it. While I got all the info from you here, we're going to run the numbers and give you a call back. Thank you so much for your time.",
  },
  { time: 187, speaker: "Owner", text: "Have a good one. Bye. Bye." },
];

const tracks = [
  {
    id: 1,
    title: "Call Example 1",
    file: "/audio/sample1.mp3",
    time: "00.45s",
    lyrics: transcript,
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
    lyrics: [],
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

  const updateLyrics = (time) => {
    if (!track.lyrics || track.lyrics.length === 0) return;

    const currentLineObj = [...track.lyrics]
      .reverse()
      .find((l) => l.time <= time);

    console.log("⏱ Current Time:", time.toFixed(2));
    console.log("🎤 Current Line Found:", currentLineObj);

    if (currentLineObj && currentLineObj.text !== currentLine?.text) {
      setCurrentLine({
        text: currentLineObj.text,
        speaker: currentLineObj?.speaker,
      });
      setVisible(true);
    }
  };

  // While playing
  wavesurfer.current.on("audioprocess", (time) => {
    updateLyrics(time);
  });

  // When seeking (timeline drag/drop)
  wavesurfer.current.on("seek", (progress) => {
    const duration = wavesurfer.current.getDuration();
    const time = progress * duration;
    console.log("👉 Seeked to:", time.toFixed(2));
    updateLyrics(time);
  });

  return () => {
    wavesurfer.current.destroy();
  };
}, [track.file, track.lyrics]);

  return (
    <div className={`card ${isActive || currentLine?.text ? "active" : ""}`}>
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
