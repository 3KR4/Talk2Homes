"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Squares from "@/components/Squares";

export default function Counters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="counters" ref={ref} data-aos="fade-up" data-aos-delay="0">
      <Squares
        speed={0.2}
        squareSize={45}
        direction="diagonal"
        borderColor="#472810"
        hoverFillColor="#222"
      />

        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <div className="number">
            {inView && <CountUp start={0} end={300} duration={3} />}+
          </div>
          <h5>Virtual Assistants Trained</h5>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <div className="number">
            {inView && <CountUp start={0} end={50} duration={4} />}+
          </div>
          <h5> Active Investors & Businesses Supported</h5>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="600">
          <div className="number">
            {inView && <CountUp start={0} end={15} duration={4} />}+
          </div>
          <h5>Dedicated Calling Teams</h5>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="800">
          <div className="number">
            {inView && <CountUp start={0} end={24} duration={4} />}/
            {inView && <CountUp start={0} end={7} duration={4} />}
          </div>
          <h5>Coverage Across All Time Zones</h5>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="1000">
          <div className="number">
            {inView && <CountUp start={0} end={95} duration={4} />}%
          </div>
          <h5>Client Retention Rate</h5>
        </div>
    </div>
  );
}
