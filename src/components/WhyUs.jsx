import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

const faqs = [
  {
    question: "Why should I use Talk2Homes instead of hiring my own VA?",
    answer:
      "Hiring, training, and managing VAs takes time and resources. With Talk2Homes, you get a fully trained team, proven systems, and management included — so you can focus on deals, not supervision.",
  },
  {
    question: "Are the leads exclusive to me?",
    answer:
      "Yes. Every lead we generate for you is exclusive — we never resell or recycle leads. Your campaigns are fully yours.",
  },
  {
    question: "How do you qualify the leads?",
    answer:
      "Our VAs follow tailored scripts and proven qualification questions to confirm interest, motivation, and property details. Every call is reviewed by our Quality Assurance team to ensure accuracy and professionalism, and we provide full call recordings for each lead so you have complete transparency.",
  },
  {
    question: "Can you integrate with my CRM?",
    answer:
      "Absolutely. We work with Hubspot , GoHighLevel, Podio, Follow Up Boss and other major CRMs to ensure every lead goes directly into your system.",
  },
  {
    question: "Do you provide lists and skip tracing?",
    answer:
      "Yes. We can provide fresh, skip-traced lists — or work with your own data if you prefer.",
  },
  {
    question:
      "What makes Talk2Homes different from other cold-calling companies?",
    answer:
      "We focus on quality and relationships. Our trained VAs, dedicated account managers, area code targeting, and real-time monitoring are all designed to maximize results and ROI. But what truly sets us apart is that we also invest ourselves — we know firsthand what it takes to get from a cold call to a closed deal, and we build our process around that experience.",
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
              data-aos-delay={index * 200}
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
      setHeight(`${contentRef.current.scrollHeight + 24}px`);
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
