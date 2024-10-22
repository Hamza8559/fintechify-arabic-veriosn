import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img1 from "../components/assets/images/finopsimg.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"خدمات FinOps"}
        tagLine={false}
        tagLine2={"قم بتحسين السحابة لتحقيق أقصى أداء وأقل تكاليف."}
        Des={false}
      />
      <section className="mb-5 mt-5 d-lg-block d-none">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  كل ما تحتاجه <br /> لخدمات FinOps.
                </h4>
                <p>
                  تكافح مع الفوضى المالية؟ تخلص من جداول البيانات! Fintechify هو فريق التدخل المالي الخاص بك، يحطم التعقيد ويعمل على تحسين صحة عملك. سواء كنت شركة ناشئة أو مؤسسة كبيرة، نحن نصمم خطة فريدة لك. انضم إلى الثورة وافتح عمليات مبسطة، صحة تجارية مرتفعة، وحرية من الأعباء المالية. سجل اليوم!
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
                data-aos-duration="500"
              >
                <Image className="img-fluid" src={img1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 d-lg-none d-block">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image className="img-fluid" src={img1} />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  كل ما تحتاجه <br /> لخدمات FinOps.
                </h4>
                <p>
                  تكافح مع الفوضى المالية؟ تخلص من جداول البيانات! Fintechify هو فريق التدخل المالي الخاص بك، يحطم التعقيد ويعمل على تحسين صحة عملك. سواء كنت شركة ناشئة أو مؤسسة كبيرة، نحن نصمم خطة فريدة لك. انضم إلى الثورة وافتح عمليات مبسطة، صحة تجارية مرتفعة، وحرية من الأعباء المالية. سجل اليوم!
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

      <section
        className={styles.processSection}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container-fluid px-lg-5">
          <div className="row">
            <h4 className="text-center">شاهد أين تعمل خدمة FinOps</h4>

            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0 mt-3">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.FinBlueUpperBox}`}
                >
                  <ul>
                    <h5>التخطيط والتحليل المالي</h5>
                    <p>
                      مللت من العمل دون رؤية واضحة لتمويلك؟ خدمات التخطيط والتحليل المالي لدينا هي المفتاح للحصول على وضوح مالي واتخاذ قرارات مبنية على التحليل. <br />
                      نحن لسنا مجرد محللين ماليين، نحن استراتيجيون ماليون.
                    </p>{" "}
                  </ul>

                  <ul>
                    <h5>رؤية الأشعة السينية المالية</h5>
                    <p>
                      احصل على رؤى عميقة حول أدائك المالي، واكتشاف الفرص الخفية ومجالات التحسين.
                    </p>
                  </ul>
                  <ul>
                    <h5>القرارات المبنية على البيانات</h5>
                    <p>
                      اتخذ قرارات بثقة بناءً على التحليل المالي القوي، وليس على الحدس.
                    </p>
                  </ul>
                  <ul>
                    <h5>استراتيجيات مخصصة</h5>
                    <p>
                      نحن لا نقدم خططًا جاهزة. استراتيجيتك في التخطيط والتحليل المالي مخصصة لتحقيق أهداف عملك الفريدة.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.FinWhiteUpperBox}`}
                >
                  <ul>
                    <h5>التخطيط المستقبلي المضمون</h5>
                    <p>
                      نحن نأخذ في الاعتبار اتجاهات السوق والمخاطر المحتملة، مما يساعدك على التنقل في عالم غير مؤكد بثقة. <br />
                      توقف عن التساؤل "ماذا لو؟" وابدأ في معرفة الحقيقة.
                    </p>
                  </ul>
                  <ul>
                    <h5>حلول إدارة التكلفة</h5>
                    <p>
                      هل تشعر بضيق في صافي أرباحك؟ حلول إدارة التكلفة لدينا هي سلاحك السري لتعظيم الربحية دون التضحية بالجودة أو الكفاءة. <br />
                      نحن النينجا المخفيين في قطع التكاليف الذين كنت تبحث عنهم.
                    </p>{" "}
                  </ul>
                  <ul>
                    <h5>النماذج الأولية</h5>
                    <p>
                      نماذج تفاعلية تسمح لك بتجربة التطبيق قبل بنائه.
                    </p>
                  </ul>
                  <ul>
                    <h5>مصنع الربح</h5>
                    <p>
                      حرر الموارد القيمة وزد من ربحيتك، مما يتيح لك إعادة استثمارها في النمو.
                    </p>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.FinWhiteBottomBox}`}
                >
                  <ul>
                    <h5>خبراء الكفاءة.</h5>
                    <p>
                      نحن نعمل على تبسيط العمليات وتحسين العمليات، مما يضمن حصولك على أقصى استفادة من كل دولار تنفقه.
                    </p>
                  </ul>
                  <ul>
                    <h5>القرارات المبنية على البيانات</h5>
                    <p>
                      استراتيجياتنا في خفض التكاليف مدعومة بالبيانات الحقيقية، وليس على الحدس. <br />
                      توقف عن ترك التكاليف المرتفعة تقيدك.
                    </p>
                  </ul>
                  <ul>
                    <h5>التمويل والتنبؤات</h5>
                    <p>
                      هل تشعر بالضياع في ضباب مالي؟ خدمات إعداد الميزانيات والتنبؤات لدينا هي منارتك، لتوجيهك نحو مستقبل واضح ومزدهر. <br />
                      نحن لسنا مجرد محللين ماليين، نحن مساعديك الماليين.
                    </p>
                  </ul>
                  <ul>
                    <h5>الميزانيات الواقعية</h5>
                    <p>
                      تخلص من التخمينات. نتعاون معك لبناء ميزانيات تعكس الواقع، وليس التمنيات.
                    </p>
                  </ul>
                  <ul>
                    <h5>التنبؤات الدقيقة</h5>
                    <p>
                      شاهد الطريق المالي أمامك بتوقعات واضحة ودقيقة، مما يسمح لك بالتخطيط للنمو ومواجهة التحديات.
                    </p>
                  </ul>
                  <ul>
                    <h5>القرارات المبنية على البيانات</h5>
                    <p>
                      رؤانا تستند إلى بيانات حقيقية، مما يمنحك الثقة لاتخاذ خيارات مالية استراتيجية.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.FinBlueBottomBox}`}
                >
                  <ul>
                    <h5>خريطة طريق النمو</h5>
                    <h5>حان وقت الاحتفال!</h5>
                    <p>
                      استخدم ميزانيتك وتوقعاتك كخريطة لرسم مسارك نحو نمو مستدام ومربح. <br />
                      توقف عن أن تكون تفاعليًا، وابدأ بأن تكون استباقيًا.
                    </p>
                  </ul>
                  <ul>
                    <h5>إدارة التدفق النقدي</h5>
                    <p>
                      هل تدفقاتك النقدية تبدو مثل رحلة برية بدلاً من رحلة سلسة؟ خبرتنا في إدارة التدفق النقدي هي تذكرتك للاستقرار المالي وتقليل المخاطر. <br />
                      نحن لسنا مجرد محللين ماليين، نحن مهندسي تدفقك النقدي.
                    </p>
                  </ul>
                  <ul>
                    <h5>دورة نقدية محسنة</h5>
                    <p>
                      نحن نبسط تدفق النقد داخل وخارج عملك، مما يضمن تدفقًا ثابتًا عند الحاجة إليه أكثر.
                    </p>
                  </ul>
                  <ul>
                    <h5>تحسين السيولة</h5>
                    <p>
                      وداعًا لفترات الجفاف في التدفق النقدي. سنساعدك في الحفاظ على احتياطي صحي وتجنب الضغوط المالية.
                    </p>
                  </ul>
                  <ul>
                    <h5>الاستقرار المالي.</h5>
                    <p>
                      مع تدفق نقدي يمكن التنبؤ به، يمكنك مواجهة العواصف وانتهاز الفرص بثقة.
                    </p>
                  </ul>
                  <ul>
                    <h5>القرارات المبنية على البيانات</h5>
                    <p>
                      استراتيجياتنا مدعومة بالبيانات الحقيقية، وليس على التخمين، مما يمنحك السيطرة على مستقبلك المالي.
                    </p>
                  </ul>
                  <ul>
                    <h5>لا تدع المخاوف المالية تمنعك.</h5>
                  </ul>
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
        <div className="container">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>ابدأ اليوم</h4>
              <p className="text-center">
                ابدأ رحلتك نحو التمكين المالي ونمو الأعمال الآن! تواصل معنا اليوم لاكتشاف كيف يمكن لخدمات FinOps أن تدفع أعمالك نحو النجاح. لا تنتظر، اتخذ الخطوة الأولى نحو مستقبل أكثر إشراقًا!
              </p>
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
