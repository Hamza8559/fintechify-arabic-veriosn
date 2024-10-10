// components/Header.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from '../assets/css/header.module.css';
import logo from '../assets/images/FINTECHIFY.png'
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { WiDirectionUpRight } from "react-icons/wi";
import { CiWallet } from "react-icons/ci";
import { SiBmcsoftware } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";
import { GiPlatform } from "react-icons/gi";
import { GrIntegration } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";







export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProdMenu, setProdMenu] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpentwo, setIsDropdownOpentwo] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdowntwo = () => {
        setIsDropdownOpentwo(!isDropdownOpentwo);
    };

    // const cccz = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <>
            <header className={styles.header}>
                <Image className={styles.logo} src={logo} alt="Logo" />
                <nav className={`${styles.nav}`}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li onMouseEnter={() => {
                            setIsMenuOpen(true)
                            setProdMenu(false)
                        }}><Link href="/service">Services <IoIosArrowDown /></Link></li>
                        <li onMouseEnter={() => {
                            setIsMenuOpen(false)
                            setProdMenu(true)
                        }} className={styles.productsMenu}><Link href="#">Products <IoIosArrowDown /></Link>
                            {isProdMenu && (
                                <ul onMouseLeave={() => { setProdMenu(false) }}>
                                    <li><Link href="/rizeApp" className={styles.ol}>Rize App</Link></li>
                                    <li><Link href="/welab" className={styles.ol}>WeLab</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.btnStart}>Get Started <FaArrowRight />
                    </button>
                    <button className={styles.menuButton} onClick={toggleSidebar}>
                        {isOpen ? <MdClose /> : <FaBars />}
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <section onMouseLeave={() => {
                    setIsMenuOpen(false)
                }} className={styles.menuBox} style={{ boxShadow: "10px 10px 10px gray" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <AiFillAppstore />
                                        <div>
                                            <Link href="/Banking-app-development">Banking App Development <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <CiWallet />
                                        <div>
                                            <Link href="/Digital-wallet-development">Digital Wallet Development <WiDirectionUpRight /></Link>
                                            {/* <span>The power of seamless banking</span> */}
                                        </div>
                                    </li>
                                    <li>
                                        <SiBmcsoftware />
                                        <div>
                                            <Link href="/Insurance-software-development">Insurance Software Development <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <MdOutlineDesignServices />
                                        <div>
                                            <Link href="/finops-services">FinOps Services <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <GiFlatPlatform />
                                        <div>
                                            <Link href="/Crowdfunding-platform-development">Crowdfunding Platform Development <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <GiPlatform />
                                        <div>
                                            <Link href="/decentralized-finance-defi-platform">Decentralized Finance Platform <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <GrIntegration />
                                        <div>
                                            <Link href="/integration-services">Integration Services <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <GrResources />
                                        <div>
                                            <Link href="/resource-augmentation">Resource Augmentation <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <FaExchangeAlt />
                                        <div>
                                            <Link href="/currency-exchange-platform-development">Currency Exchange Platform Development <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <CiLock />
                                        <div>
                                            <Link href="/cybersecurity">Cybersecurity <WiDirectionUpRight /></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <Image className={styles.mobilelogo} src={logo} alt="Logo" />
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li>
                        <button className={styles.dropdownButton} onClick={toggleDropdown}>
                            Services {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </button>
                        {isDropdownOpen && (
                            <ul className={styles.dropdown}>
                                <li><Link href="/Banking-app-development">Banking App Development</Link></li>
                                <li><Link href="/Digital-wallet-development">Digital Wallet Development</Link></li>
                                <li><Link href="/Insurance-software-development">Insurance Software Development</Link></li>
                                <li><Link href="/finops-services">FinOps Services</Link></li>
                                <li><Link href="/Crowdfunding-platform-development">Crowdfunding Platform Development</Link></li>
                                <li><Link href="/decentralized-finance-defi-platform">Decentralized Finance Platform</Link></li>
                                <li><Link href="/integration-services">Integration Services</Link></li>
                                <li><Link href="/resource-augmentation">Resource Augmentation</Link></li>
                                <li><Link href="/currency-exchange-platform-development">Currency Exchange Platform Development</Link></li>
                                <li><Link href="/cybersecurity">Cybersecurity</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button className={styles.dropdownButton} onClick={toggleDropdowntwo}>
                            Products {isDropdownOpentwo ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </button>
                        {isDropdownOpentwo && (
                            <ul className={styles.dropdown}>
                                <li><Link href="/rizeApp">Rize App</Link></li>
                                <li><Link href="/welab">WeLab</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/contact-us">Contact</Link></li>
                </ul>
            </div>

        </>
    );
}
