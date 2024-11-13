import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/10.JPG";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/representation.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"تحوّل DevOps"}
        tagLine={false}
        // tagLine2={"الموصل النهائي."}
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
                  التحوّل DevOps | الاستفادة من التكامل، التفاعل، والابتكار.
                </h4>
                <p>
                  عندما يتم اعتماد DevOps بنجاح، يصبح لدى المؤسسة القدرة على تقديم البرامج بشكل أفضل - مما يمنحهم ميزة كبيرة للتغلب على المنافسة والوصول إلى السوق بسرعة أكبر والابتكار بفعالية أكبر.
                </p>
                <h5>الخدمات المُدارة</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    الدعوة إلى DevOps
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    استراتيجية اعتماد البنية السحابية والاستشارات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة أداء التطبيقات، الرصد والدعم - العمليات (SUMO)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    اعتماد DevOps - تبني الـ 5 Cs (DOERS)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    استراتيجية الاختبار وإطار العمل التلقائي (TSAF)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    خدمات تطوير DevOps (DOAS)
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
                  التحوّل DevOps | الاستفادة من التكامل، التفاعل، والابتكار.
                </h4>
                <p>
                  عندما يتم اعتماد DevOps بنجاح، يصبح لدى المؤسسة القدرة على تقديم البرامج بشكل أفضل - مما يمنحهم ميزة كبيرة للتغلب على المنافسة والوصول إلى السوق بسرعة أكبر والابتكار بفعالية أكبر.
                </p>
                <h5>الخدمات المُدارة</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    الدعوة إلى DevOps
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    استراتيجية اعتماد البنية السحابية والاستشارات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة أداء التطبيقات، الرصد والدعم - العمليات (SUMO)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    اعتماد DevOps - تبني الـ 5 Cs (DOERS)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    استراتيجية الاختبار وإطار العمل التلقائي (TSAF)
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    خدمات تطوير DevOps (DOAS)
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
                <h2>لماذا Fintechify الأفضل لخدمات التكامل</h2>
                <p className={styles.para}>
                  ما هي خططك للارتقاء بعملك إلى المستوى التالي مع Fintechify؟ يمكن لفريقنا الخبير في خدمات التكامل دعمك ودعم عملائك عبر السوق. حلول مصممة للتوسع، تتكيف بسهولة مع توسع أعمالك. والأهم من ذلك، الأمن هو أولويتنا القصوى. نقوم بتنفيذ إجراءات قوية لحماية بياناتك القيمة خلال عملية التكامل بأكملها.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>المؤسسات المالية</h3>
                    <span>
                      يمكن لخدمات التكامل من Fintechify ربط الأنظمة القديمة بحلول التكنولوجيا المالية الحديثة، مما يتيح ميزات مثل اكتشاف الاحتيال في الوقت الفعلي، تبسيط معالجة القروض، وتقديم رؤى تعتمد على البيانات للعملاء.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>أعمال التجارة الإلكترونية</h3>
                    <span>
                      يمكن لخدمات التكامل ربط المتاجر عبر الإنترنت بأنظمة إدارة المخزون، بوابات الدفع، ومنصات التسويق، مما يسمح بتنفيذ الطلبات تلقائيًا، تحديث المخزون في الوقت الفعلي، وحملات تسويقية مستهدفة.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إدارة سلسلة التوريد</h3>
                    <span>
                      تكامل الأنظمة المنفصلة عبر سلسلة التوريد يمكن أن يعزز من الرؤية حول مستويات المخزون، تحسين الخدمات اللوجستية، وتسهيل الاتصال في الوقت الفعلي مع الموردين والموزعين.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>مقدمي الرعاية الصحية</h3>
                    <span>
                      ربط أنظمة السجلات الصحية الإلكترونية (EHR) مع جداول المواعيد، برامج الفواتير، ومنصات المرضى، يمكن أن يبسط المهام الإدارية، يعزز دقة البيانات، ويحسن رعاية المرضى.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>التصنيع</h3>
                    <span>
                      يمكن لخدمات التكامل ربط آلات المصنع مع برامج تخطيط الإنتاج وأنظمة تخطيط الموارد المؤسسية (ERP)، مما يسمح بالمراقبة في الوقت الفعلي لخطوط الإنتاج، الصيانة التنبؤية، وتخصيص الموارد بشكل مثالي.
                    </span>
                  </div>
                </div>
              </div>
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
