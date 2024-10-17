import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/currencyexchangeimg.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"Currency exchange platform development"}
        tagLine={false}
        tagLine2={"The future of currency exchange is here."}
        Des={false}
      />
      <section className="d-lg-block d-none mb-5 mt-5">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>Optimize Your Currency Exchange Strategies</h4>

                <p>
                  At Fintechify, we’re passionate about building currency
                  exchange platforms that are easy to use, grow with your
                  business, and offer powerful features for a smooth exchange
                  experience. With years in fintech development, we know the ins
                  and outs of currency exchange and are dedicated to creating
                  solutions that go above and beyond.
                </p>
              </div>
              <button className={styles.LuSend2}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    JOIN NOW <FaArrowRight />
                  </span>
                </Link>
              </button>
            </div>
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image className="img-fluid" src={img} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-lg-none d-block mb-5 mt-5">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image className="img-fluid" src={img} />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>Optimize Your Currency Exchange Strategies</h4>

                <p>
                  At Fintechify, we’re passionate about building currency
                  exchange platforms that are easy to use, grow with your
                  business, and offer powerful features for a smooth exchange
                  experience. With years in fintech development, we know the ins
                  and outs of currency exchange and are dedicated to creating
                  solutions that go above and beyond.
                </p>
              </div>
              <button className={styles.LuSend2}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    JOIN NOW <FaArrowRight />
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.processSection} data-aos="fade-up">
        <div className="container-fluid px-5">
          <div className="row">
            <h4>
              Key Features of Our Currency Exchange <br />Platform Development
              Service:
            </h4>
            <div className="col-lg-6 p-lg-0">
              <div
                className={`${styles.processBox}  ${styles.blueBg} ${styles.currencyBlueUpperBox}`}
              >
                <ul>
                  <h5>Our Currency Exchange Platform Features</h5>
                  <p>Customized Solution</p>
                </ul>
                <ul>
                  <h5>Tailored for Your Exchange Needs</h5>
                  <p>
                    We don’t do one-size-fits-all. We listen to your business
                    goals and build a currency exchange platform that fits you
                    perfectly. Need a quick converter? Done. A trading
                    powerhouse? We’ve got you covered.
                  </p>
                </ul>
                <ul>
                  <h5>Your Money, Our Priority</h5>
                  <p>
                    We understand finance is all about trust. That’s why our
                    platforms are fortresses, built with top-notch encryption,
                    two-factor authentication, and industry-leading compliance.
                    Your users’ funds and data are safe and sound.
                  </p>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 p-lg-0">
              <div
                className={`${styles.processBox}  ${styles.whiteBg} ${styles.currencyWhiteBottomBox}`}
              >
                <ul>
                  <h5>Effortless Connections</h5>
                  <p>
                    No more juggling systems! Our platforms integrate smoothly
                    with all your financial partners, from APIs to banks and
                    payment gateways. This means you can offer a wider range of
                    currencies and payment options without the headache.
                  </p>
                </ul>
                <ul>
                  <h5>Grow Fearlessly</h5>
                  <p>
                    Don’t let your platform hold you back. We build with
                    scalability in mind, so your currency exchange platform can
                    expand as your business booms. More users, more services, no
                    problem. You’ll keep the same smooth performance you love.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className={styles.processSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <h4>
              Key Features of Our Currency Exchange <br />
              Platform Development Service:
            </h4>
            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox}  ${styles.blueBg} ${styles.currencyBlueUpperBox}`}
                >
                  <ul>
                    <h5>Our Currency Exchange Platform Features</h5>
                    <p>Customized Solution</p>
                  </ul>
                  <ul>
                    <h5>Tailored for Your Exchange Needs</h5>
                    <p>
                      We don’t do one-size-fits-all. We listen to your business
                      goals and build a currency exchange platform that fits you
                      perfectly. Need a quick converter? Done. A trading
                      powerhouse? We’ve got you covered.
                    </p>
                  </ul>
                  <ul>
                    <h5>Your Money, Our Priority</h5>
                    <p>
                      We understand finance is all about trust. That’s why our
                      platforms are fortresses, built with top-notch encryption,
                      two-factor authentication, and industry-leading
                      compliance. Your users’ funds and data are safe and sound.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox}  ${styles.blueBg} ${styles.currencyWhiteBottomBox}`}
                >
                  <ul>
                    <h5>Effortless Connections</h5>
                    <p>
                      No more juggling systems! Our platforms integrate smoothly
                      with all your financial partners, from APIs to banks and
                      payment gateways. This means you can offer a wider range
                      of currencies and payment options without the headache.
                    </p>
                  </ul>
                  <ul>
                    <h5>Grow Fearlessly</h5>
                    <p>
                      Don’t let your platform hold you back. We build with
                      scalability in mind, so your currency exchange platform
                      can expand as your business booms. More users, more
                      services, no problem. You’ll keep the same smooth
                      performance you love.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5 text-center">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>Get Started Today</h4>
              <h5>
                Ready to kickstart your currency exchange service or enhance
                your current platform? With our wealth of expertise and
                resources, we're poised to actualize your vision. Reach out
                today to delve deeper into our Currency Exchange Platform
                Development Service and discover how we can propel you towards
                your business objectives.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}

export default page;
