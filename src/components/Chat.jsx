"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

export default function ChatForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="inputHolder">
            <input
              type="text"
              placeholder=" your name"
              {...register("name", {
                required: "name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 letters",
                },
              })}
            />
          </div>
          {errors.name && <span className="error">{errors.name.message}</span>}
          {/* Email */}
          <div className="inputHolder">
            <input
              type="email"
              placeholder=" your e-mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          {/* Message */}
          <div className="inputHolder">
            <textarea
              rows="4"
              cols="50"
              placeholder=" your Message"
              {...register("message", {
                required: "Message is required",
              })}
            />
          </div>
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
          {/* Submit Button */}
          <button className="main-button" type="submit">
            Send <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
}
