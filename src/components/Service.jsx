"use client";
import Link from "next/link";
import Image from "next/image";

export default function Service() {
  return (
    <div id="services" className="service">
      <h1 data-aos="fade-up" >
        Our Services
      </h1>

      <div className="container">
        <div
          className="card"
          data-aos="fade-up-right"
          data-aos-delay="0"
        >
          <Image src={`/services/1.jpg`} alt={``} fill />
          <span></span>
          <div className="text">
            <h4>Cold Calling Excellence</h4>
            <p>
              We don't just make calls; we create connections. Our skilled team
              knows how to break the ice and turn cold leads into hot
              opportunities. We handle objections with finesse, build genuine
              rapport, and uncover deals others might miss.
            </p>
          </div>
        </div>

        <div
          className="card"
          data-aos="fade-up-left"
          data-aos-delay="200"
        >
          <Image src={`/services/2.jpeg`} alt={``} fill />
          <span></span>
          <div className="text">
            <h4>Strategic Lead Generation</h4>
            <p>
              Our proactive and targeted approach ensures a steady stream of
              high-quality leads. We identify motivated sellers, distressed
              properties, and off-market gems to provide you with the best
              investment opportunities.
            </p>
          </div>
        </div>

        <div
          className="card"
          data-aos="fade-up-right"
          data-aos-delay="400"
        >
          <Image src={`/services/3.jpg`} alt={``} fill />
          <span></span>
          <div className="text">
            <h4>End-to-End Deal Facilitation</h4>
            <p>
              From the first call to the final handshake, we're with you every
              step of the way. Our comprehensive support ensures seamless
              transactions, allowing you to focus on what you do best investing.
            </p>
          </div>
        </div>

        <div
          className="card"
          data-aos="fade-up-left"
          data-aos-delay="600"
        >
          <Image src={`/services/4.jpeg`} alt={``} fill />
          <span></span>
          <div className="text">
            <h4>End-to-End Deal Facilitation</h4>
            <p>
              From the first call to the final handshake, we're with you every
              step of the way. Our comprehensive support ensures seamless
              transactions, allowing you to focus on what you do best investing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
