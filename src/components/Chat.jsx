"use client";
import React, { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

import Form from "@/components/Form";

export default function ChatForm() {
  const chatRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        chatRef.current.classList.remove("active");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`chat`} ref={chatRef}>
      <div className="top">
        <Image src={`/small-logo.png`} alt="Logo" fill />
        <span>how we can help you?</span>
        <FaAngleDown
          onClick={() => {
            chatRef.current.classList.remove("active");
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
