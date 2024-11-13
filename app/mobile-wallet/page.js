import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/phone-that-has-word-go-go-it-scaled.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/phone-screen-with-dollar-sign-it-scaled.JPG";
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
        head={"محفظة الهاتف المحمول"}
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
                <h4>محفظة الهاتف المحمول</h4>
                <p>
                  نظام دفع كامل لجميع أنواع المدفوعات والتحويلات. سواء كنت تدير
                  شركة خدمات مالية أو شبكة تجزئة أو مشغل اتصالات – ستأخذك
                  حلول المحفظة الإلكترونية إلى المستوى التالي، مما يتيح لك
                  الاستفادة من أحدث الاتجاهات التقنية.
                </p>
                <h5 className="mt-5">محفظة الهاتف المحمول في جوهرها</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إيداع
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    المدفوعات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التحويلات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    سحب
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
                <h4>محفظة الهاتف المحمول</h4>
                <p>
                  نظام دفع كامل لجميع أنواع المدفوعات والتحويلات. سواء كنت تدير
                  شركة خدمات مالية أو شبكة تجزئة أو مشغل اتصالات – ستأخذك
                  حلول المحفظة الإلكترونية إلى المستوى التالي، مما يتيح لك
                  الاستفادة من أحدث الاتجاهات التقنية.
                </p>
                <h5 className="mt-5">محفظة الهاتف المحمول في جوهرها</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إيداع
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    المدفوعات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التحويلات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    سحب
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
                  محفظة الهاتف المحمول | منصة معالجة الأموال الإلكترونية
                </h2>
                <div className={styles.iconFlexBox}>
                  <div>
                    <h5>لنمكّن التجارة...</h5>
                    <span className="mt-2">
                      من خلال منصة معالجة الأموال الإلكترونية التي تمنحك
                      الفرصة لبناء عملك في مجال الدفع دون الحاجة للبدء من
                      الصفر.
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
              <p>هل تعبت من التطبيقات المصرفية غير المتقنة؟ نحن نبني صواريخ.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>
                    يستحق عملاؤك تجربة مصرفية عبر الهاتف المحمول تأخذهم إلى
                    آفاق جديدة، لا تجربة عالقة في العصور القديمة. تقوم
                    Fintechify بإنشاء تطبيقات قوية وسهلة الاستخدام التي:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      تحمي المعلومات كما لو كانت في حصن (ولكن مع Wi-Fi أفضل).
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      تجعل إدارة الأموال أكثر سلاسة من الانزلاق على سطح زجاجي.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      تجعل إدارة الأموال أكثر سلاسة من الانزلاق على سطح زجاجي.
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
                    السحرة المصممين، و ninjas البرمجة، و العباقرة الاستراتيجيين
                    ينضمون معًا لإنشاء:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>تطبيقات ممتعة للاستخدام، وليست مهمة شاقة.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      ميزات تجعل المصرفية أسهل، وليس ساحة معركة.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      حلول تحول العملاء إلى معجبين متحمسين، وليس مستخدمين
                      محبطين.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles.startedBottomSection}>
                لا تقدموا مجرد مصرفية، كونوا ثورة المصرفية. تعاونوا مع
                Fintechify وشاهدوا تطبيقكم المحمول يحلق! <br />
                جاهزون لإطلاق تطبيقكم المصرفي إلى الفضاء؟ نحن هنا من أجلكم!
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
