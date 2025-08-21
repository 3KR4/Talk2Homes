"use client";

import { useEffect } from "react";
import Header from "@/components/Header";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header />
      <div className="booking">
        <h1>Booking</h1>
        <h3>
          Ready to generate high-quality leads and unlock new investment
          opportunities?
        </h3>
        <div className="container">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/johnedwards-talktohomes/30min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </div>
    </>
  );
}
