"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counters() {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // % of element visible before triggering
  });

  return (
    <div className="counters" ref={ref}>
      <div className="container">
        <div className="card">
          <div className="number">
            {inView && <CountUp start={0} end={1000} duration={2.5} />}+
          </div>
          <h5>Virtual Assistants Trained</h5>
        </div>

        <div className="card">
          <div className="number">
            {inView && <CountUp start={0} end={100} duration={4} />}+
          </div>
          <h5>Businesses Supported</h5>
        </div>

        <div className="card">
          <div className="number">
            {inView && <CountUp start={0} end={24} duration={4} />}/
            {inView && <CountUp start={0} end={7} duration={4} />}
          </div>
          <h5>Real-Time Support Coverage</h5>
        </div>

        <div className="card">
          <div className="number">
            {inView && <CountUp start={0} end={98} duration={4} />}%
          </div>
          <h5>Client Satisfaction Rate</h5>
        </div>
      </div>
    </div>
  );
}
