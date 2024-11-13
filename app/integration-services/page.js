import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/integrationimg.webp";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/integration.jpg";
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"خدمات التكامل"}
        tagLine={false}
        tagLine2={"موصل الأمور النهائي."}
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
                  اختبر عمليات متواصلة لأداء مثالي مع خدمات التكامل من Fintechify.
                </h4>
                <p>
                  تدرك Fintechify أن الاتصالات السلسة هي مفتاح النجاح في العالم الرقمي الحالي.
                  لهذا السبب نقدم خدمات التكامل المصممة لهدم صوامع البيانات وتسريع سير عملك.
                  تخيل أن أنظمتك تعمل معًا في وئام تام، مما يفتح مستوى جديدًا من الكفاءة لعملك.
                  توقف عن الصراع مع التكنولوجيا القديمة. دع خدمات التكامل من Fintechify تكون سلاحك
                  السري لتحقيق الأداء الأمثل.
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
                  اختبر عمليات متواصلة لأداء مثالي مع خدمات التكامل من Fintechify.
                </h4>
                <p>
                  تدرك Fintechify أن الاتصالات السلسة هي مفتاح النجاح في العالم الرقمي الحالي.
                  لهذا السبب نقدم خدمات التكامل المصممة لهدم صوامع البيانات وتسريع سير عملك.
                  تخيل أن أنظمتك تعمل معًا في وئام تام، مما يفتح مستوى جديدًا من الكفاءة لعملك.
                  توقف عن الصراع مع التكنولوجيا القديمة. دع خدمات التكامل من Fintechify تكون سلاحك
                  السري لتحقيق الأداء الأمثل.
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
                <h2>لماذا Fintechify هي الأفضل لخدمات التكامل</h2>
                <p className={styles.para}>
                  ما هي خططك حول نقل عملك إلى المستوى التالي مع Fintechify؟
                  يمكن لفريقنا المتخصص في خدمات التكامل دعمك أنت وعملائك في السوق.
                  حلول مصممة للتوسع، تتكيف بسهولة مع توسع عملك. والأهم من ذلك،
                  أن الأمان هو أولويتنا القصوى. نقوم بتنفيذ تدابير قوية لحماية بياناتك
                  القيمة طوال عملية التكامل.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>المؤسسات المالية</h3>
                    <span>
                      يمكن لخدمات التكامل من Fintechify ربط الأنظمة القديمة
                      مع الحلول المالية الحديثة، مما يتيح ميزات مثل كشف الاحتيال
                      في الوقت الفعلي، معالجة القروض السلسة، والرؤى المستندة إلى البيانات للعملاء.
                      وهذا يؤدي إلى معاملات أسرع، وتحسين تجربة العملاء، وإدارة أفضل للمخاطر.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>أعمال التجارة الإلكترونية</h3>
                    <span>
                      يمكن لخدمات التكامل ربط المتاجر الإلكترونية مع أنظمة إدارة المخزون،
                      بوابات الدفع، ومنصات التسويق. وهذا يتيح التنفيذ الآلي للطلبات،
                      تحديثات المخزون في الوقت الفعلي، وحملات تسويقية موجهة،
                      مما يؤدي إلى زيادة المبيعات وتحسين رضا العملاء.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إدارة سلسلة التوريد</h3>
                    <span>
                      ربط الأنظمة المتفرقة عبر سلسلة التوريد يمكن أن يحسن الرؤية في مستويات المخزون،
                      تحسين اللوجستيات، وتسهيل التواصل في الوقت الفعلي مع الموردين والموزعين.
                      وهذا يؤدي إلى خفض التكاليف، تسريع أوقات التسليم، وتحسين الكفاءة الإجمالية.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>مقدمو الرعاية الصحية</h3>
                    <span>
                      ربط أنظمة السجلات الصحية الإلكترونية (EHR) مع جداول المواعيد،
                      برمجيات الفوترة، وبوابات المرضى يمكن أن يبسط المهام الإدارية،
                      يحسن دقة البيانات، ويعزز الرعاية الصحية للمرضى.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>التصنيع</h3>
                    <span>
                      يمكن لخدمات التكامل ربط آلات المصنع بأنظمة تخطيط الإنتاج وبرمجيات
                      تخطيط موارد المؤسسات (ERP). وهذا يتيح مراقبة في الوقت الفعلي لخطوط الإنتاج،
                      الصيانة التنبؤية، وتحسين تخصيص الموارد، مما يؤدي إلى زيادة الإنتاجية
                      وتقليل فترات التوقف.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <h4 className="text-center">خبرتنا في خدمات التكامل</h4>

            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0 mt-3">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.integBlueUpperBox}`}
                >
                  <ul>
                    <h5>قوة API</h5>
                    <p>
                      حطم صوامع البيانات وافتح الاتصال السلس بين تطبيقاتك.
                      يصمم فريقنا الخبير تكاملات API قوية، مما يسمح بتبادل البيانات
                      بسهولة وتعزيز الوظائف عبر نظامك البيئي بالكامل.
                    </p>
                  </ul>
                  <ul>
                    <h5>صعود السحابة</h5>
                    <p>
                      هل تشعر بأنك عالق على الأنظمة المحلية؟ نحن خبراء الترحيل إلى السحابة.
                      خدمات التكامل الخاصة بنا تربط أنظمتك الحالية بمنصات السحابة الرائدة.
                      يفتح هذا لك قوة التوسع والمرونة وإمكانية الوصول.
                      استمتع بالأداء الأمثل والوصول إلى بياناتك من أي مكان وفي أي وقت.
                    </p>
                  </ul>
                  <ul>
                    <h5>تناغم ERP</h5>
                    <p>
                      أطلق العنان للإمكانات الكاملة لنظام ERP الخاص بك.
                      يقوم خبراؤنا في التكامل بمزامنته بسلاسة مع التطبيقات الأخرى.
                      يعزز هذا التعاون بين الأقسام، ويكسر صوامع المعلومات،
                      ويوفر رؤية موحدة لمعلومات الأعمال القوية.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.integWhiteBottomBox}`}
                >
                  <ul>
                    <h5>البيانات غير المقيدة</h5>
                    <p>
                      هل تغرق في صوامع البيانات؟ نحن نحرر معلوماتك.
                      خدمات تكامل البيانات الخاصة بنا تنشئ طريقًا سلسًا للمعلومات
                      عبر قواعد البيانات والتطبيقات وأدوات التحليل.
                      وهذا يوفر لك رؤية موحدة لعملك بالكامل، مما يمكّنك من اتخاذ
                      قرارات مستندة إلى البيانات بثقة.
                    </p>
                  </ul>
                  <ul>
                    <h5>التجارة الإلكترونية على الطيار الآلي</h5>
                    <p>
                      توقف عن التعامل مع منصات متعددة! نحن نصمم تكاملات سلسة
                      بين متجرك الإلكتروني، بوابات الدفع، وأنظمة المخزون.
                      هذا يبسط عملياتك عبر الإنترنت، ويؤتمت المهام، ويمكّنك من التركيز
                      على النمو.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection} data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="اقتباسات" />
              <h4 className="text-center">ثورة في تجربة العملاء مع CRM في مجال التكنولوجيا المالية.</h4>
              <p className="text-center">
                هل سئمت من أنظمة CRM التقليدية التي تعيق نموك؟ نحن نصمم حلول CRM قوية في مجال التكنولوجيا المالية
                مصممة لتحويل الطريقة التي تدير بها علاقات العملاء.
              </p>
              <p className="text-center">
                اتصل بنا اليوم! دعونا نناقش احتياجاتك ونريك كيف يمكن لـ CRM مخصص في مجال التكنولوجيا المالية
                أن يحدث ثورة في عملك.
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
