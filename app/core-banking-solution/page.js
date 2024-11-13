import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/cyber-security.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/digital-marketing.jpg";
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
        head={"حلول المصرفية الأساسية"}
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
                <h4>حلول المصرفية الأساسية</h4>
                <p>
                  Curo CBS هو المنتج الرئيسي لشركة FinTechify، وهو منصة مصرفية
                  أساسية متعددة العملات على شبكة الإنترنت، غني بالوظائف ويغطي
                  جميع عمليات المصرفية بدءًا من الودائع الأساسية والقروض
                  والتمويل الأصغر وصولاً إلى الخزانة المتقدمة والتحويلات
                  والخدمات.
                </p>
                <h5 className="mt-5">مميزات نظام Curo CBS</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التكوينات الأساسية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المكتب الأمامي
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المالية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة القروض
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    رعاية العملاء
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الوثائق
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    بيانات الحساب
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
                <h4>حلول المصرفية الأساسية</h4>
                <p>
                  Curo CBS هو المنتج الرئيسي لشركة FinTechify، وهو منصة مصرفية
                  أساسية متعددة العملات على شبكة الإنترنت، غني بالوظائف ويغطي
                  جميع عمليات المصرفية بدءًا من الودائع الأساسية والقروض
                  والتمويل الأصغر وصولاً إلى الخزانة المتقدمة والتحويلات
                  والخدمات.
                </p>
                <h5 className="mt-5">مميزات نظام Curo CBS</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التكوينات الأساسية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المكتب الأمامي
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المالية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة القروض
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    رعاية العملاء
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الوثائق
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    بيانات الحساب
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
            <div className="col-lg-6 px-5">
              <div
                className={styles.aboutFirstsection}
                data-aos="fade-right"
                data-aos-offset="300"
              >
                <h2 className="mt-5">Curo CBS | حلول المصرفية الأساسية</h2>

                <ul className={styles.ulPoints}>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المجموعة العلامة التجارية
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    تقارير لوحة التحكم التنفيذية
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الحسابات
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة العمليات التجارية
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    تكوينات النظام
                  </li>

                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الوثائق المتكاملة
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الخدمات المتكاملة للعملاء
                  </li>
                </ul>
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
              <p>هل سئمت من تطبيقات المصرفية المرهقة؟ نحن نبني لك تكنولوجيا متقدمة.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>
                    عملاؤك يستحقون تجربة مصرفية متنقلة فائقة السهولة، وليس تجربة مرهقة.
                    Fintechify تقدم تطبيقات قوية وسهلة الاستخدام تشمل:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      حماية المعلومات على مستوى عالي (مع اتصال واي فاي ممتاز).
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      إدارة مالية مريحة وسلسة.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.starteRight}`}>
                <ul>
                  <h5>
                    Fintechify توفر لك مزايا تحكم فورية وإمكانيات تتبع:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>أدوات تحكم تتضمن حسابات مصرفية شاملة.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>أدوات إدارة التكاليف والميزانية.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>تقارير مالية متقدمة.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>تدفقات نقدية في الوقت الفعلي.</span>
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
