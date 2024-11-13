import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/dataset-card-1.JPG";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/standard-quality.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"التجارة الإلكترونية"}
        tagLine={false}
        // tagLine2={"الاتصال النهائي."}
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
                  التجارة الإلكترونية | نشر حلول التجارة الإلكترونية
                  الكاملة بسرعة وسهولة
                </h4>
                <p>
                  من خلال الاستفادة من الخبرة التي تم اكتسابها من إنشاء العديد من بوابات التجارة الإلكترونية على مدار أكثر من 10 سنوات، قمنا بتخطيط وتصميم وتطوير أفضل الممارسات من واجهات المتاجر الإلكترونية المهيأة مسبقًا للمساعدة في نشر حلول التجارة الإلكترونية على مستوى المؤسسات.
                </p>
                <h5>الوصول الرقمي</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />استشارات التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تصميم التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />معجلات التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تطوير التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />الدعم والصيانة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التسويق عبر الإنترنت</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مراجعات المواقع</li>
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
                  التجارة الإلكترونية | نشر حلول التجارة الإلكترونية
                  الكاملة بسرعة وسهولة
                </h4>
                <p>
                  من خلال الاستفادة من الخبرة التي تم اكتسابها من إنشاء العديد من بوابات التجارة الإلكترونية على مدار أكثر من 10 سنوات، قمنا بتخطيط وتصميم وتطوير أفضل الممارسات من واجهات المتاجر الإلكترونية المهيأة مسبقًا للمساعدة في نشر حلول التجارة الإلكترونية على مستوى المؤسسات.
                </p>
                <h5>الوصول الرقمي</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />استشارات التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تصميم التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />معجلات التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تطوير التجارة الإلكترونية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />الدعم والصيانة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التسويق عبر الإنترنت</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مراجعات المواقع</li>
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
                <h2>لماذا تعتبر Fintechify الأفضل لخدمات التكامل</h2>
                <p className={styles.para}>
                  فما هي خططك لأخذ عملك إلى المستوى التالي مع Fintechify؟ يمكن لفريقنا الخبير في خدمات التكامل دعمك ودعم عملائك في السوق. الحلول التي تم تصميمها لتوسيع نطاقها، وتتأقلم بسهولة مع توسع عملك. والأهم من ذلك، أن الأمان هو أولويتنا القصوى. نحن نطبق تدابير قوية لحماية بياناتك القيمة طوال عملية التكامل.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>المؤسسات المالية</h3>
                    <span>
                      يمكن لخدمات التكامل في Fintechify ربط الأنظمة القديمة مع الحلول المالية الحديثة، مما يتيح ميزات مثل الكشف عن الاحتيال في الوقت الفعلي، تبسيط معالجة القروض، والرؤى المستندة إلى البيانات للعملاء. هذا يؤدي إلى معاملات أسرع، وتحسين تجربة العملاء، وإدارة أفضل للمخاطر.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>الأعمال التجارية الإلكترونية</h3>
                    <span>
                      يمكن لخدمات التكامل ربط المتاجر الإلكترونية مع أنظمة إدارة المخزون، بوابات الدفع، ومنصات التسويق. مما يسمح بأتمتة تنفيذ الطلبات، وتحديث المخزون في الوقت الفعلي، وحملات التسويق المستهدفة، مما يؤدي إلى زيادة المبيعات وتحسين رضا العملاء.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إدارة سلسلة التوريد</h3>
                    <span>
                      يمكن أن يؤدي تكامل الأنظمة المتناثرة عبر سلسلة التوريد إلى تحسين الرؤية حول مستويات المخزون، وتحسين اللوجستيات، وتسهيل التواصل في الوقت الفعلي مع الموردين والموزعين. مما يؤدي إلى تقليل التكاليف، وتسريع أوقات التسليم، وتحسين الكفاءة العامة.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>مقدمو الرعاية الصحية</h3>
                    <span>
                      يمكن ربط أنظمة السجلات الصحية الإلكترونية مع برامج جدولة المواعيد، والفواتير، وبوابات المرضى لتبسيط المهام الإدارية، وتحسين دقة البيانات، وتعزيز رعاية المرضى.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>التصنيع</h3>
                    <span>
                      يمكن لخدمات التكامل ربط الآلات في أرض المصنع مع برامج تخطيط الإنتاج وأنظمة تخطيط موارد المؤسسات (ERP). مما يسمح بمراقبة خطوط الإنتاج في الوقت الفعلي، الصيانة التنبؤية، وتخصيص الموارد الأمثل، مما يؤدي إلى زيادة الإنتاجية وتقليل التوقفات.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <Testimonials />
      </section>

      <Footer />
    </>
  );
}

export default page;
