import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./rise.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/riseApp.png";
import RisMobile from "../components/assets/images/riseMobile.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/pexels-christina-morillo-1181244-1024x684.jpg";

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
                FinPoan is a leading digital product management platform that
                empowers businesses to streamline their digital product
                management processes. With its advanced features and expertise,
                we help you achieve better productivity, increase customer
                satisfaction, and drive growth.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`container d-lg-block d-none ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={RisImage} />
            <h1>
              تحويل الخدمات المصرفية مع شركة الراجحي المصرفية للاستثمار
              (ماليزيا)
            </h1>
            <p>
              اختبر حقبة جديدة في عالم المصرفية مع Rize. افتح حساب توفير في أي
              وقت ومن أي مكان، وقدم طلبًا للتمويل الشخصي ليتم إيداع الأموال في
              حسابك خلال 15 دقيقة. يوفر Rize وصولًا مستمرًا على مدار الساعة إلى
              معلوماتك المالية ومجموعة شاملة من الخدمات المصرفية. سواء كنت ترغب
              في التحقق من رصيدك، تحويل الأموال، دفع الفواتير، أو إيداع الشيكات،
              كل ذلك متاح بكل سهولة وأمان من راحة منزلك أو أثناء التنقل باستخدام
              Rize. Rize يُحدث ثورة في تجربة المصرفية، حيث يجمع بين الوصول في أي
              وقت ومن أي مكان، تدابير الأمان القوية، رؤى مالية مخصصة، ومجموعة
              واسعة من الخدمات المصرفية. احتضن قوة المصرفية الرقمية مع Rize
              وافتح عالمًا من الإمكانيات لإدارة مالية سهلة وفعالة.
            </p>
            <button className={`${style.btn} mt-3`}>انضم الآن</button>
          </div>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={RisMobile} className={style.RisMobile} />
          </div>
        </div>
      </div>

      <div className={`container d-lg-none d-block ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div
            className={`col-lg-6 flex_right ${style.collg62}`}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image src={RisMobile} className={style.RisMobile} />
          </div>
          <div
            className={`col-lg-6 flex_left ${style.collg6}`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image src={RisImage} width={50}/>
            <h1>
              تحويل الخدمات المصرفية مع شركة الراجحي المصرفية للاستثمار
              (ماليزيا)
            </h1>
            <p>
              اختبر حقبة جديدة في عالم المصرفية مع Rize. افتح حساب توفير في أي
              وقت ومن أي مكان، وقدم طلبًا للتمويل الشخصي ليتم إيداع الأموال في
              حسابك خلال 15 دقيقة. يوفر Rize وصولًا مستمرًا على مدار الساعة إلى
              معلوماتك المالية ومجموعة شاملة من الخدمات المصرفية. سواء كنت ترغب
              في التحقق من رصيدك، تحويل الأموال، دفع الفواتير، أو إيداع الشيكات،
              كل ذلك متاح بكل سهولة وأمان من راحة منزلك أو أثناء التنقل باستخدام
              Rize. Rize يُحدث ثورة في تجربة المصرفية، حيث يجمع بين الوصول في أي
              وقت ومن أي مكان، تدابير الأمان القوية، رؤى مالية مخصصة، ومجموعة
              واسعة من الخدمات المصرفية. احتضن قوة المصرفية الرقمية مع Rize
              وافتح عالمًا من الإمكانيات لإدارة مالية سهلة وفعالة.
            </p>
            <button className={`${style.btn} mt-3`}>انضم الآن</button>
          </div>
        </div>
      </div>

      <section className={style.aboutFirst}>
        <div className="container-fluid px-5">
          <div className="row text-center mb-5">
            <h1 className="text-center" style={{ fontWeight: "700" }}>
              الميزات الحالية
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="500">
                <Image className="img-fluid" src={aboutFirstSectionImg} />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className={style.aboutFirstsection}
                data-aos="fade-right"
                data-aos-offset="300"
              >
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إدارة الحساب:</h3>
                    <span>
                      يمكن للمستخدمين الوصول إلى حساباتهم المصرفية وإدارتها،
                      التحقق من الأرصدة، عرض سجل المعاملات، وتنفيذ أنشطة مصرفية
                      مختلفة مباشرة من أجهزتهم المحمولة.
                    </span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>المدفوعات والتحويلات:</h3>
                    <span>
                      يتيح التطبيق للمستخدمين إجراء تحويلات محلية ودولية، دفع
                      الفواتير، وتنفيذ معاملات مالية أخرى بسلاسة.
                    </span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>إعداد الميزانية وتتبع النفقات:</h3>
                    <span>
                      يقدم أدوات لمساعدة المستخدمين على تتبع نفقاتهم، تحديد
                      الميزانيات، وإدارة أموالهم بشكل أكثر فعالية.
                    </span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>دعم العملاء:</h3>
                    <span>
                      يتضمن هذا التطبيق ميزات دعم العملاء لتقديم المساعدة وحل
                      الاستفسارات مباشرة عبر التطبيق.
                    </span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>ميزات الأمان:</h3>
                    <span>
                      الأمان هو أولوية قصوى لتطبيقات المصرفية. من المحتمل أن
                      يطبق Rize تدابير أمان قوية مثل التشفير وطرق المصادقة لضمان
                      سلامة المعلومات المالية للمستخدمين.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`container-fluid ${style.Essential}`}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className={`row ${style.row2}`}>
          <h1 className="text-center">الخدمات المصرفية الأساسية</h1>
          <div className={style.flexBoxes}>
            <div className={`col-lg-5 ${style.boxleft}`}>
              <h2>خط الائتمان الجاهز (RCL)</h2>
              <div className={style.section}>
                <h5>خط الائتمان:</h5>
                <ul>
                  <li>
                    يحدد البنك حدًا ائتمانيًا أقصى لعملائه يمكنهم استخدامه
                    لتلبية احتياجاتهم المالية المختلفة.
                  </li>
                  <li>مراقبة الحدود المستخدمة.</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>تشجيع السلوك المالي:</h5>
                <ul>
                  <li>تقديم حافز استرداد النقود (Cashback)</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>المرونة والقدرة على التكيف:</h5>
                <ul>
                  <li>
                    يتم فرض الفائدة فقط على الرصيد المستحق، وعادة ما تعتمد على
                    مقدار الائتمان المستخدم.
                  </li>
                  <li>
                    يمكن للعميل القيام بمدفوعات منتظمة لسداد المبلغ المقترض.
                  </li>
                  <li>
                    مع سداد العميل للمبلغ المقترض، يصبح الحد الائتماني متاحًا
                    مرة أخرى.
                  </li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>تكامل التكنولوجيا:</h5>
                <ul>
                  <li>
                    تسهيل إنشاء خط الائتمان الجاهز (RCL) عبر تطبيق Digibank.
                  </li>
                  <li>
                    الوصول إلى تقارير خط الائتمان الجاهز (RCL) المُنشأة عبر
                    البوابة الإلكترونية للامتثال والإدارة.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-5  ${style.boxright} ${style.marginTop}`}>
              <div className={style.tdSection}>
                <h2>الودائع لأجل (TD)</h2>
                <div className={style.section}>
                  <h5>الاستثمار:</h5>
                  <ul>
                    <li>
                      الوديعة لأجل هي حساب ادخار بمبلغ إجمالي ثابت لفترة إيداع
                      محددة.
                    </li>
                    <li>استثمار رقمي سلس.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>تشجيع الاستثمار الرقمي:</h5>
                  <ul>
                    <li>تقديم خيارات إيداع لأجل رقمي عبر التطبيق.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>المرونة والقدرة على التكيف:</h5>
                  <ul>
                    <li>
                      معدل فائدة محدد مسبقًا يظل ثابتًا طوال فترة الإيداع.
                    </li>
                    <li>يهدف إلى تحسين تجربة الخدمات المصرفية الرقمية.</li>
                    <li>
                      يُعطى الأولوية للحفاظ على رأس المال وتوفير دخل ثابت متوقع.
                    </li>
                    <li>تحصل على الفائدة في نهاية فترة الإيداع.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>تكامل التكنولوجيا:</h5>
                  <ul>
                    <li>
                      يتم تسهيل إنشاء الودائع لأجل (TD) عبر تطبيق Digibank.
                    </li>
                    <li>
                      الوصول إلى تقارير الودائع لأجل (TD) المُنشأة عبر البوابة
                      الإلكترونية لإدارة المحافظ والامتثال.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid mt-5 ${style.Essential}`}>
        <div className={`row ${style.row2}`}>
          <h1 className="text-center">الإقراض الرقمي</h1>
          <div className={style.flexBoxes}>
            <div className={`col-lg-5 ${style.boxleft}`}>
              <h2>التمويل الشخصي (PF)</h2>
              <div className={style.section}>
                <h5>الائتمان الشخصي:</h5>
                <ul>
                  <li>
                    يتم الموافقة على المبلغ بناءً على الملف المالي للعميل وقد
                    يكون له حد ثابت.
                  </li>
                  <li>احصل على الأموال لتلبية احتياجاتك المالية الشخصية.</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>تشجيع الإقراض الرقمي:</h5>
                <ul>
                  <li>تقديم تمويل محدد الأجل</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>المرونة والقدرة على التكيف:</h5>
                <ul>
                  <li>تمويل يأتي مع معدل فائدة ثابت.</li>
                  <li>
                    يقوم العميل بسداد القرض على أقساط خلال فترة محددة، مع خيارات
                    للقروض قصيرة أو طويلة الأجل.
                  </li>
                  <li>
                    بأقل قدر من المستندات، يمكن الحصول على الموافقة على القرض.
                  </li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>تكامل التكنولوجيا:</h5>
                <ul>
                  <li>
                    يتم تسهيل إنشاء التمويل الشخصي (PF) عبر تطبيق Digibank.
                  </li>
                  <li>
                    الوصول إلى تقارير التمويل الشخصي (PF) المُنشأة عبر البوابة
                    الإلكترونية للامتثال والإدارة.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-5 ${style.boxright} ${style.marginTop}`}>
              <div className={style.tdSection}>
                <h2>التمويل المؤسسي (CF)</h2>
                <div className={style.section}>
                  <h5>تمويل المشاريع الصغيرة والمتوسطة (SME)</h5>
                  <ul>
                    <li>
                      خيارات تمويل وائتمان متخصصة لمشاريعك الكبيرة لتوسيع نطاق
                      الأعمال.
                    </li>
                    <li>احصل على الأموال لتحقيق أهداف عملك.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>تشجيع التمويل الرقمي:</h5>
                  <ul>
                    <li>تقديم تمويل المشاريع الصغيرة والمتوسطة الرقمي (SME)</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>المرونة والقدرة على التكيف:</h5>
                  <ul>
                    <li>تمويل يأتي بشروط سداد ثابتة.</li>
                    <li>
                      يسدد العملاء القرض على أقساط خلال فترة محددة، للقروض طويلة
                      الأجل.
                    </li>
                    <li>
                      تقديم منصات رقمية للمشاريع الصغيرة والمتوسطة لإدارة شؤونها
                      المالية، وإجراء المعاملات، والوصول إلى التمويل بشكل أكثر
                      كفاءة.
                    </li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>تكامل التكنولوجيا:</h5>
                  <ul>
                    <li>
                      يتم تسهيل إنشاء التمويل المؤسسي (CF) عبر تطبيق Digibank.
                    </li>
                    <li>
                      الوصول إلى تقارير التمويل المؤسسي (CF) المُنشأة عبر
                      البوابة الإلكترونية لإدارة المحافظ والامتثال.
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
