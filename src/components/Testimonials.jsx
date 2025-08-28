import React from "react";
const clients = [
  {
    name: "Aiden Kirchmair",
    jop: "Marketing Agency",
    paragraph:
      "In just the first 30 days of using No Accent Callers, Aiden boosted his monthly revenue by an extra $20,000. His quick success highlights the sheer power of effective, accent-neutral communication in marketing.",
    file: "/testimonials/1.mp4",
  },
  {
    name: "Sophia Martinez",
    jop: "E-commerce Store Owner",
    paragraph:
      "Sophia saw her abandoned cart recovery rate increase by 35% after implementing No Accent Callers. Customers felt more confident and connected during follow-up calls, leading directly to higher conversions.",
    file: "/testimonials/2.mp4",
  },
  {
    name: "James O’Connor",
    jop: "Real Estate Agent",
    paragraph:
      "James closed 5 extra property deals in just two months. Clear, professional communication over the phone made his international clients feel at ease and built instant trust.",
    file: "/testimonials/3.mp4",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h1 data-aos="fade-up">testimonials</h1>

      <div className="container">
        {clients?.map((x, index) => (
          <div
            key={index}
            className="card"
            data-aos={
              index === 0
                ? "fade-up-right"
                : index === 1
                ? "fade-up"
                : "fade-up-left"
            }
            data-aos-duration="900"
          >
            <video src={x.file} controls />
            <div className="text">
              <h4>{x.name}</h4>
              <h5>{x.jop}</h5>
              <p>{x.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="container video-holder"
        data-aos="zoom-in"
        data-aos-duration="1300"
      >
        <video src={`/clip.mkv`} controls />
      </div>
    </div>
  );
}
