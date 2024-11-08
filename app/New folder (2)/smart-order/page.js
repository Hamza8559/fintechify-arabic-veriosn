import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/portal-scrreen.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/3d-internet-secuirty-badge.jpg"
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"SMART ORDER"}
        tagLine={false}
        Des={false}
      />

      <section className='mb-5 mt-5 d-lg-block d-none'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>SMART ORDER | Order & distribution solution</h4>
                <p>
                  It creates a link between all supply chain stakeholders. It supports the distribution network of the company by generating orders for them to execute. Smart order plays a role of information sharing hub among product manufacturers, distributors and retail outlets. The solution aims to become essential part of value chain of Retail industry
                </p>
                <h5 className='mt-5'>Core Modules</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />Core Modules</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />Retailer & Manufacturer</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />Distributor & Retailer</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />Retailer & Customer</li>
                </ul>
                
              </div>
              <button className={`${styles.LuSend2} mt-3`}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    JOIN NOW <FaArrowRight />
                  </span>
                </Link>
              </button>
            </div>
            <div className="col-lg-6">
              <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                <Image src={img1} className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-5 mt-5 d-lg-none d-block'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                <Image src={img1} className='img-fluid' />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>SMART ORDER | Order & distribution solution</h4>
                <p>
                  It creates a link between all supply chain stakeholders. It supports the distribution network of the company by generating orders for them to execute. Smart order plays a role of information sharing hub among product manufacturers, distributors and retail outlets. The solution aims to become essential part of value chain of Retail industry
                </p>
                <h5 className='mt-5'>Core Modules</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />Core Modules</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />Retailer & Manufacturer</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />Distributor & Retailer</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />Retailer & Customer</li>
                </ul>
                
              </div>
              <button className={`${styles.LuSend2} mt-3`}>
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

      <section className={styles.aboutFirst}>
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="500" >
                <Image className="img-fluid" src={aboutFirstSectionImg} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.aboutFirstsection} data-aos="fade-right" data-aos-offset="300">
                <h2 className=''>
                  Why You Should Move for <br /> Banking App Development
                </h2>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Reduced Costs:</h3>
                    <span>Lower operational expenses by encouraging <br /> the use of mobile banking over physical branches.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Lower operational expenses by encouraging <br /> the use of mobile banking over physical branches.</h3>
                    <span>Offer a more personalized and interactive banking experience.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Improved Customer Satisfaction:</h3>
                    <span>Provide convenient and efficient services, leading to higher customer retention.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Data-Driven Insights:</h3>
                    <span>Gain valuable customer data and spending habits to inform future marketing strategies and product development.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>Competitive Advantage:</h3>
                    <span>Stay ahead of the curve by offering innovative mobile banking solutions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt='Qoutes' />
              <h4>Get Started Today</h4>
              <p>Tired of clunky banking apps? We build rocketships.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>Your customers deserve a mobile banking experience that blasts off, not one stuck in the dark ages.  Fintechify crafts powerful, user-friendly apps that:</h5>
                  <li className='text-start'><IoCheckmarkSharp /><span>Shield information like Fort Knox (but with better wifi).</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>Make managing finances smoother than a frictionless slide.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>Make managing finances smoother than a frictionless slide.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox}  ${styles.starteRight}`}>
                <ul>
                  <h5>We’re not just developers, we’re banking superheroes. Our team of design wizards, coding ninjas, and strategic masterminds join forces to create:</h5>
                  <li className='text-start'><IoCheckmarkSharp /><span>Apps that are a joy to use, not a chore.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>Features that make banking a breeze, not a battlefield.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>Solutions that turn customers into raving fans, not frustrated users.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles.startedBottomSection}>
                Don't just offer banking, be the banking revolution. Partner with Fintechify and watch your mobile app soar! <br />
                Ready to launch your mobile banking app into the stratosphere? Contact us today!
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

export default page