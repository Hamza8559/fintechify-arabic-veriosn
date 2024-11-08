import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./realsatate.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/riseApp.png";
import ImageOne from "../components/assets/images/blocks-landing-learn-more-1-md.webp";
import ImageTwo from "../components/assets/images/blocks-landing-learn-more-2-md.webp";
import ImageThree from "../components/assets/images/blocks-landing-learn-more-3-md.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/pexels-christina-morillo-1181244-1024x684.jpg";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />

      <div className={`container-fluid ${style.containerFluid}`}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-12 ${style.col12}`}>
              <h1>
                <Image src={RisImage} />
              </h1>
              {/* <p>
                FinPoan is a leading digital product management platform that
                empowers businesses to streamline their digital product
                management processes. With its advanced features and expertise,
                we help you achieve better productivity, increase customer
                satisfaction, and drive growth.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {/* <Image src={RisImage} /> */}
            <h1>What's a FinBloc?</h1>
            <p>
              A FinBloc represents a fraction of a property,making real estate
              investment accessible and affordable for everyone.By taking an
              entire property and dividing it into equal FinBlocs, we enable
              <br />
              individuals to participate in real estate investments with entry
              points as low as AED 2,000.
            </p>
            <p>
              Each FinBloc allows investors to own a proportional share of the
              property, unlocking the benefits of real estate ownership without
              the need for large upfront capital.
              <br />
              With FinBlocs, you can diversify your investment portfolio, gain
              potential returns, and build wealth in a secure and convenient
              way—starting at an amount that fits your budget.
            </p>
            <p>
              Whether you're new to real estate or a 1 investor, FinBlocs
              make it easy to start investing in high-value properties in the
              UAE market.
            </p>
            <button className={`${style.btn} mt-3`}>
              <Link href="/contact-us" passHref>
                <span style={{ textDecoration: "none", color: "white" }}>
                  Join Now
                </span>
              </Link>
            </button>
          </div>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageOne} className={style.RisMobile} />
          </div>
        </div>
      </div>

      <div className={`container d-lg-none d-block ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageOne} className={style.RisMobile} />
          </div>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {/* <Image src={RisImage} /> */}
            <h1>What's a FinBloc?</h1>
            <p>
              A FinBloc represents a fraction of a property,making real estate
              investment accessible and affordable for everyone.By taking an
              entire property and dividing it into equal FinBlocs, we enable
              <br />
              individuals to participate in real estate investments with entry
              points as low as AED 2,000.
            </p>
            <p>
              Each FinBloc allows investors to own a proportional share of the
              property, unlocking the benefits of real estate ownership without
              the need for large upfront capital.
              <br />
              With FinBlocs, you can diversify your investment portfolio, gain
              potential returns, and build wealth in a secure and convenient
              way—starting at an amount that fits your budget.
            </p>
            <p>
              Whether you're new to real estate or a seasoned investor, FinBlocs
              make it easy to start investing in high-value properties in the
              UAE market.
            </p>
            <button className={`${style.btn} mt-3`}>
              <Link href="/contact-us" passHref>
                <span style={{ textDecoration: "none", color: "white" }}>
                  Join Now
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className={`container ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6  ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageTwo} className={style.RisMobile} />
          </div>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {/* <Image src={RisImage} /> */}
            <h1>Investment dashboard</h1>
            <p>
              Keep a close eye on your investments anytime, anywhere with our
              intuitive online dashboard. Track the performance of your FinBlocs
              in real-time and stay informed with the latest property
              recommendations tailored to your portfolio. Whether you’re
              monitoring returns or exploring new investment opportunities, your
              dashboard brings all the insights and tools you need into one
              convenient view.
            </p>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {/* <Image src={RisImage} /> */}
            <h1>Manage funds with FinBloc Wallet</h1>
            <p>
              Take control of your real estate investments effortlessly with the
              FinBloc Wallet. Securely manage, track, and grow your funds in one
              centralized platform, designed to simplify your investment
              experience. With the FinBloc Wallet, you can seamlessly access
              your assets, monitor returns, and reinvest with ease—making
              property investment more accessible and efficient than ever.
            </p>
          </div>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageThree} className={style.RisMobile} />
          </div>
        </div>
      </div>

      <div className={`container d-lg-none d-block ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageThree} className={style.RisMobile} />
          </div>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {/* <Image src={RisImage} /> */}
            <h1>Manage funds with FinBloc Wallet</h1>
            <p>
              Take control of your real estate investments effortlessly with the
              FinBloc Wallet. Securely manage, track, and grow your funds in one
              centralized platform, designed to simplify your investment
              experience. With the FinBloc Wallet, you can seamlessly access
              your assets, monitor returns, and reinvest with ease—making
              property investment more accessible and efficient than ever.
            </p>
          </div>
        </div>
      </div>

      <section className={`${style.servicessection}`}>
        <div className="container">
          <div className="row ">
            <h5 className={`${style.keyBox} text-center`}>
              Why invest in real estate? <br />
            </h5>
            <p className="text-center">
              Real estate is the world’s largest asset class and provides major
              benefits.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-end">Income potential</h4>
                <span className="text-end pt-3">
                  Real estate helps you earn passive income in the form of
                  monthly rentals. You can also build long-term wealth through
                  capital appreciation.
                </span>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-end">Inflation hedge</h4>
                <span className="text-end pt-3">
                  As the cost of living increases, the value of real estate and
                  rental income increases. This helps real estate act as an
                  inflation hedge.
                </span>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-end">Portfolio diversification</h4>
                <span className="text-end pt-3">
                  Real estate serves as a tangible and unique asset class. It
                  can help you diversify your portfolio and reduce risk.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
