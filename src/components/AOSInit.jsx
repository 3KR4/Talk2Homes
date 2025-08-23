"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);

  return null;
}
