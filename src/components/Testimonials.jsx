"use client";
import React, { useState, useRef } from "react";


const clients = [
  {
    name: "Chris L.",
    jop: "Real Estate Investor & Mentor",
    paragraph:
      "After 14 months of working with Talk2Homes, Chris  completely transformed the way he runs his business. By switching to our  pay-per-lead model, he no longer wastes time managing or hiring cold callers—he just focuses on closing deals.",
    file: "/testimonials/1.mp4",
  },
  {
    name: "Alex D.",
    jop: "Real Estate Investor ",
    paragraph:
      "After six months of working with Talk2Homes, Alex has been impressed by how much smoother his business runs. He points to the team’s excellent communication, their ability to maximize every lead, and the seamless support through their CRM. The experience has given him confidence in his process, and Alex says he would highly recommend Talk2Homes to anyone looking to grow their business.",
    file: "/testimonials/2.mp4",
  },
  {
    name: "Monique H.",
    jop: "Real Estate Investor ",
    paragraph:
      "Monique has trusted the Talk2Homes team to help make her deals happen. By calling sellers on her behalf and always doing good business, we’ve been able to support her growth and success",
    file: "/testimonials/3.mp4",
  },
];

export default function Testimonials() {

  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div id="testimonials" className="testimonials">
      <h1 data-aos="fade-up">testimonials</h1>

      <div className="container">
        {clients.map((x, index) => (
          <div
            key={index}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={x.file}
              controls

            />
            <div className="text">
              <h4>{x.name}</h4>
              <h5>{x.jop}</h5>
              <p>
                {expanded.includes(index)
                  ? x.paragraph
                  : x.paragraph.split(" ").slice(0, 32).join(" ") +
                    (x.paragraph.split(" ").length > 32 ? "..." : "")}{" "}
                {x.paragraph.split(" ").length > 32 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="see-more-btn"
                  >
                    {expanded.includes(index) ? "See less" : "See more"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="container video-holder"
        data-aos="zoom-in"
        data-aos-duration="1300"
      >
        <div className="top">
          <h4>Joesph Griffin</h4>
          <span>-</span>
          <h5>Tax Deed Wolf Academy CEO</h5>
        </div>
        <video src={`/clip.mkv`} controls />
      </div>
    </div>
  );
}
