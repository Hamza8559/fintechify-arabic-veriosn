import React from 'react'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import img from '../components/assets/images/cyberimg.jpeg'


function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head={"Shield Your Business with Unbreakable Cybersecurity"}
                tagLine={"Defend, Protect, And Prevail!"}
                Des={false}
            />
            <section className='mb-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500">
                            <div className={styles.InnovativeBox}>
                                <h4>Why Your Business Deserves Cybersecurity Excellence</h4>

                                <p>User Explosion: Prevent data breaches and protect confidential information from cybercriminals who are constantly evolving their tactics.</p>
                                <p>Build Customer Trust: A secure business fosters loyalty. By investing in strong cybersecurity measures, you reassure your clients that their data is in safe hands.</p>
                                <p>Ensure Business Continuity: Cyberattacks can lead to costly downtime and disrupt your operations. Protect your business with proactive defense to keep running smoothly, no matter what.</p>
                                <p>
                                    Stay Compliant with Industry Standards: Many industries require stringent data security regulations. With robust cybersecurity, your business remains compliant and avoids hefty fines.
                                </p>
                                <p>Protect Your Reputation: One security breach can tarnish years of brand-building. Defend your reputation by staying ahead of potential threats with cutting-edge cybersecurity solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                            <Image className="img-fluid" src={img} />
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className={styles.processSection} data-aos="fade-up" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <h4>Key Points for Implementing Cybersecurity in Business</h4>
                        <span>Implementing cybersecurity is not just a protective measure but it's a strategic advantage that sets your business apart in an increasingly digital world.</span>
                        <div className='col-lg-6 p-lg-0'>
                            <div className={`${styles.processBox} ${styles.blueBg} ${styles.cybersecurityBlueUpperBox}`}>
                                <ul>
                                    <h5>1. Prevent Financial Loss
                                    </h5>
                                    <p>Cyberattacks can result in significant financial damage through stolen data, ransomware, and downtime. Proactive cybersecurity measures help you avoid these costly disruptions.</p>
                                </ul>
                                <ul>
                                    <h5>2. Maintain Customer Confidence
                                    </h5>
                                    <p>Customers are increasingly concerned about the safety of their personal information. By securing your business, you maintain their trust and loyalty, driving long-term success.

                                    </p>

                                </ul>
                                <ul>
                                    <h5>3. Regulatory Compliance
                                    </h5>
                                    <p>Compliance with data protection regulations (like GDPR, CCPA, or HIPAA) is essential for avoiding fines and legal consequences. Cybersecurity helps your business stay compliant with the latest requirements.

                                    </p>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6 p-lg-0'>
                            <div className={`${styles.processBox} ${styles.whiteBg} ${styles.cybersecurityWhiteBottomBox}`}>
                                <ul>
                                    <h5>4. Defend Against Emerging Threats
                                    </h5>
                                    <p>Cyber threats are constantly evolving. A strong cybersecurity strategy helps your business stay ahead of hackers and malicious actors, minimizing vulnerabilities.

                                    </p>
                                </ul>
                                <ul>
                                    <h5>5 .Secure Intellectual Property
                                    </h5>
                                    <p>Your business’s proprietary data and innovations are valuable. Cybersecurity ensures that your intellectual property stays in your hands, not in those of cybercriminals.

                                    </p>
                                </ul>
                                <ul>
                                    <h5>6 .Boost Business Continuity
                                    </h5>
                                    <p>A solid cybersecurity plan minimizes disruptions by preventing attacks that could lead to downtime or operational failures. This ensures your business runs smoothly, even in the face of cyber risks.

                                    </p>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className={styles.startedUpperBox}>
                            <Image src={QoutesImg} alt='Qoutes' />
                            <h4>Strengthen Your Business with Fintechy Cybersecurity Solutions

                            </h4>

                        </div>
                        <div className="col-lg-12">
                            <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                                <ul>
                                    <h5>Your customers deserve a mobile banking experience that blasts off, not one stuck in the dark ages.  Fintechify crafts powerful, user-friendly apps that:</h5>
                                    <li><p>Worried about your business being vulnerable to cyber threats? We create easy-to-understand, effective cybersecurity plans designed specifically for fintech companies. Protect your valuable data, secure your reputation, and stay safe from hackers with our trusted services.</p></li>
                                    <li><p>Contact us today! Let’s talk about your security needs and show you how Fintechy.ae can make your business safer and stronger.</p></li>
                                </ul>
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