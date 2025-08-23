"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMsg("");

    try {
      const res = await emailjs.send(
        "service_6vdbojr",
        "template_xsgfqu7",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "v5g-oKR19wGPmZW7d"
      );

      if (res.status === 200) {
        reset(); // يمسح الفورم
        setSuccessMsg("Your message has been sent successfully");
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      {/* Name */}
      <div
        className="inputHolder"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="150"
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Ethan Miller"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 letters",
            },
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>

      {/* Phone */}
      <div className="inputHolder" data-aos="fade-up" data-aos-delay="350">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          placeholder="+1 (415) 678-9324"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Please enter a valid phone number",
            },
          })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      {/* Email */}
      <div className="inputHolder" data-aos="fade-up" data-aos-delay="550">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="example@mail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      {/* Message */}
      <div className="inputHolder" data-aos="fade-up" data-aos-delay="750">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          rows="4"
          cols="50"
          placeholder="Enter your message"
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </div>

      {/* Success Message */}
      {successMsg && <p className="success">{successMsg}</p>}

      {/* Submit Button */}
      <button
        className="main-button"
        type="submit"
        disabled={loading}
        data-aos="fade-up"
        data-aos-delay="750"
      >
        {loading ? (
          <span className="loader"></span>
        ) : (
          <>
            Send <IoSend />
          </>
        )}
      </button>
    </form>
  );
}
