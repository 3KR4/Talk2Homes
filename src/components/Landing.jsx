"use client";
import Link from "next/link";
import Recordes from "@/components/Recordes";

export default function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="left">
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease-out"
          >
            Never miss a lead
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-out"
          >
            Empower your business with real virtual assistants who handle your
            calls, qualify leads, and schedule appointments — 24/7.
          </p>

          <div
            className="holder"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-easing="ease-out"
          >
            <Link href={`#contact`} className="main-button main-color button">
              get started
            </Link>
            <Link href={`/booking`} className="main-button">
              book a call
            </Link>
          </div>
        </div>

          <Recordes />
      </div>
    </div>
  );
}
