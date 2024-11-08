import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/hand-holding-credit-card-online-shopping-laptop-eating-halloween-cookies-coffee-happy-halloween-hello-october-fall-autumn-festive-party-holiday-concept-scaled.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/man-purchase-pay-online-with-laptop-tablet-credit-card-hand-secure-payment-completed-scaled.jpg";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"الخدمات المصرفية الرقمية"}
        tagLine={false}
        Des={false}
      />

      <section className="mb-5 mt-5 d-lg-block d-none">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4>منصة البنك الرقمي لدينا</h4>
                <h6>
                  <b>“كاش آب”</b>
                </h6>
                <p>
                  التأمين، والاستثمار تحت منصة واحدة. إنها حل متكامل
                  للخدمات المصرفية عبر الهاتف المحمول الذي يمنح العملاء
                  القدرة على إجراء المعاملات من حساباتهم المصرفية الحالية
                  على خدمات مثل دفع الفواتير، والتحويلات المالية، والخدمات
                  المصرفية، والقروض الصغيرة، ودقائق الهاتف المحمول، وغيرها.
                </p>
                <h5 className="mt-5">المكونات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تطبيق / ويب كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    منصة دفع كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    نظام التشفير كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    API كاش آب
                  </li>
                </ul>
              </div>
              <button className={`${styles.LuSend2} mt-3`}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    انضم الآن <FaArrowRight />
                  </span>
                </Link>
              </button>
            </div>
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image src={img1} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 d-lg-none d-block">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image src={img1} className="img-fluid" />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4>منصة البنك الرقمي لدينا</h4>
                <h6>
                  <b>“كاش آب”</b>
                </h6>
                <p>
                  التأمين، والاستثمار تحت منصة واحدة. إنها حل متكامل
                  للخدمات المصرفية عبر الهاتف المحمول الذي يمنح العملاء
                  القدرة على إجراء المعاملات من حساباتهم المصرفية الحالية
                  على خدمات مثل دفع الفواتير، والتحويلات المالية، والخدمات
                  المصرفية، والقروض الصغيرة، ودقائق الهاتف المحمول، وغيرها.
                </p>
                <h5 className="mt-5">المكونات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تطبيق / ويب كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    منصة دفع كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    نظام التشفير كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    API كاش آب
                  </li>
                </ul>
              </div>
              <button className={`${styles.LuSend2} mt-3`}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    انضم الآن <FaArrowRight />
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
              <div data-aos="fade-up" data-aos-duration="500">
                <Image className="img-fluid" src={aboutFirstSectionImg} />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className={styles.aboutFirstsection}
                data-aos="fade-right"
                data-aos-offset="300"
              >
                <h2 className="mt-5">
                  الخدمات المصرفية الرقمية
                  <br /> كاش آب
                </h2>
                <div className={styles.iconFlexBox}>
                  <div>
                    <h5>لنحوّل تجربة المصرفية...</h5>
                    <span className="mt-2">
                      مع نظام دفع شامل صُمم لتوفير تجربة نقدية سهلة وآمنة
                      ومريحة.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className={styles.getStartedSection}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>ابدأ اليوم</h4>
              <p>هل سئمت من التطبيقات المصرفية البطيئة؟ نحن نبني تطبيقات رائعة.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>
                    عملاؤك يستحقون تجربة مصرفية عبر الهاتف المحمول تنطلق
                    بسرعة، لا تجربة عالقة في العصور المظلمة. نحن نصنع تطبيقات
                    قوية وسهلة الاستخدام:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      حماية المعلومات كما لو كانت في حصن (ولكن مع واي فاي أفضل).
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      جعل إدارة الشؤون المالية أسهل من انزلاق سلس.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      جعل إدارة الشؤون المالية أسهل من انزلاق سلس.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox}  ${styles.starteRight}`}>
                <ul>
                  <h5>
                    نحن لسنا مجرد مطورين، نحن أبطال المصارف. فريقنا من
                    السحرة المصممين، و"نينجا" الكودات، وعقولنا الاستراتيجية
                    تتضافر لإنشاء:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>تطبيقات ممتعة للاستخدام، ليست عبئًا.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      ميزات تجعل التعامل مع المصارف سهلة، لا معركة.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      حلول تحول العملاء إلى معجبين متحمسين.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Testimonials />
      <Footer />
    </>
  );
}

export default page;
