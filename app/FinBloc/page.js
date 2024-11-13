import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./realsatate.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/Finblock.png";
import ImageOne from "../components/assets/images/blocks-landing-learn-more-1-md.webp";
import ImageTwo from "../components/assets/images/blocks-landing-learn-more-2-md.webp";
import ImageThree from "../components/assets/images/blocks-landing-learn-more-3-md.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import Banner from "../components/Banner/Banner";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../components/assets/css/services.module.css";
import img1 from "../components/assets/images/fin1.jpg";
import img from "../components/assets/images/fin2.jpg";




const page = () => {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"حل إدارة العقارات"}
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
                  نظام إدارة الممتلكات | PMS
                </h4>
                <p>
                  يجمع نظام إدارة الممتلكات (PMS) بين مديري العقارات، والمستأجرين، والمقاولين، والوكلاء، والملاك في مكان واحد. تم تصميم PMS ليكون منصة متعددة المستخدمين قابلة للوصول عبر الويب وعلى الأجهزة المحمولة. يتيح لك الوصول إلى النظام من أي مكان وفي أي وقت، مما يوفر لك الحرية والمرونة في كيفية إدارة ممتلكاتك.
                </p>
                <h5>الوحدات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة النظام
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المكتب الخلفي / الإشراف
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تسجيل العقارات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    حجز العقارات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الحجوزات / التوافر
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    خدمة إضافية مميزة
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    نظام إدارة المحتوى
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
                  نظام إدارة الممتلكات | PMS
                </h4>
                <p>
                  يجمع نظام إدارة الممتلكات (PMS) بين مديري العقارات، والمستأجرين، والمقاولين، والوكلاء، والملاك في مكان واحد. تم تصميم PMS ليكون منصة متعددة المستخدمين قابلة للوصول عبر الويب وعلى الأجهزة المحمولة. يتيح لك الوصول إلى النظام من أي مكان وفي أي وقت، مما يوفر لك الحرية والمرونة في كيفية إدارة ممتلكاتك.
                </p>
                <h5>الوحدات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة النظام
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة المكتب الخلفي / الإشراف
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    تسجيل العقارات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    حجز العقارات
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    إدارة الحجوزات / التوافر
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    خدمة إضافية مميزة
                  </li>
                  <li>
                    <MdOutlineKeyboardDoubleArrowRight />
                    نظام إدارة المحتوى
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
      {/* <div className={`container-fluid ${style.containerFluid}`}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-12 ${style.col12}`}>
              <h1>
                <Image src={RisImage} alt="صورة FinBloc" />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>ما هو FinBloc؟</h1>
            <p>
              يمثل FinBloc جزءًا من ملكية عقارية، مما يجعل الاستثمار في
              العقارات ميسورًا ومتاحًا للجميع. من خلال تقسيم العقار إلى
              وحدات متساوية، نُمكّن الأفراد من المشاركة في الاستثمارات
              العقارية بنقاط دخول تبدأ من 2000 درهم إماراتي.
            </p>
            <p>
              تتيح كل وحدة للمستثمرين امتلاك حصة تناسبية من العقار، مما يفتح
              مزايا تملك العقارات دون الحاجة لرأس مال كبير.
              مع FinBlocs، يمكنك تنويع محفظتك الاستثمارية، وتحقيق عوائد
              محتملة، وبناء الثروة بطريقة آمنة ومناسبة للميزانية.
            </p>
            <p>
              سواء كنت جديدًا في العقارات أو مستثمرًا ذو خبرة، تسهّل FinBlocs
              بدء الاستثمار في العقارات ذات القيمة العالية في السوق
              الإماراتي.
            </p>
            <button className={`${style.btn} mt-3`}>
              <Link href="/contact-us" passHref>
                <span style={{ textDecoration: "none", color: "white" }}>
                  انضم الآن
                </span>
              </Link>
            </button>
          </div>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageOne} className={`${style.RisMobile}`} alt="صورة FinBloc" />
          </div>
        </div>
      </div>

      <div className={`container d-lg-none d-block ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageOne} className={style.RisMobile} alt="صورة FinBloc" />
          </div>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>ما هو FinBloc؟</h1>
            <p>
              يمثل FinBloc جزءًا من ملكية عقارية، مما يجعل الاستثمار في
              العقارات ميسورًا ومتاحًا للجميع. من خلال تقسيم العقار إلى
              وحدات متساوية، نُمكّن الأفراد من المشاركة في الاستثمارات
              العقارية بنقاط دخول تبدأ من 2000 درهم إماراتي.
            </p>
            <p>
              تتيح كل وحدة للمستثمرين امتلاك حصة تناسبية من العقار، مما يفتح
              مزايا تملك العقارات دون الحاجة لرأس مال كبير.
              مع FinBlocs، يمكنك تنويع محفظتك الاستثمارية، وتحقيق عوائد
              محتملة، وبناء الثروة بطريقة آمنة ومناسبة للميزانية.
            </p>
            <p>
              سواء كنت جديدًا في العقارات أو مستثمرًا ذو خبرة، تسهّل FinBlocs
              بدء الاستثمار في العقارات ذات القيمة العالية في السوق
              الإماراتي.
            </p>
            <button className={`${style.btn} mt-3`}>
              <Link href="/contact-us" passHref>
                <span style={{ textDecoration: "none", color: "white" }}>
                  انضم الآن
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className={`container ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6  ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageTwo} className={style.RisMobile} alt="صورة لوحة الاستثمار" />
          </div>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>لوحة الاستثمار</h1>
            <p>
              تابع استثماراتك في أي وقت ومن أي مكان مع لوحة التحكم الذكية
              الخاصة بنا. راقب أداء وحدات FinBlocs الخاصة بك في الوقت
              الفعلي وابقَ على اطلاع بأحدث التوصيات العقارية التي تناسب
              محفظتك.
            </p>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2} mt-5`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>إدارة الأموال باستخدام محفظة FinBloc</h1>
            <p>
              تحكم باستثماراتك العقارية بسهولة من خلال محفظة FinBloc. قم
              بإدارة أموالك، مراقبة العوائد، وإعادة الاستثمار بكل سهولة
              عبر منصة مركزية، مما يجعل استثمار العقارات أكثر سهولة وفعالية.
            </p>
          </div>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={ImageThree} className={style.RisMobile} alt="صورة محفظة FinBloc" />
          </div>
        </div>
      </div>

      <section className={`${style.servicessection}`}>
        <div className="container">
          <div className="row ">
            <h5 className={`${style.keyBox} text-center`}>
              لماذا تستثمر في العقارات؟
            </h5>
            <p className="text-center">
              العقارات هي أكبر فئة أصول في العالم وتوفر فوائد كبيرة.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-end">إمكانات الدخل</h4>
                <span className="text-end pt-3">
                  تساعدك العقارات في كسب دخل سلبي من خلال الإيجارات
                  الشهرية، كما يمكنك بناء ثروة طويلة الأجل من خلال
                  ارتفاع قيمة العقار.
                </span>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-end">مواجهة التضخم</h4>
                <span className="text-end pt-3">
                  مع زيادة تكلفة المعيشة، تزداد قيمة العقارات والإيجارات،
                  مما يجعل العقارات وسيلة لمواجهة التضخم.
                </span>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div className={`${style.servicesBox} ${style.servicesBoxScd}`}>
                <h4 className="text-end">تنويع المحفظة الاستثمارية</h4>
                <span className="text-end pt-3">
                  العقارات تُعدّ فئة أصول ملموسة وفريدة، حيث يمكن أن تساعدك
                  في تنويع محفظتك وتقليل المخاطر.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
