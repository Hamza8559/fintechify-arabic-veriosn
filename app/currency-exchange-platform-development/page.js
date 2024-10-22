import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/currencyexchangeimg.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"تطوير منصة تبادل العملات"}
        tagLine={false}
        tagLine2={"مستقبل تبادل العملات هنا."}
        Des={false}
      />
      <section className="d-lg-block d-none mb-5 mt-5">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>تحسين استراتيجيات تبادل العملات الخاصة بك</h4>

                <p>
                  في فينتشيفاين، نحن متحمسون لبناء منصات تبادل العملات التي
                  تكون سهلة الاستخدام وتنمو مع عملك وتقدم ميزات قوية لتجربة
                  تبادل سلسة. مع سنوات من الخبرة في تطوير التكنولوجيا المالية،
                  نحن نفهم تفاصيل تبادل العملات وملتزمون بإنشاء حلول تتجاوز
                  التوقعات.
                </p>
              </div>
              <button className={styles.LuSend2}>
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
                data-aos-duration="2000"
              >
                <Image className="img-fluid" src={img} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-lg-none d-block mb-5 mt-5">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image className="img-fluid" src={img} />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>تحسين استراتيجيات تبادل العملات الخاصة بك</h4>

                <p>
                  في فينتشيفاين، نحن متحمسون لبناء منصات تبادل العملات التي
                  تكون سهلة الاستخدام وتنمو مع عملك وتقدم ميزات قوية لتجربة
                  تبادل سلسة. مع سنوات من الخبرة في تطوير التكنولوجيا المالية،
                  نحن نفهم تفاصيل تبادل العملات وملتزمون بإنشاء حلول تتجاوز
                  التوقعات.
                </p>
              </div>
              <button className={styles.LuSend2}>
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

      <section className={styles.processSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <h4 className="text-center">
              الميزات الرئيسية لخدمة تطوير <br />
              منصة تبادل العملات لدينا:
            </h4>
            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox}  ${styles.blueBg} ${styles.currencyBlueUpperBox}`}
                >
                  <ul>
                    <h5>ميزات منصة تبادل العملات لدينا</h5>
                    <p>حلول مخصصة</p>
                  </ul>
                  <ul>
                    <h5>مصممة خصيصًا لاحتياجات التبادل الخاصة بك</h5>
                    <p>
                      نحن لا نقدم حلول جاهزة للجميع. نحن نستمع إلى أهداف عملك
                      ونبني منصة تبادل العملات التي تناسبك تمامًا. تحتاج إلى
                      محول سريع؟ تم. منصة تداول قوية؟ لقد قمنا بتغطية ذلك.
                    </p>
                  </ul>
                  <ul>
                    <h5>أموالك، أولويتنا</h5>
                    <p>
                      نحن ندرك أن المال يدور حول الثقة. لهذا السبب تُبنى
                      منصاتنا على أساس من الأمان العالي، مع تشفير متقدم،
                      ومصادقة ثنائية، والامتثال للمعايير الرائدة في الصناعة.
                      أموال وبيانات المستخدمين في أمان.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox}  ${styles.blueBg} ${styles.currencyWhiteBottomBox}`}
                >
                  <ul>
                    <h5>اتصالات سهلة</h5>
                    <p>
                      لا مزيد من التعامل مع أنظمة متعددة! منصاتنا تتكامل بسلاسة
                      مع جميع الشركاء الماليين لديك، من واجهات برمجة التطبيقات
                      إلى البنوك وبوابات الدفع. هذا يعني أنك يمكنك تقديم نطاق
                      أوسع من العملات وخيارات الدفع بدون أي تعقيدات.
                    </p>
                  </ul>
                  <ul>
                    <h5>التوسع بثقة</h5>
                    <p>
                      لا تدع منصتك تقيدك. نحن نبني مع مراعاة التوسع، لذا يمكن
                      لمنصة تبادل العملات الخاصة بك أن تنمو مع ازدهار عملك. عدد
                      أكبر من المستخدمين، المزيد من الخدمات، لا مشكلة. ستظل
                      تحتفظ بنفس الأداء السلس الذي تحبه.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection} data-aos="fade-up">
        <div className="container px-lg-5 text-center">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>ابدأ اليوم</h4>
              <h5 className="text-center">
                هل أنت جاهز لبدء خدمة تبادل العملات الخاصة بك أو تحسين منصتك
                الحالية؟ مع خبرتنا الواسعة ومواردنا، نحن مستعدون لتحويل رؤيتك
                إلى حقيقة. تواصل معنا اليوم لمعرفة المزيد عن خدمة تطوير منصة
                تبادل العملات لدينا واكتشاف كيف يمكننا دفعك نحو تحقيق أهداف
                عملك.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}

export default page;
