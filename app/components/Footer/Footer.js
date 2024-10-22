// components/Footer.js
import styles from "../assets/css/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/FINTECHIFY.png";
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
            <h2>اشترك في نشرتنا الإخبارية وابقَ <br/>على اطلاع بآخر المستجدات.</h2>
            <p>
              FinTechify تُحدث ثورة في الخدمات المصرفية، حيث تقدم تجربة رقمية
              تتمحور حول المستخدم.
            </p>
          </div>
          <div className={styles.subscription}>
            <input
              type="email"
              placeholder="عنوان البريد الإلكتروني"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>
              اشترك <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={`${styles.footerMain} p-0 m-0`}>
          <div className="row p-0 m-0">
            <div className={`${styles.companyInfo} col-lg-3 p-0 m-0`}>
              <Image src={logo} alt="Logo" className={styles.logo} />
            
              <div className={styles.socialIcons}>
                <Link href="#">
                  <FaFacebookSquare />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaXTwitter />
                </Link>
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className={`${styles.linksSection} col-lg-9 p-0 m-0`}>
              <div>
                <h4>الخدمات</h4>
                <ul>
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
                </ul>
              </div>
              <div>
                <ul>
                  <h4></h4>
                  <li>
                    <Link href="/decentralized-finance-defi-platform">
                      التمويل اللامركزي
                    </Link>
                  </li>
                  <li>
                    <Link href="/integration-services">خدمات التكامل</Link>
                  </li>
                  <li>
                    <Link href="/resource-augmentation">تعزيز الموارد</Link>
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
              </div>
              <div>
                <h4>روابط سريعة</h4>
                <ul>
                  <li>
                    <Link href="/">الرئيسية</Link>
                  </li>
                  <li>
                    <Link href="/about">حول</Link>
                  </li>
                  <li>
                    <Link href="/service">الخدمات</Link>
                  </li>
                  <li>
                    <Link href="/rizeApp">تطبيق Rize</Link>
                  </li>
                  <li>
                    <Link href="/welab">WeLab</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">تواصل</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>تواصل معنا</h4>
                <ul>
                  <p>+971-54-5061985</p>
                  <p>talktous@fintechify.ae</p>
                  <p>
                    Unit: IH0101-OF01, Level One, <br /> Innovation One, DIFC,
                    Dubai,
                    <br /> UAE
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className="text-center">
            &copy; 2024 FinTechify. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
