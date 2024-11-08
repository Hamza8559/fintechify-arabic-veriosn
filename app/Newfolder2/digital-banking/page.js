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
        head={"البنك الرقمي"}
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
                <h4>منصة البنك الرقمي الخاصة بنا</h4>
                <h6>
                  <b>“كاش آب”</b>
                </h6>
                <p>
                  منصة موحدة تضم الخدمات البنكية، التأمين، والاستثمارات. تمكن
                  العملاء من القيام بمعاملات بنكية تشمل سداد الفواتير، تحويل
                  الأموال، القروض المصغرة، تعبئة الرصيد وغيرها.
                </p>
                <h5 className="mt-5">المكونات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تطبيق وموقع كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    منصة الدفع الخاصة بكاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    نظام توكينيزاشن كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    واجهة برمجة التطبيقات الخاصة بكاش آب
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
                <h4>منصة البنك الرقمي الخاصة بنا</h4>
                <h6>
                  <b>“كاش آب”</b>
                </h6>
                <p>
                  منصة موحدة تضم الخدمات البنكية، التأمين، والاستثمارات. تمكن
                  العملاء من القيام بمعاملات بنكية تشمل سداد الفواتير، تحويل
                  الأموال، القروض المصغرة، تعبئة الرصيد وغيرها.
                </p>
                <h5 className="mt-5">المكونات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تطبيق وموقع كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    منصة الدفع الخاصة بكاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    نظام توكينيزاشن كاش آب
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    واجهة برمجة التطبيقات الخاصة بكاش آب
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
                  البنك الرقمي
                  <br /> كاش آب
                </h2>
                <div className={styles.iconFlexBox}>
                  <div>
                    <h5>لنحوّل الخدمات البنكية...</h5>
                    <span className="mt-2">
                      مع نظام دفع شامل مصمم لتقديم تجربة آمنة ومريحة وسلسة.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.getStartedSection}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="اقتباسات" />
              <h4>ابدأ اليوم</h4>
              <p>هل مللت من التطبيقات البنكية التقليدية؟ نحن نبني تكنولوجيا المستقبل.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>
                    عملاؤك يستحقون تجربة بنكية متطورة وليست متأخرة. نحن نبني
                    تطبيقات قوية وسهلة الاستخدام والتي:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      تحمي المعلومات مثل "فورت نوكس" (لكن مع واي فاي أفضل).
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      تسهل إدارة الأموال بشكل سلس.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox}  ${styles.starteRight}`}>
                <ul>
                  <h5>
                    نحن لسنا مجرد مطورين، نحن أبطال في الخدمات البنكية. فريقنا
                    من خبراء التصميم والبرمجة والاستراتيجيات ينشئ:
                  </h5>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>تطبيقات ممتعة وسهلة الاستخدام.</span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      ميزات تجعل التعامل البنكي بسيطًا وسلسًا.
                    </span>
                  </li>
                  <li className="text-start">
                    <IoCheckmarkSharp />
                    <span>
                      حلول تجعل العملاء معجبين وليسوا محبطين.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={styles.startedBottomSection}>
                لا تقدم مجرد بنك، كن الثورة البنكية. شارك مع Fintechify وشاهد
                تطبيقك يرتقي إلى السماء! <br />
                هل أنت جاهز لإطلاق تطبيقك البنكي إلى آفاق جديدة؟ نحن هنا لنجعله
                حقيقة!
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default page;
