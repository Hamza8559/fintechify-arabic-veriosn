import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/webp.net-resizeimage.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img from "../components/assets/images/resourceimg.jpeg";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"Resource Augmentation"}
        tagLine={false}
        tagLine2={"Stop fitting your business in a payment box. Get a custom solution that fits your flow."}
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
                <h4>
                  Ditch the One-Size-Fits-All! Craft Your Dream Payment App with
                  Fintechify’s Resource Augmentation Service.
                </h4>
                <p>
                  Tired of payment solutions that cramp your business style? At
                  Fintechify, we believe your payment process should be as
                  unique as you are. That’s why we offer custom-built payment
                  app development. Our all-star team of developers, designers,
                  and strategists will collaborate with you to craft the perfect
                  payment app, seamlessly integrated with your business goals.
                </p>
                <p>
                  {" "}
                  Ready to ditch the generic and embrace the perfect fit?
                  Contact Fintechify today!
                </p>
              </div>
              <button className={styles.LuSend2}>
                  <Link href="/contact-us"passHref>
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
                <h4>
                  Ditch the One-Size-Fits-All! Craft Your Dream Payment App with
                  Fintechify’s Resource Augmentation Service.
                </h4>
                <p>
                  Tired of payment solutions that cramp your business style? At
                  Fintechify, we believe your payment process should be as
                  unique as you are. That’s why we offer custom-built payment
                  app development. Our all-star team of developers, designers,
                  and strategists will collaborate with you to craft the perfect
                  payment app, seamlessly integrated with your business goals.
                </p>
                <p>
                  {" "}
                  Ready to ditch the generic and embrace the perfect fit?
                  Contact Fintechify today!
                </p>
              </div>
              <button className={styles.LuSend2}>
                  <Link href="/contact-us"passHref>
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
            <h4>Key Features</h4>
            <div className="col-lg-6 p-lg-0">
              <div
                className={`${styles.processBox} ${styles.blueBg} ${styles.ResourceBlueUpperBox}`}
              >
                <ul>
                  <h5>Your Fort Knox of Payment Security</h5>
                  <p>
                    We don’t just integrate secure gateways, we build them like
                    fortresses. State-of-the-art encryption, tokenization, and
                    PCI DSS compliance keep your customers’ data safe. Regular
                    security audits ensure constant vigilance. Choose Fintechify
                    for peace of mind.
                  </p>
                </ul>
                <ul>
                  <h5>Effortless Transactions. Happy Customers.</h5>
                  <p>
                    Fintechify crafts intuitive payment apps. Clear visuals,
                    smooth flow, and helpful prompts make transactions a breeze.
                    We build for everyone, ensuring accessibility and a
                    delightful user experience that keeps customers coming back.
                  </p>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 p-lg-0">
              <div
                className={`${styles.processBox} ${styles.whiteBg} ${styles.ResourceWhiteBottomBox}`}
              >
                <ul>
                  <h5>Go Everywhere Your Customers Do.</h5>
                  <p>
                    Fintechify builds payment apps that work seamlessly on any
                    device, from iPhones to Androids and desktops. Reach your
                    entire audience, no matter their platform preference.
                  </p>
                </ul>
                <ul>
                  <h5>Build Your Perfect Payment Flow. </h5>
                  <p>
                    Flexibility is our middle name. Fintechify crafts payment
                    apps that adapt to your vision. Choose the features you
                    need, personalize the design, and create the perfect payment
                    experience for your business and customers.
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
            <h4>Key Features</h4>
            <div  className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.ResourceBlueUpperBox}`}
                >
                  <ul>
                    <h5>Your Fort Knox of Payment Security</h5>
                    <p>
                      We don’t just integrate secure gateways, we build them like
                      fortresses. State-of-the-art encryption, tokenization, and
                      PCI DSS compliance keep your customers’ data safe. Regular
                      security audits ensure constant vigilance. Choose Fintechify
                      for peace of mind.
                    </p>
                  </ul>
                  <ul>
                    <h5>Effortless Transactions. Happy Customers.</h5>
                    <p>
                      Fintechify crafts intuitive payment apps. Clear visuals,
                      smooth flow, and helpful prompts make transactions a breeze.
                      We build for everyone, ensuring accessibility and a
                      delightful user experience that keeps customers coming back.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.ResourceWhiteBottomBox}`}
                >
                  <ul>
                    <h5>Go Everywhere Your Customers Do.</h5>
                    <p>
                      Fintechify builds payment apps that work seamlessly on any
                      device, from iPhones to Androids and desktops. Reach your
                      entire audience, no matter their platform preference.
                    </p>
                  </ul>
                  <ul>
                    <h5>Build Your Perfect Payment Flow. </h5>
                    <p>
                      Flexibility is our middle name. Fintechify crafts payment
                      apps that adapt to your vision. Choose the features you
                      need, personalize the design, and create the perfect payment
                      experience for your business and customers.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.getStartedSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>Ready to transform how your business manages payments?</h4>
              <p>
                Reach out to us today to explore your project needs and initiate
                the journey towards developing an innovative payment application
                that propels your business towards growth and prosperity. Let's
                bring your vision to life!
              </p>
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
