"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

import Form from "@/components/Form";

export default function ChatForm() {
  return (
    <div className={`chat `}>
      <div className="top">
        <Image src={`/small-logo.png`} alt="Logo" fill />
        <span>how we can help you?</span>
        <FaAngleDown
          onClick={() => {
            document.querySelector(".chat").classList.remove("active");
          }}
        />
      </div>

      <div className="holder">
        <p>fill up your data and we will call you back</p>

        <Form />
      </div>
    </div>
  );
}
