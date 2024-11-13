import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/IT.JPEG";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/grwoth-business-.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"استعانة بتكنولوجيا المعلومات الخارجية"}
        tagLine={false}
        // tagLine2={"أقوى حل متصل."}
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
                  استعانة بتكنولوجيا المعلومات الخارجية | خدمة فريق تطوير عند الطلب
                </h4>
                <p>
                  يمكن لمهندسينا المعتمدين، ومديري المشاريع، والمحللين، والمهندسين، والمصممين العمل جنبًا إلى جنب مع فريقك الحالي أو العمل كفريق تطوير عند الطلب من أجل تسريع النمو. لدينا الخبراء الذين تحتاجهم لتقليل الوقت المطلوب للوصول إلى السوق
                </p>
                <h5>المزايا</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />لا حاجة لاستثمار في البنية التحتية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تقليل الوقت المستغرق في التوظيف والتدريب والتنفيذ</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إلغاء تكاليف الموظفين الداخليين</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />لا حدود جغرافية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مستوى إنتاجية عالٍ</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />أمن حقوق الملكية الفكرية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />فعالية من حيث التكلفة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تحسين الجودة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مرونة في توسيع أو تقليص الفريق</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />عملية إدارة مشروع قوية</li>
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
                  استعانة بتكنولوجيا المعلومات الخارجية | خدمة فريق تطوير عند الطلب
                </h4>
                <p>
                  يمكن لمهندسينا المعتمدين، ومديري المشاريع، والمحللين، والمهندسين، والمصممين العمل جنبًا إلى جنب مع فريقك الحالي أو العمل كفريق تطوير عند الطلب من أجل تسريع النمو. لدينا الخبراء الذين تحتاجهم لتقليل الوقت المطلوب للوصول إلى السوق
                </p>
                <h5>المزايا</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />لا حاجة لاستثمار في البنية التحتية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تقليل الوقت المستغرق في التوظيف والتدريب والتنفيذ</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إلغاء تكاليف الموظفين الداخليين</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />لا حدود جغرافية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مستوى إنتاجية عالٍ</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />أمن حقوق الملكية الفكرية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />فعالية من حيث التكلفة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تحسين الجودة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مرونة في توسيع أو تقليص الفريق</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />عملية إدارة مشروع قوية</li>
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
            <div className="col-lg-6 px-4">
              <div data-aos="fade-up" data-aos-duration="2000">
                <Image className="img-fluid" src={img} />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className={styles.aboutFirstsection}
                data-aos="fade-right"
                data-aos-offset="300"
              >
                <h2>لماذا يعد Fintechify الأفضل لخدمات التكامل</h2>
                <p className={styles.para}>
                  فما هي الخطط المتاحة لترقية عملك باستخدام Fintechify؟ يمكن لفريقنا الخبير في خدمات التكامل دعمك أنت وعملائك عبر السوق. الحلول التي تم تصميمها للتوسع، مما يتيح التكيف بسهولة مع توسع أعمالك. والأهم من ذلك، أن الأمان هو أولويتنا القصوى. نحن نطبق تدابير قوية لحماية بياناتك القيمة خلال عملية التكامل بأكملها.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>المؤسسات المالية</h3>
                    <span>
                      يمكن لخدمات التكامل من Fintechify ربط الأنظمة القديمة مع الحلول المالية الحديثة، مما يمكن من ميزات مثل الكشف عن الاحتيال في الوقت الفعلي، وتبسيط معالجة القروض، والرؤى المستندة إلى البيانات حول العملاء. هذا يترجم إلى معاملات أسرع، وتحسين تجربة العملاء، وإدارة أفضل للمخاطر.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>أعمال التجارة الإلكترونية</h3>
                    <span>
                      يمكن لخدمات التكامل ربط المتاجر الإلكترونية بأنظمة إدارة المخزون، وبوابات الدفع، ومنصات التسويق. يتيح ذلك تنفيذ الطلبات تلقائيًا، وتحديث المخزون في الوقت الفعلي، وحملات تسويقية مستهدفة، مما يؤدي إلى زيادة المبيعات وتحسين رضا العملاء.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إدارة سلسلة التوريد</h3>
                    <span>
                      يتيح تكامل الأنظمة المتباينة عبر سلسلة التوريد تحسين الرؤية في مستويات المخزون، وتحسين اللوجستيات، وتيسير الاتصال في الوقت الفعلي مع الموردين والموزعين. هذا يترجم إلى تقليل التكاليف، وتسريع أوقات التسليم، وتحسين الكفاءة العامة.
                    </span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>مقدمو الرعاية الصحية</h3>
                    <span>
                      يمكن ربط أنظمة السجلات الصحية الإلكترونية (EHR) مع جدولة المواعيد، ومعالجة المدفوعات، ومنصات المريض. يؤدي هذا إلى تبسيط العمليات الطبية، وتقديم رعاية أفضل للمرضى، وتقليل الأخطاء البشرية.
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
