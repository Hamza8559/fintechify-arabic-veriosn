"use client"
import React, { useEffect } from 'react'
import styles from '../assets/css/testimonials.module.css'
import { RiChatQuoteLine } from "react-icons/ri";
import logo1 from '../assets/images/a64de0e4-d52c-446d-b89b-ebdec1774381.webp'
import logo2 from '../assets/images/logo2.e20e11af.png'
import Image from 'next/image';
import AOS from "aos";



export default function Testimonials() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <section>
                <div className={`${styles.testimonialsBg} container`}>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className={styles.testimonailsLeftPart}>
                                <div className={styles.tagBox}>
                                    <RiChatQuoteLine />
                                    <span>OUR HAPPY CLIENTS</span>
                                </div>
                                <h4>
                                    Join with million people <br />who already trust us
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="1000">
                            <div className={styles.testimonailsRightPart}>
                                <p>Our clients are at the heart of everything we do. We pride ourselves on building lasting relationships and providing exceptional service to individuals who appreciate the finer things in life.</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="2000">
                            <div className={styles.contentSection}>
                                <div>
                                    <Image src={logo1} alt="logo" className={styles.logo1} />
                                    <span>“Fintechify has transformed my financial experience. Their seamless online services, responsive support, and innovative investment solutions have made managing my finances a breeze. I highly recommend Fintechify for their user-friendly interface and commitment to customer satisfaction.”</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="3000">
                            <div className={styles.contentSection}>
                                <div>
                                    <Image src={logo2} alt="logo" className={styles.logo1} />
                                    <span>“Fintechify has changed my monetary experience. Their consistent internet based administrations, resposive help, and creative speculation arrangements have made dealing with my funds a breeze. I enthusiastically suggest Fintechify for their easy to understand connection point and obligation to consumer loyalty.”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
