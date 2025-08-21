"use client";
import CountUp from "react-countup";
import Squares from "@/components/Squares";

export default function Counters() {
  return (
    <div className="next-team">
      <Squares
        speed={0.2}
        squareSize={45}
        direction="down"
        borderColor="#382110"
        hoverFillColor="#222"
      />
      <div className="container">
        <h3>Ready to stop grinding and start scaling?</h3>
        <h4>Click below and let your virtual assistant take over.</h4>
        <button className="main-button">make your next team member</button>
      </div>
    </div>
  );
}
