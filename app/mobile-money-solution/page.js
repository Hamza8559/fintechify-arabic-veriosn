import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/multi-exposure-mans-hand-holding-using-digital-device-data-theme-drawing-innovation-concept-scaled.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/generating-business-from-smartphone-scaled.jpg";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLineHeight } from "react-icons/ci";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"حلول الأموال عبر الهاتف المحمول"}
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
                <h4>حلول الأموال عبر الهاتف المحمول</h4>
                <p>
                  مع كونكسوس – حل الأموال عبر الهاتف المحمول لدينا؛ نحن نمكّن مقدمي الخدمات من توفير مجموعة كاملة من المنتجات لتقديم خدمات مالية شاملة للأشخاص الذين لا يتعاملون مع البنوك.
                </p>
                <h5 className="mt-5">كونكسوس في جوهره</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة النظام البيئي الكامل للأموال عبر الهاتف المحمول
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    منتجات وميزات وحدود وتكوينات KYC واسعة
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    يدعم النماذج المغلقة، شبه المغلقة، والمفتوحة
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    يسمح بإنشاء سلسلة توزيع وترتيبات عمولات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التكامل مع وسائط مالية تسمح بالتكامل مع الكيانات المالية والتطبيقات الخارجية لتجميع الخدمات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التحليلات والتقارير
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    قناة المعاملات (USSD، الويب المحمول، التطبيقات الأصلية، الويب وAPIs)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة مخزون بطاقات مسبقة الدفع وتوزيعها
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تكامل مع CRM، CMS، سير العمل وإدارة الوثائق
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
                <h4>حلول الأموال عبر الهاتف المحمول</h4>
                <p>
                  مع كونكسوس – حل الأموال عبر الهاتف المحمول لدينا؛ نحن نمكّن مقدمي الخدمات من توفير مجموعة كاملة من المنتجات لتقديم خدمات مالية شاملة للأشخاص الذين لا يتعاملون مع البنوك.
                </p>
                <h5 className="mt-5">كونكسوس في جوهره</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة النظام البيئي الكامل للأموال عبر الهاتف المحمول
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    منتجات وميزات وحدود وتكوينات KYC واسعة
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    يدعم النماذج المغلقة، شبه المغلقة، والمفتوحة
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    يسمح بإنشاء سلسلة توزيع وترتيبات عمولات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التكامل مع وسائط مالية تسمح بالتكامل مع الكيانات المالية والتطبيقات الخارجية لتجميع الخدمات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    التحليلات والتقارير
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    قناة المعاملات (USSD، الويب المحمول، التطبيقات الأصلية، الويب وAPIs)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة مخزون بطاقات مسبقة الدفع وتوزيعها
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تكامل مع CRM، CMS، سير العمل وإدارة الوثائق
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
                <h2 className="mt-5">
                  كونكسوس | حلول الأموال
                  <br /> عبر الهاتف المحمول
                </h2>

                <h5 className="mt-3">دعونا نجعل الناس سعداء…</h5>
                <ul className={styles.ulPoints}>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    خدمات الوكلاء المصرفية
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    الخدمات المصرفية عبر الهاتف المحمول
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    شحن الهاتف المحمول ودفع الفواتير
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    المحفظة الإلكترونية عبر الهاتف المحمول
                  </li>
                  <li className="mt-2">
                    <MdOutlineKeyboardDoubleArrowRight />
                    التذاكر عبر الهاتف المحمول
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
              <Image src={QoutesImg} alt="اقتباسات" />
              <h4>ابدأ اليوم</h4>
              <p>هل سئمت من التطبيقات المصرفية المعقدة؟ نحن نبني صواريخ.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeftBox}`}>
                <h5>الخطوة 1</h5>
                <h3>اعرف كيف يمكننا مساعدتك</h3>
                <p>
                  إذا كنت ترغب في معرفة المزيد حول الحلول المالية عبر الهاتف المحمول، فلا تتردد في
                  <span className="startBtn">
                    {" "}
                    الاتصال بنا
                  </span>
                  اليوم. ستكون هناك مناقشة حول الطرق الأكثر تأثيرًا لتلبية احتياجاتك عبر الهاتف المحمول.
                </p>
                <button className={`${styles.LuSend} mt-4`}>
                  <Link href="/contact-us" passHref>
                    <span style={{ textDecoration: "none", color: "white" }}>
                      اتصل بنا الآن <IoCheckmarkSharp />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedRightBox}`}>
                <h5>الخطوة 2</h5>
                <h3>حدد خياراتك</h3>
                <p>
                  في هذه الخطوة، نساعدك في تحديد أفضل الحلول المالية عبر الهاتف المحمول. لدينا
                  مجموعة متنوعة من الخيارات لتناسب متطلباتك الخاصة.
                </p>
                <button className={`${styles.LuSend} mt-4`}>
                  <Link href="/contact-us" passHref>
                    <span style={{ textDecoration: "none", color: "white" }}>
                      اتصل بنا الآن <IoCheckmarkSharp />
                    </span>
                  </Link>
                </button>
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
