import React from "react";
import Image from "next/image";
import styles from "./banking.module.css";
import img1 from "../assets/images/sheikh.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

function Page() {
  return (
    <>
      <section className="mb-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  Simplify Your Banking
                  <br />
                  with Fintechify
                </h4>
                <p>
                  Fintech is changing the way we manage our money, making it
                  faster, easier, and more accessible for everyone. For example,
                  you can now:
                </p>
                <ul>
                  <li>Use your phone to pay for groceries.</li>
                  <li>Deposit checks remotely.</li>
                  <li>Get a loan decision in minutes.</li>
                  <li>Invest in stocks and bonds with just a few clicks.</li>
                </ul>
                <p>
                  Join us on a fintech journey where we co-create tailored
                  solutions, seamlessly integrating expertise to fuel your
                  growth. Let’s transform together towards shared success!
                </p>
                <button className={`${styles.LuSend2} mt-3 d-lg-block d-none`}>
                  <Link href="/contact-us"passHref>
                    <span style={{ textDecoration: "none", color: "white" }}>
                      GET STARTED <FaArrowRight />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image src={img1} alt="Fintech Image" className="img-fluid" />
              </div>
              <button className={`${styles.LuSend2} mt-3 d-lg-none d-block`}>
                <Link href="/contact-us"passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    GET STARTED <FaArrowRight />
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
