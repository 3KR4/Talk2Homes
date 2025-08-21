"use client";
import Link from "next/link";

import Recordes from "@/components/Recordes";

export default function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="left">
          <h2>Never miss a lead</h2>
          <p>
            Empower your business with real virtual assistants who handle your
            calls, qualify leads, and schedule appointments — 24/7.
          </p>
          <div className="holder">
            <button className="main-button main-color">get started</button>
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
