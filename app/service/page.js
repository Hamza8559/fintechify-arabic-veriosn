import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Testimonials from '../components/Testimonials/Testimonials'
import styles from '../components/assets/css/services.module.css'
import { FcAddRow } from "react-icons/fc";
import { FcDoughnutChart } from "react-icons/fc";
import img1 from '../components/assets/images/webp.net-resizeimage.jpg'
import img2 from '../components/assets/images/shape-1@2x.png'
import { FaCropSimple } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { GiFlatPlatform } from "react-icons/gi";
import { AiFillMerge } from "react-icons/ai";
import { SiCivicrm } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";





function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head="Services FinTechify"
                tagLine=""
                Des=""
            />
            <section className={styles.everyoneSection}>
                <div className="container">
                    <div className="row">
                        <h4>Come and take a look what everyone says</h4>
                        <p>Discover the buzz! Come and take a look at what everyone is saying about our services.</p>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-4">
                            <div className={styles.everyoneInnerBox}>
                                <FcAddRow />
                                <h5>Exceptional service!</h5>
                                <span>The team at Fintechify goes above and beyond. Their expertise in banking solutions transformed our financial operations. Highly recommended!</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.everyoneInnerBox}>
                                <FcDoughnutChart />
                                <h5>A Game-changer!</h5>
                                <span>Fintechify exceeded our expectations. Their commitment to reducing legacy IT debt and ensuring regulatory compliance reflects their dedication to excellence. A trusted partner in our financial journey.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <Image src={img1} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <h4>Innovative Fintech <br /> Solutions for  <br />Modern Finance</h4>
                                <p>Discover modern finance through our innovative fintech solutions. From seamless payments to AI-powered insights, we offer a range of services designed to simplify and enhance your financial experience. Explore the future of finance with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.servicessection}>
                <div className="container">
                    <div className="row">
                        <h5>Our Services</h5>
                        <p>Discover the buzz! Come and take a look at what everyone is saying about our services.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <CiBank />
                                <h4>Banking App Development</h4>
                                <span>At Fintechify, we specialize in creating cutting-edge banking apps tailored to the unique requirements of financial institutions.</span>
                                <div className={styles.numberBox}>
                                    <h6>01</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <FaWallet />
                                <h4>Digital Wallet Development</h4>
                                <span>Welcome to our Digital Wallet Development Services! In today’s fast-paced digital landscape, convenience is paramount,</span>
                                <div className={styles.numberBox}>
                                    <h6>02</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <SiJirasoftware />
                                <h4>Insurance Software Development</h4>
                                <span>At Fintechify, we understand the complexities of the insurance industry and the critical need for efficient, secure, and scalable software solutions.</span>
                                <div className={styles.numberBox}>
                                    <h6>03</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <FaCropSimple />
                                <h4>FinOps Services</h4>
                                <span>Welcome to Fintechify, where we offer comprehensive FinOps services designed to streamline your financial operations and optimize your business’s financial health.</span>
                                <div className={styles.numberBox}>
                                    <h6>04</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <GiFlatPlatform />
                                <h4>Crowdfunding Platform Development</h4>
                                <span>Welcome to Fintechify, where innovation meets efficiency in crowdfunding platform development.</span>
                                <div className={styles.numberBox}>
                                    <h6>05</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <AiFillMerge />
                                <h4>Decentralized Finance (DeFi) Platform</h4>
                                <span>At Fintechify, we’re proud to introduce our cutting-edge Decentralized Finance (DeFi) platform, revolutionizing</span>
                                <div className={styles.numberBox}>
                                    <h6>06</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <SiCivicrm />
                                <h4>FinTech CRM Software Development</h4>
                                <span>Empower your financial services business with a custom-built CRM solution tailored to your unique needs.</span>
                                <div className={styles.numberBox}>
                                    <h6>07</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <MdPayments />
                                <h4>Payment App Development</h4>
                                <span>At Fintechify, we understand that every business is unique, and so are its payment needs. That’s why we offer tailor-made payment app development.</span>
                                <div className={styles.numberBox}>
                                    <h6>08</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <FaExchangeAlt />
                                <h4>Currency Exchange Platform Development</h4>
                                <span>At Fintechify, we specialize in the development of cutting-edge currency exchange platforms that are scalable.</span>
                                <div className={styles.numberBox}>
                                    <h6>09</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className={styles.servicesBox}>
                                <CiLock />
                                <h4>Cybersecurity</h4>
                                <span>Implementing cybersecurity is not just a protective measure but it's a strategic advantage that sets your business apart in an increasingly digital world.</span>
                                <div className={styles.numberBox}>
                                    <h6>10</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <h4>Crafting Success: Partner with Experts in Innovative Product Design & Development</h4>
                                <p>Collaborate with our seasoned experts in product design and development to precisely achieve your business goals. We bring innovation to the forefront, ensuring that every aspect of your project is crafted with precision. From conceptualization to execution, trust our team to transform your ideas into impactful and seamlessly functioning products, driving your business towards unparalleled success.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <Image src={img2} className='img-fluid' />
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