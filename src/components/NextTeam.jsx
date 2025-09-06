"use client";
import CountUp from "react-countup";
import Squares from "@/components/Squares";
import Link from "next/link";

export default function Counters() {
  return (
    <div className="next-team" data-aos="fade-up" data-aos-delay="0">
      <Squares
        speed={0.2}
        squareSize={45}
        direction="down"
        borderColor="#382110"
        hoverFillColor="#222"
      />
      <div className="container">
        <h3 data-aos="fade-up" data-aos-delay="200">
          Done worrying about callers? It’s time to focus on closing.
        </h3>
        <h4 data-aos="fade-up" data-aos-delay="400">
          Our trained VAs keep your pipeline full while you focus on what
          matters most — DEALS.
        </h4>
        <Link
          href={`#contact`}
          className="main-button"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Start Closing More Deals
        </Link>
      </div>
    </div>
  );
}
