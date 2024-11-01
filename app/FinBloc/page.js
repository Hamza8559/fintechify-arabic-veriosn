import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./realsatate.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/riseApp.png";
import ImageOne from "../components/assets/images/blocks-landing-learn-more-1-md.webp";
import ImageTwo from "../components/assets/images/blocks-landing-learn-more-2-md.webp";
import ImageThree from "../components/assets/images/blocks-landing-learn-more-3-md.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />

      <div className={`container-fluid ${style.containerFluid}`}>
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
            <Image src={ImageOne} className={style.RisMobile} alt="صورة FinBloc" />
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
      </section>

      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
