import Header from "@/components/Header";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
  return (
    <>
      <Header />

      <div className={`success-page container`}>
        <div className="card" data-aos="fade-up" data-aos-delay="0">
          <FaCheckCircle data-aos="fade-up" data-aos-delay="70" />
          <h3 data-aos="fade-up" data-aos-delay="200">
            our form has been submitted successfully!
          </h3>
          <p data-aos="fade-up" data-aos-delay="350">
            Thank you for reaching out. Our team will contact you shortly.
          </p>
          <Link data-aos="fade-up" data-aos-delay="500" href={`/`}>
            back to home
          </Link>
        </div>
      </div>
    </>
  );
}
