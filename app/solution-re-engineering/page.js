import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/innovation-1.JPG";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/man-trading-browsing.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"إعادة هندسة الحلول"}
        tagLine={false}
        // tagLine2={"أقوى رابط."}
        Des={false}
      />
      <section className="d-lg-block d-none mb-5 mt-5">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  إعادة هندسة حلول المؤسسات | استراتيجية تكنولوجيا المعلومات
                  لنقل التطبيقات القديمة إلى التكنولوجيا الحديثة
                </h4>
                <p>
                  تقوم FinTechify بتحديث منصات البرمجيات الخاصة بك، من خلال أخذ
                  متطلباتك الحالية وتحويلها إلى حلول أعمال ديناميكية متطورة،
                  باستخدام أحدث اتجاهات وأساليب التحويل التكنولوجي.
                </p>
                <h5>إعادة هندسة العمليات التجارية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    بدء التغيير
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تشخيص العملية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إعادة تصميم العمليات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إعادة البناء
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    مراقبة العملية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تصور العمليات الجديدة
                  </li>
                </ul>
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
                <Image src={img1} className="img-fluid" />
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
                <Image src={img1} className="img-fluid" />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  إعادة هندسة حلول المؤسسات | استراتيجية تكنولوجيا المعلومات
                  لنقل التطبيقات القديمة إلى التكنولوجيا الحديثة
                </h4>
                <p>
                  تقوم FinTechify بتحديث منصات البرمجيات الخاصة بك، من خلال أخذ
                  متطلباتك الحالية وتحويلها إلى حلول أعمال ديناميكية متطورة،
                  باستخدام أحدث اتجاهات وأساليب التحويل التكنولوجي.
                </p>
                <h5>إعادة هندسة العمليات التجارية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    بدء التغيير
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تشخيص العملية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إعادة تصميم العمليات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إعادة البناء
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    مراقبة العملية
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تصور العمليات الجديدة
                  </li>
                </ul>
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

      <section className={styles.aboutFirst}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="2000">
                <Image className="img-fluid" src={img} />
              </div>
            </div>
            <div className="col-lg-6 px-4">
              <div
                className={styles.aboutFirstsection}
                data-aos="fade-right"
                data-aos-offset="300"
              >
                <h2>لماذا تعتبر Fintechify الأفضل في خدمات التكامل</h2>
                <p className={styles.para}>
                  ما هي خططك للارتقاء بأعمالك إلى المستوى التالي مع Fintechify؟
                  فريقنا الخبير في خدمات التكامل يمكنه دعمك ودعم عملائك عبر
                  السوق. حلول مصممة للتوسع، تتكيف بسهولة مع نمو أعمالك. والأهم
                  من ذلك، أن الأمان هو أولويتنا القصوى. نحن نطبق تدابير قوية
                  لحماية بياناتك القيمة طوال عملية التكامل.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>المؤسسات المالية</h3>
                    <span>
                      يمكن لخدمات التكامل من Fintechify ربط الأنظمة القديمة
                      بالحلول المالية الحديثة، مما يتيح ميزات مثل اكتشاف
                      الاحتيال في الوقت الفعلي، وتبسيط معالجة القروض، وتحليل
                      بيانات العملاء. هذا يترجم إلى معاملات أسرع، وتحسين تجربة
                      العملاء، وإدارة مخاطر أفضل.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>الأعمال التجارية الإلكترونية</h3>
                    <span>
                      يمكن لخدمات التكامل ربط المتاجر الإلكترونية بأنظمة إدارة
                      المخزون، بوابات الدفع، ومنصات التسويق. مما يسمح بتنفيذ
                      الطلبات تلقائيًا، وتحديثات المخزون في الوقت الفعلي، وحملات
                      تسويقية مستهدفة، مما يؤدي إلى زيادة المبيعات وتحسين رضا
                      العملاء.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إدارة سلسلة التوريد</h3>
                    <span>
                      يمكن أن يؤدي تكامل الأنظمة المتباينة عبر سلسلة التوريد إلى
                      تحسين الرؤية في مستويات المخزون، وتحسين اللوجستيات، وتسهيل
                      التواصل في الوقت الفعلي مع الموردين والموزعين. هذا يترجم
                      إلى تقليل التكاليف، وتسريع أوقات التسليم، وتحسين الكفاءة
                      العامة.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>مقدمو الرعاية الصحية</h3>
                    <span>
                      يمكن أن يؤدي ربط أنظمة السجلات الصحية الإلكترونية مع جداول
                      المواعيد، وبرامج الفواتير، وبوابات المرضى إلى تبسيط المهام
                      الإدارية، وتحسين دقة البيانات، وتعزيز رعاية المرضى.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>التصنيع</h3>
                    <span>
                      يمكن لخدمات التكامل ربط آلات خطوط الإنتاج مع برامج تخطيط
                      الإنتاج وأنظمة تخطيط موارد المؤسسة (ERP). هذا يسمح
                      بالمراقبة في الوقت الفعلي لخطوط الإنتاج، والصيانة
                      التنبؤية، وتحسين تخصيص الموارد، مما يؤدي إلى زيادة
                      الإنتاجية وتقليل التوقفات.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.processSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <h4>خبرتنا في خدمات التكامل</h4>

            <div className={styles.flexBoxes}>
              <div className="col-lg-5">
                <div className={styles.textOne}>
                  <p>
                    تعرف على كيفية تحسين جميع عملياتك من خلال برامج التكامل
                    السهلة والفعالة التي يمكن تخصيصها لتناسب احتياجات عملك
                    تمامًا. نقدم لك حلولًا جديدة من خلال التكنولوجيا المتطورة
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

              <div className="col-lg-7">
                <div className={styles.process}>
                  <div className={styles.boxCircle}>
                    <h2>التخطيط</h2>
                    <h6>
                      تخصيص الأنظمة القديمة لتتناسب مع بيئات العمل المتطورة.
                    </h6>
                  </div>
                  <div className={styles.boxCircle}>
                    <h2>التنفيذ</h2>
                    <h6>
                      دمج الأنظمة لإحداث تغييرات إيجابية ملموسة في العمليات
                      التجارية.
                    </h6>
                  </div>
                  <div className={styles.boxCircle}>
                    <h2>القياس</h2>
                    <h6>مراقبة وتحليل الأداء لضمان النجاح المستمر.</h6>
                  </div>
                  <div className={styles.boxCircle}>
                    <h2>التحسين</h2>
                    <h6>التحسين المستمر لتحقيق نتائج أفضل.</h6>
                  </div>
                </div>
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
