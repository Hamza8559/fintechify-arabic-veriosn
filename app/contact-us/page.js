import React from 'react'
import Header from '../components/Header/Header'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import styles from '../components/assets/css/contact.module.css'
import { MdOutlineAddIcCall } from "react-icons/md";
import ContactImg from '../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg'
import Image from 'next/image'
import Map from '../components/map/map'
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head={"Contact us"}
                tagLine={false}
                Des={false}
            />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                                <MdOutlineAddIcCall />
                                <div>
                                    <span>Telephone</span>
                                    <a href="">+971-54-5061985</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                            <IoLocation />
                                <div>
                                    <span>Location</span>
                                    <a href="">Unit: IH0101-OF01, Level One, <br />Innovation One, <br />DIFC, Dubai, UAE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                            <MdOutlineEmail />
                                <div>
                                    <span>Email</span>
                                    <a href="">talktous@fintechify.ae</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Map /> */}
            <section className={styles.contactFormSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.contactFormImg}>
                                <Image src={ContactImg}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.contactFormBox}>
                                <h5>Get In Touch</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form>
                                    <div class="form-group">
                                        <label>Name *</label>
                                        <input type="text" class="form-control" required placeholder="Enter Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Email Address *</label>
                                        <input type="email" class="form-control" required placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label>Subject *</label>
                                        <input type="text" class="form-control" required placeholder="Message Subject" />
                                    </div>
                                    <div class="form-group">
                                        <label>Comments / Questions *</label>
                                        <textarea class="form-control" rows="3"></textarea>
                                    </div>
                                    <div class="form-group">
                                       <button>Post Message</button>
                                    </div>
                                </form>
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