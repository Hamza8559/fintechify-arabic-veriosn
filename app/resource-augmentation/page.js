import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/webp.net-resizeimage.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img from "../components/assets/images/resourceimg.jpeg";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"خدمة تعزيز الموارد"}
        tagLine={false}
        tagLine2={"توقف عن تكييف عملك ضمن حلول الدفع الجاهزة. احصل على حل مخصص يناسب تدفق عملك."}
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
                <h4>
                  تخلص من الحلول الجاهزة! صمم تطبيق الدفع المثالي الخاص بك مع خدمة تعزيز الموارد من Fintechify.
                </h4>
                <p>
                  هل سئمت من حلول الدفع التي تعيق أسلوب عملك؟ في Fintechify، نؤمن بأن عملية الدفع الخاصة بك يجب أن تكون فريدة مثلك.
                  لهذا السبب نقدم حلولاً مخصصة لتطوير تطبيقات الدفع.
                  فريقنا المتميز من المطورين والمصممين والمخططين سيتعاون معك لتصميم تطبيق الدفع المثالي المتكامل مع أهداف عملك.
                </p>
                <p>
                  هل أنت مستعد للتخلي عن الحلول العامة واعتماد الحل المثالي؟ تواصل مع Fintechify اليوم!
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
                <h4>
                  تخلص من الحلول الجاهزة! صمم تطبيق الدفع المثالي الخاص بك مع خدمة تعزيز الموارد من Fintechify.
                </h4>
                <p>
                  هل سئمت من حلول الدفع التي تعيق أسلوب عملك؟ في Fintechify، نؤمن بأن عملية الدفع الخاصة بك يجب أن تكون فريدة مثلك.
                  لهذا السبب نقدم حلولاً مخصصة لتطوير تطبيقات الدفع.
                  فريقنا المتميز من المطورين والمصممين والمخططين سيتعاون معك لتصميم تطبيق الدفع المثالي المتكامل مع أهداف عملك.
                </p>
                <p>
                  هل أنت مستعد للتخلي عن الحلول العامة واعتماد الحل المثالي؟ تواصل مع Fintechify اليوم!
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
            <h4 className="text-center">الميزات الرئيسية</h4>
            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.ResourceBlueUpperBox}`}
                >
                  <ul>
                    <h5>حصن آمن لحماية الدفع</h5>
                    <p>
                      نحن لا ندمج فقط بوابات آمنة، بل نبنيها كحصون. التشفير المتقدم، وتجزئة البيانات، والامتثال لمعايير PCI DSS تحافظ على بيانات عملائك آمنة.
                      عمليات تدقيق الأمان الدورية تضمن الحذر المستمر. اختر Fintechify للسلامة وراحة البال.
                    </p>
                  </ul>
                  <ul>
                    <h5>عمليات سلسة. عملاء سعداء.</h5>
                    <p>
                      تقوم Fintechify بتصميم تطبيقات الدفع التي توفر واجهة مرئية واضحة وتدفقًا سلسًا وإرشادات مفيدة تجعل المعاملات بسيطة.
                      نحن نبني للجميع، مما يضمن سهولة الوصول وتجربة مستخدم ممتعة تجعل العملاء يعودون مرة أخرى.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.ResourceWhiteBottomBox}`}
                >
                  <ul>
                    <h5>اذهب حيثما يذهب عملاؤك.</h5>
                    <p>
                      Fintechify تصمم تطبيقات الدفع التي تعمل بسلاسة على أي جهاز، من أجهزة iPhone إلى أجهزة Android وأجهزة الكمبيوتر المكتبية.
                      يمكنك الوصول إلى جمهورك بالكامل، بغض النظر عن تفضيلاتهم في المنصة.
                    </p>
                  </ul>
                  <ul>
                    <h5>قم ببناء تدفق الدفع المثالي الخاص بك.</h5>
                    <p>
                      المرونة هي اسمنا الأوسط. تصمم Fintechify تطبيقات الدفع التي تتكيف مع رؤيتك. اختر الميزات التي تحتاجها، وقم بتخصيص التصميم،
                      واصنع تجربة الدفع المثالية لعملك وعملائك.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.getStartedSection} data-aos="fade-up">
        <div className="container px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="اقتباسات" />
              <h4 className="text-center">هل أنت مستعد لتحويل كيفية إدارة عملك للمدفوعات؟</h4>
              <p className="text-center">
                تواصل معنا اليوم لاستكشاف احتياجات مشروعك وبدء الرحلة نحو تطوير تطبيق دفع مبتكر يدفع عملك نحو النمو والازدهار.
                دعنا نجعل رؤيتك حقيقة!
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
