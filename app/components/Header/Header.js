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
                <div className={styles.actions}>
                    <button className={styles.btnStart}>Get Started <FaArrowRight />
                    </button>
                   
                    {isOpen ? false :  <button className={styles.menuButton} onClick={toggleSidebar}>
                    <FaBars />
                    </button>}

                </div>
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
                <Image className={styles.logo} src={logo} alt="Logo" />
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
                                        <div>
                                            <Link href="/Banking-app-development"><WiDirectionUpRight /> Banking App Development</Link>
                                        </div>
                                        <AiFillAppstore />
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="/Digital-wallet-development"><WiDirectionUpRight /> Digital Wallet Development</Link>
                                            {/* <span>The power of seamless banking</span> */}
                                        </div>
                                        <CiWallet />
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="/Insurance-software-development"><WiDirectionUpRight /> Insurance Software Development</Link>
                                        </div>
                                        <SiBmcsoftware />
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <div>
                                            <Link href="/finops-services"><WiDirectionUpRight /> FinOps Services</Link>
                                        </div>
                                        <MdOutlineDesignServices />
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="/Crowdfunding-platform-development"><WiDirectionUpRight /> Crowdfunding Platform Development</Link>
                                        </div>
                                        <GiFlatPlatform />
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="/decentralized-finance-defi-platform"><WiDirectionUpRight /> Decentralized Finance Platform</Link>
                                        </div>
                                        <GiPlatform />
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <div>
                                            <Link href="/integration-services"><WiDirectionUpRight />Integration Services</Link>
                                        </div>
                                        <GrIntegration />
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="/resource-augmentation"><WiDirectionUpRight /> Resource Augmentation</Link>
                                        </div>
                                        <GrResources />
                                    </li>
                                    <li>
                                        <div>
                                            <Link href="/currency-exchange-platform-development"><WiDirectionUpRight /> Currency Exchange Platform Development</Link>
                                        </div>
                                        <FaExchangeAlt />
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 p-0 m-0'>
                                <ul>
                                    <li>
                                        <div>
                                            <Link href="/cybersecurity"><WiDirectionUpRight /> Cybersecurity</Link>
                                        </div>
                                        <CiLock />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <Image className={styles.mobilelogo} src={logo} alt="Logo" />
               
                {isOpen ?  <button className={styles.menuButton2} onClick={toggleSidebar}>
                    <MdClose /> 
                </button> : false}
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
