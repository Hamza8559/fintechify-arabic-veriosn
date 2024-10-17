"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/Banner/Banner'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "../components/assets/css/about.module.css"
import aboutFirstSectionImg from "../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg"
import Testimonials from '../components/Testimonials/Testimonials'
import CountUp from 'react-countup';



export default function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head="About Us"
        tagLine="Our Journey to Reach the Best Solution for You"
        Des={
          `Embark on a collaborative journey with us as we navigate through possibilities, challenges, and innovations to craft the  optimal solution tailored specifically for your unique needs. our commitment is to guide you through this journey, ensuring that the path we tread together leads to the best financial outcomes for you.`
        }
      />
      <section className={styles.aboutFirst}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.aboutFirstsection} data-aos="fade-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="500">
                <h2>We Do It in The Most Relevant, Existing Way, Using Data and Digital</h2>
                <p>
                  At Fintechify, we reshape finance with a contemporary touch, seamlessly integrating data and digital technologies for precision and modern solutions. Join us on a transformative journey where innovation meets your financial needs.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Integrity</h3>
                    <span>We uphold the highest standards of integrity, ensuring transparency, honesty, and ethical practices in every aspect of our services.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Loyalty</h3>
                    <span>Our unwavering loyalty is to you, our valued client, as we build lasting relationships and remain steadfast in our commitment to your financial well-being.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Commitment</h3>
                    <span>With a dedicated commitment, we stand by your side, providing reliable financial guidance and support to help you achieve your goals.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="center-bottom">
                <Image className="img-fluid" src={aboutFirstSectionImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ margin: "50px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.clientSeciton}>
                <h5 data-aos="fade-up" data-aos-duration="500">The Reason That You Must <br /> Be Choose Us for Your Financial Advisor</h5>
                <p data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">We are defined by our core values—integrity, loyalty, and commitment. Our mission is to provide financial services that go beyond transactions, focusing on building trusted relationships. Upholding the highest ethical standards, we prioritize your financial well-being.</p>
                {/* <div className={styles.counterStyle}>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={100}></CountUp>K</h4>
                    <span>Active User</span>
                  </div>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={400}></CountUp>K</h4>
                    <span>Apps Download</span>
                  </div>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={99}></CountUp>%</h4>
                    <span>Satisfied User</span>
                  </div>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={200}></CountUp>+</h4>
                    <span>Partner Joined</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  )
}
