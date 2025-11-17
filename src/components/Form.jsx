"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Form({ formId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

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
        reset();
        window.location.href = "/success";
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Something went wrong! Please try again later, or reach out to us at our email"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="inputHolder">
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

      <div className="inputHolder">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          placeholder="+1 (415) 678-9324"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^\+?\(?\d{1,4}\)?[-\s]?\d{6,14}$/,
              message: "Please enter a valid phone number",
            },
          })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>

      <div className="inputHolder">
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

      <div className="inputHolder">
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

      <div className="checkbox-wrapper-4">
        <input
          className="inp-cbx"
          id={`${formId}-consent`}
          type="checkbox"
          {...register("consent", {
            required: "You must agree before submitting",
          })}
        />

        <label className="cbx" htmlFor={`${formId}-consent`}>
          <span>
            <svg width="12px" height="10px">
              <use xlinkHref="#check-4"></use>
            </svg>
          </span>
          <span>
            I agree to receive text and email messages about my inquiry. I can
            opt out anytime.
          </span>
        </label>

        <svg className="inline-svg">
          <symbol id="check-4" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </symbol>
        </svg>

        {errors.consent && (
          <span
            className="error"
            style={{ color: "#ff4d4d", fontSize: "13px" }}
          >
            {errors.consent.message}
          </span>
        )}
      </div>

      <button className="main-button" type="submit" disabled={loading}>
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
