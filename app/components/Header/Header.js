// components/Header.js
"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../assets/css/header.module.css";
import logo from "../assets/images/FINTECHIFY.png";
import Image from "next/image";
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
import { GoArrowUpLeft } from "react-icons/go";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProdMenu, setProdMenu] = useState(false);
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
          <button className={styles.btnStart}>
            <Link href="/contact-us" style={{ color: "white" }}>
              {" "}
              البدء <FaArrowRight />
            </Link>
          </button>

          {isOpen ? (
            false
          ) : (
            <button className={styles.menuButtonOpen} onClick={toggleSidebar}>
              <FaBars />
            </button>
          )}
          {isOpen ? (
            <button className={styles.menuButtonClose} onClick={toggleSidebar}>
              <MdClose />
            </button>
          ) : (
            false
          )}
        </div>
        <nav className={`${styles.nav}`}>
          <ul>
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li>
              <Link href="/about">حول</Link>
            </li>
            <li
              onMouseEnter={() => {
                setIsMenuOpen(true);
                setProdMenu(false);
              }}
            >
              <Link href="/service">
                <IoIosArrowDown /> الخدمات
              </Link>
            </li>
            <li
              onMouseEnter={() => {
                setIsMenuOpen(false);
                setProdMenu(true);
              }}
              className={styles.productsMenu}
            >
              <Link href="#">
                <IoIosArrowDown /> المنتجات{" "}
              </Link>
              {isProdMenu && (
                <ul
                  onMouseLeave={() => {
                    setProdMenu(false);
                  }}
                >
                  <li>
                    <Link href="/rizeApp" className={styles.ol}>
                      تطبيق Rize
                    </Link>
                  </li>
                  <li>
                    <Link href="/welab" className={styles.ol}>
                      WeLab
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/contact-us">تواصل</Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </header>

      {isMenuOpen && (
        <section
          onMouseLeave={() => {
            setIsMenuOpen(false);
          }}
          className={styles.menuBox}
          style={{ boxShadow: "10px 10px 10px gray" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 p-0 m-0">
                <ul>
                  <li>
                    <AiFillAppstore color="#1e8bf6" />
                    <div>
                      <Link href="/Banking-app-development">
                        تطوير التطبيقات المصرفية
                        <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <CiWallet color="#1e8bf6" />
                    <div>
                      <Link href="/Digital-wallet-development">
                        تطوير المحفظة الرقمية
                        <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <SiBmcsoftware color="#1e8bf6" />
                    <div>
                      <Link href="/Insurance-software-development">
                        تطوير برامج التأمين
                        <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <CiLock color="#1e8bf6" />
                    <div>
                      <Link href="/cybersecurity">
                        الأمن السيبراني <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 p-0 m-0">
                <ul>
                  <li>
                    <MdOutlineDesignServices color="#1e8bf6" />
                    <div>
                      <Link href="/finops-services">
                        خدمات العمليات المالية (FinOps) <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <GiFlatPlatform color="#1e8bf6" />
                    <div>
                      <Link href="/Crowdfunding-platform-development">
                        تطوير منصة التمويل الجماعي
                        <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <GiPlatform color="#1e8bf6" />
                    <div>
                      <Link href="/decentralized-finance-defi-platform">
                        التمويل اللامركزي <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 p-0 m-0">
                <ul>
                  <li>
                    <GrIntegration color="#1e8bf6" />
                    <div>
                      <Link href="/integration-services">
                        خدمات التكامل <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <GrResources color="#1e8bf6" />
                    <div>
                      <Link href="/resource-augmentation">
                        تعزيز الموارد <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <FaExchangeAlt color="#1e8bf6" />
                    <div>
                      <Link href="/currency-exchange-platform-development">
                        تطوير منصة تبادل العملات <GoArrowUpLeft />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <Image className={styles.mobilelogo} src={logo} alt="Logo" />
        <ul>
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li>
            <Link href="/about">حول</Link>
          </li>
          <li>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
            الخدمات {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/Banking-app-development">
                    تطوير التطبيقات المصرفية
                  </Link>
                </li>
                <li>
                  <Link href="/Digital-wallet-development">
                    تطوير المحفظة الرقمية
                  </Link>
                </li>
                <li>
                  <Link href="/Insurance-software-development">
                    تطوير برامج التأمين
                  </Link>
                </li>
                <li>
                  <Link href="/finops-services">
                    خدمات العمليات المالية (FinOps)
                  </Link>
                </li>
                <li>
                  <Link href="/Crowdfunding-platform-development">
                    تطوير منصة التمويل الجماعي
                  </Link>
                </li>
                <li>
                  <Link href="/decentralized-finance-defi-platform">
                    التمويل اللامركزي
                  </Link>
                </li>
                <li>
                  <Link href="/integration-services">خدمات التكامل</Link>
                </li>
                <li>
                  <Link href="/resource-augmentation">
                  تعزيز الموارد
                  </Link>
                </li>
                <li>
                  <Link href="/currency-exchange-platform-development">
                  تطوير منصة تبادل العملات
                  </Link>
                </li>
                <li>
                  <Link href="/cybersecurity">الأمن السيبراني</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className={styles.dropdownButton}
              onClick={toggleDropdowntwo}
            >
              المنتجات{" "}
              {isDropdownOpentwo ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
            {isDropdownOpentwo && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/rizeApp">تطبيق Rize</Link>
                </li>
                <li>
                  <Link href="/welab">WeLab</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact-us">تواصل</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
