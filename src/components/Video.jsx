"use client";
import { useState } from "react";

export default function Video() {
  const videos = [
    { title: "template 1", duration: "05:17", file: "/videos/video 1.mp4" },
    { title: "template 2", duration: "08:13", file: "/videos/video 2.mp4" },
    { title: "template 3", duration: "15:59", file: "/videos/video 3.mp4" },
    { title: "template 4", duration: "20:50", file: "/videos/video 4.mp4" },
    { title: "template 5", duration: "01:20", file: "/videos/video 5.mp4" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="videos">
      <div className="container">
        <h1>Meet the Virtual Assistant</h1>
        <div className="holder">
          <ul>
            {videos.map((video, index) => (
              <li
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {video.title} <span>{video.duration}</span>
              </li>
            ))}
          </ul>

          <video
            key={videos[activeIndex].file}
            src={videos[activeIndex].file}
            controls
          />
        </div>
      </div>
    </div>
  );
}
