import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./welab.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/Finblock.png";
import RisMobile from "../components/assets/images/weblabPhone.png";

const page = () => {
  return (
    <>
      <Header />
      <div className={`container-fluid ${style.containerFluid}`}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-12 ${style.col12}`}>
              <h1>
                <Image src={RisImage} />
              </h1>
              {/* <p>
                Welab هي منصة كخدمة (SaaS) التي تربط المرضى بمقدمي الرعاية الصحية
                بشكل سلس، مما يتيح تقديم الخدمات في راحة منازلهم. مع Welab،
                يتوفر المهنيون الصحيون المرخصون على بُعد نقرة واحدة، مما يوفر
                خدمات الرعاية الصحية حسب الطلب.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid  d-lg-block d-none  ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={RisImage} alt="Description" />
            <h1 className="mt-3">
              نحن فخورون بتقديم WE LAB، الحل الرائد الذي يجلب خدمات الرعاية
              الصحية إلى عتبة بابك بسرعة وراحة.
            </h1>
            <p>
              Welab هي منصة كخدمة (SaaS) التي تربط المرضى بمقدمي الرعاية الصحية
              بشكل سلس، مما يتيح تقديم الخدمات في راحة منازلهم. مع Welab،
              يتوفر المهنيون الصحيون المرخصون على بُعد نقرة واحدة، مما يوفر
              خدمات الرعاية الصحية حسب الطلب.
            </p>

            <button className={style.btn}>انضم الآن</button>
          </div>
          <div className={`col-lg-6 ${style.collg62}`}>
            <Image
              src={RisMobile}
              className={`${style.RisMobile2} img-fluid`}
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
      <div className={`container-fluid  d-lg-none d-block  ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 ${style.collg62}`}>
            <Image
              src={RisMobile}
              className={`${style.RisMobile2} img-fluid`}
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
          <div
            className={`col-lg-6 ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={RisImage} alt="Description" />
            <h1 className="mt-3">
              نحن فخورون بتقديم WE LAB، الحل الرائد الذي يجلب خدمات الرعاية
              الصحية إلى عتبة بابك بسرعة وراحة.
            </h1>
            <p>
              Welab هي منصة كخدمة (SaaS) التي تربط المرضى بمقدمي الرعاية الصحية
              بشكل سلس، مما يتيح تقديم الخدمات في راحة منازلهم. مع Welab،
              يتوفر المهنيون الصحيون المرخصون على بُعد نقرة واحدة، مما يوفر
              خدمات الرعاية الصحية حسب الطلب.
            </p>

            <button className={style.btn}>انضم الآن</button>
          </div>
        </div>
      </div>

      <div
        className={`container  ${style.Essential}`}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className={`row  ${style.row2}`}>
          <h1>الفوائد لجميع الأطراف المعنية</h1>
          <div className={style.flexBoxes}>
            <div className={`col-lg-5 ${style.boxleft} p-3`}>
              <h5>مرحلة الاكتشاف</h5>
              <div className={style.section}>
                <ul>
                  <li>
                    بالنسبة للمهنيين الصحيين المرخصين، يوفر Welab مرونة
                    أكبر واستقلالية في جدولة العمل، مما يسمح لهم بكسب المزيد
                    من خلال العمل بشكل مستقل.
                  </li>
                  <li>
                    يبسط هذا النموذج أيضًا العملية للمختبرات من خلال القضاء
                    على الحاجة إلى مراكز جمع العينات، مما يتيح لهم استلام
                    العينات مباشرة من المهنيين المرخصين.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-5 ${style.boxright} ${style.marginTop} p-3`}>
              <div className={style.tdSection}>
                <div className={style.section}>
                  <h5>الاستثمار:</h5>
                  <ul>
                    <li>
                      يمتد نظام تقديم الرعاية الصحية المبتكر من Welab إلى ما
                      هو أبعد من جمع العينات الدموية وتوصيلها. من خلال ربط
                      المرضى بالمهنيين الصحيين المرخصين عبر منصة موبايل، يمكن
                      لـ Welab تقديم مجموعة واسعة من الخدمات الطبية المنزلية
                      مثل ترطيب الوريد، وتخطيط القلب الكهربائي، واللقاحات.
                    </li>
                    <li>
                      يقوم Welab بثورة في صناعة الرعاية الصحية، مما يجعل
                      الخدمات الصحية عالية الجودة أكثر سهولة وكفاءة وراحة.
                      احتضنوا مستقبل الرعاية الصحية مع Welab.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
