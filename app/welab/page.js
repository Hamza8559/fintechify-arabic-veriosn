import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./welab.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/weblab.png";
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
                <Image src={RisImage} alt="Welab Image" />
              </h1>
              {/* <p>
                Welab is a Software-as-a-Service (SaaS) platform that seamlessly
                connects patients with healthcare providers, enabling services
                to be performed in the comfort of their own homes. With Welab,
                licensed healthcare professionals are just a click away,
                providing on-demand healthcare services.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`container-fluid d-lg-block d-none  ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={RisImage} alt="Welab Image" />
            <h1 className="mt-3">
              نحن فخورون بتقديم ويلاب Welab، الحل الرائد الذي يجلب خدمات الرعاية الصحية إلى عتبة دارك بسرعة وراحة.
            </h1>
            <p>
            ويلاب Welab هو منصة خدمات سحابية (SaaS) تربط بسلاسة بين المرضى ومقدمي الرعاية الصحية، مما يتيح تقديم الخدمات في راحة منازلهم. مع ويلاب ويلاب ويلاب Welab، يمكن الوصول إلى المهنيين الصحيين المرخصين بنقرة واحدة، لتقديم خدمات رعاية صحية حسب الطلب.
            </p>
            <button className={style.btn}>انضم الآن</button>
          </div>
          <div className={`col-lg-6 ${style.collg62}`}>
            <Image
              src={RisMobile}
              className={`${style.RisMobile2} img-fluid`}
              alt="Welab Mobile"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>

      <div className={`container-fluid d-lg-none d-block ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 ${style.collg62}`}>
            <Image
              src={RisMobile}
              className={`${style.RisMobile2} img-fluid`}
              alt="Welab Mobile"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
          <div
            className={`col-lg-6 ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={RisImage} width={100} alt="Welab Image" />
            <h1 className="mt-3">
              نحن فخورون بتقديم Welab، الحل الرائد الذي يجلب خدمات الرعاية الصحية إلى عتبة دارك بسرعة وراحة.
            </h1>
            <p>
              Welab هو منصة خدمات سحابية (SaaS) تربط بسلاسة بين المرضى ومقدمي الرعاية الصحية، مما يتيح تقديم الخدمات في راحة منازلهم. مع Welab، يمكن الوصول إلى المهنيين الصحيين المرخصين بنقرة واحدة، لتقديم خدمات رعاية صحية حسب الطلب.
            </p>
            <button className={style.btn}>انضم الآن</button>
          </div>
        </div>
      </div>

      <div
        className={`container ${style.Essential}`}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className={`row ${style.row2}`}>
          <h1 className="text-center">الفوائد لجميع الأطراف المعنية</h1>
          <div className={style.flexBoxes}>
            <div className={`col-lg-5 ${style.boxleft} p-5 mt-5`}>
              <h5>مرحلة الاكتشاف</h5>
              <div className={style.section}>
                <ul>
                  <li>
                    يقدم Welab للمهنيين الصحيين المرخصين مرونة أكبر واستقلالية في تنظيم جداول عملهم، مما يسمح لهم بكسب المزيد من خلال العمل بشكل مستقل.
                  </li>
                  <li>
                    هذا النموذج يبسط أيضًا العملية للمختبرات من خلال إلغاء الحاجة إلى مراكز التجميع، حيث يمكنهم استلام العينات مباشرة من المهنيين الصحيين المرخصين.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-5 ${style.boxright} ${style.marginTop} p-5`}>
              <div className={style.tdSection}>
                <div className={style.section}>
                  <h5>الاستثمار:</h5>
                  <ul>
                    <li>
                      نظام Welab المبتكر لتقديم الرعاية الصحية يمتد بعيدًا إلى ما بعد جمع وتسليم عينات الدم. من خلال ربط المرضى بالمهنيين الصحيين المرخصين عبر منصة الهاتف المحمول، يمكن لـ Welab تقديم مجموعة واسعة من الخدمات الطبية المنزلية مثل ترطيب الوريد، التخطيط الكهربائي للقلب، والتطعيمات.
                    </li>
                    <li>
                      Welab يحدث ثورة في صناعة الرعاية الصحية، مما يجعل خدمات الرعاية الصحية عالية الجودة متاحة، وفعالة، ومريحة. احتضن مستقبل الرعاية الصحية مع Welab.
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
