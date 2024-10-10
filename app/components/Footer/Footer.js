// components/Footer.js
import styles from '../assets/css/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/FINTECHIFY-white-removebg-preview.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";






export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.newsletter}>
                    <div className={styles.newsletterText}>
                        <h2>Subscribe to our newsletter <br /> and stay updated</h2>
                        <p>FinTechify revolutionizes banking, offering a user-centric digital experience.</p>
                    </div>
                    <div className={styles.subscription}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeButton}>Subscribe <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className={`${styles.footerMain} p-0 m-0`}>
                    <div className="row p-0 m-0">
                        <div className={`${styles.companyInfo} col-lg-3 p-0 m-0`}>
                            <Image src={logo} alt="Logo" className={styles.logo} />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, atque obcaecati aut debitis natus esse totam molestias molestiae quo iure adipisci unde! Autem, suscipit iure tenetur amet voluptatibus inventore doloremque.
                                    </p>
                            <div className={styles.socialIcons}>
                                <Link href="#"><FaFacebookSquare /></Link>
                                <Link href="#"><FaInstagram /></Link>
                                <Link href="#"><FaXTwitter /></Link>
                                <Link href="#"><FaLinkedin /></Link>
                            </div>
                        </div>
                        <div className={`${styles.linksSection} col-lg-9 p-0 m-0`}>
                            <div>
                                <h4>Services</h4>
                                <ul>
                                    <li><Link href="#">Banking App Development</Link></li>
                                    <li><Link href="#">Digital Wallet Development</Link></li>
                                    <li><Link href="#">Insurance Software Development</Link></li>
                                    <li><Link href="#">FinOps Services</Link></li>
                                    <li><Link href="#">Crowdfunding Platform Development</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h4></h4>
                                    <li><Link href="#">Decentralized Finance <br />(DeFi) Platform</Link></li>
                                    <li><Link href="#">Integration Services</Link></li>
                                    <li><Link href="#">Resource Augmentation</Link></li>
                                    <li><Link href="#">Currency Exchange <br />Platform Development</Link></li>
                                    <li><Link href="#">Cybersecurity</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/service">Services</Link></li>
                                    <li><Link href="/rizeApp">Rize App</Link></li>
                                    <li><Link href="/welab">WeLab</Link></li>
                                    <li><Link href="/contact-us">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Contact us</h4>
                                <ul>
                                    <p>+971-54-5061985</p>
                                    <p>talktous@fintechify.ae</p>
                                    <p>Unit: IH0101-OF01, Level One, <br /> Innovation One, DIFC, Dubai, UAE</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2024 FinTechify. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
