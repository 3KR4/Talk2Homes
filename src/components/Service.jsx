"use client";
import Link from "next/link";
import Image from "next/image";

export default function Service() {
  return (
    <div id="services" className="service">
      <h1 data-aos="fade-up">Our Services</h1>
      <Image
        className="back-layer2"
        src={`/back-layer2.jpg`}
        alt={`back layer img`}
        fill
      />

      <div className="container">
        <div className="card" data-aos="fade-up-right" data-aos-delay="0">
          <Image src={`/services/1.jpg`} alt={`services img`} fill />
          <span></span>
          <div className="text">
            <h4>Cold Calling That Converts</h4>
            <p>
              We don’t just make calls — we spark conversations that lead to
              deals. Our expert callers build trust, handle objections with
              ease, and turn cold leads into motivated sellers ready to talk.
            </p>
          </div>
        </div>

        <div className="card" data-aos="fade-up-left" data-aos-delay="200">
          <Image src={`/services/2.jpeg`} alt={`services img 2`} fill />
          <span></span>
          <div className="text">
            <h4>High-Quality Lead Generation</h4>
            <p>
              Tired of chasing dead leads? Our targeted approach delivers
              motivated sellers, distressed property owners, and off-market
              opportunities straight to your pipeline — consistent, exclusive,
              and ready for you to close.
            </p>
          </div>
        </div>

        <div className="card" data-aos="fade-up-right" data-aos-delay="400">
          <Image src={`/services/3.jpg`} alt={`services img 3`} fill />
          <span></span>
          <div className="text">
            <h4>Full Pipeline Management</h4>
            <p>
              From the first ring to the booked appointment, we take care of the
              entire process. Every call is logged, every lead is qualified, and
              every opportunity is delivered directly to your CRM.
            </p>
          </div>
        </div>

        <div className="card" data-aos="fade-up-left" data-aos-delay="600">
          <Image src={`/services/4.jpeg`} alt={`services img 4`} fill />
          <span></span>
          <div className="text">
            <h4>Closing Support That Delivers</h4>
            <p>
              We go beyond introductions. Our team ensures follow-ups, smooth
              handoffs, and reliable communication, so no opportunity slips
              through the cracks — letting you focus on doing what you do
              best: closing deals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
