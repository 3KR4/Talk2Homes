import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

const faqs = [
  {
    question: "Are you buying my home or simply listing it on the MLS?",
    answer:
      "We buy your home directly. Unlike traditional agents, we don’t just list it — we provide a quick cash offer.",
  },
  {
    question: "How do I know you are giving me a fair offer for my home?",
    answer:
      "Our offers are based on real market data, the condition of your property, and comparable sales in your area.",
  },
  {
    question: "How do you figure out the offer amount?",
    answer:
      "We consider several factors: the location, the extent of repairs needed, the current condition of your property, and the value of comparable houses sold in the area recently.",
  },
  {
    question: "What other fees should I be expecting?",
    answer:
      "There are no hidden fees or commissions. The offer you receive is the amount you’ll get.",
  },
  {
    question: "What sets you apart from a traditional real estate agent?",
    answer:
      "We make the process faster, simpler, and stress-free compared to the traditional way of selling your home.",
  },
  {
    question: "Are there any obligations?",
    answer:
      "No obligations at all. You’re free to accept or reject the offer without any pressure.",
  },
];

const WhyUs = ({ isDesktop }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="whyUs" className="why-us">
      {/* العنوان */}
      <h1 data-aos="fade-up">Why choose us</h1>

      <div className="container">
        {/* الصورة */}
        {isDesktop && (
          <Image
            data-aos="fade-up-right"
            data-aos-offset="350"
            src={`/thumbnail3.jpg`}
            alt={`about-us`}
            fill
          />
        )}

        {/* الـ Accordion */}
        <div className="holder">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up-left"
              data-aos-duration="900"
              data-aos-delay={index * 150} // 👈 كل عنصر يتأخر عن اللي قبله
            >
              <AccordionItem
                faq={faq}
                isActive={activeIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ faq, isActive, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isActive) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isActive]);

  return (
    <div className={`card ${isActive ? "active" : ""}`}>
      <button className="top" onClick={onClick}>
        <span>{faq.question}</span>
        {isActive ? <FiMinus /> : <FiPlus />}
      </button>
      <div
        ref={contentRef}
        className="content"
        style={{
          maxHeight: height,
          transition: "max-height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default WhyUs;
