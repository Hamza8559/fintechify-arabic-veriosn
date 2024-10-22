import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/cyberimg.jpeg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"احمِ أعمالك بأمان إلكتروني لا يُقهر"}
        tagLine={false}
        tagLine2={"دافع، احمِ، وتفوق!"}
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
                  لماذا تستحق أعمالك <br /> التميز في الأمن الإلكتروني؟
                </h4>

                <p>
                  انفجار المستخدمين: منع اختراق البيانات وحماية المعلومات
                  السرية من مجرمي الإنترنت الذين يتطورون باستمرار في أساليبهم.
                </p>
                <p>
                  بناء ثقة العملاء: الأعمال الآمنة تبني الولاء. من خلال
                  الاستثمار في تدابير قوية للأمن الإلكتروني، تطمئن عملاءك إلى
                  أن بياناتهم في أيدٍ أمينة.
                </p>
                <p>
                  ضمان استمرارية العمل: الهجمات الإلكترونية قد تؤدي إلى توقف
                  مكلف وتعطل عملياتك. احمِ عملك من خلال الدفاع الاستباقي للحفاظ
                  على التشغيل السلس مهما حدث.
                </p>
                <p>
                  البقاء متوافقًا مع المعايير الصناعية: العديد من الصناعات
                  تتطلب معايير صارمة لحماية البيانات. مع الأمن الإلكتروني
                  القوي، تظل شركتك متوافقة وتتجنب الغرامات الضخمة.
                </p>
                <p>
                  حماية سمعتك: يمكن لخرق أمني واحد أن يدمر سنوات من بناء
                  العلامة التجارية. دافع عن سمعتك بالبقاء متقدمًا على التهديدات
                  المحتملة من خلال حلول الأمن الإلكتروني المتطورة.
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
                  لماذا تستحق أعمالك <br /> التميز في الأمن الإلكتروني؟
                </h4>

                <p>
                  انفجار المستخدمين: منع اختراق البيانات وحماية المعلومات
                  السرية من مجرمي الإنترنت الذين يتطورون باستمرار في أساليبهم.
                </p>
                <p>
                  بناء ثقة العملاء: الأعمال الآمنة تبني الولاء. من خلال
                  الاستثمار في تدابير قوية للأمن الإلكتروني، تطمئن عملاءك إلى
                  أن بياناتهم في أيدٍ أمينة.
                </p>
                <p>
                  ضمان استمرارية العمل: الهجمات الإلكترونية قد تؤدي إلى توقف
                  مكلف وتعطل عملياتك. احمِ عملك من خلال الدفاع الاستباقي للحفاظ
                  على التشغيل السلس مهما حدث.
                </p>
                <p>
                  البقاء متوافقًا مع المعايير الصناعية: العديد من الصناعات
                  تتطلب معايير صارمة لحماية البيانات. مع الأمن الإلكتروني
                  القوي، تظل شركتك متوافقة وتتجنب الغرامات الضخمة.
                </p>
                <p>
                  حماية سمعتك: يمكن لخرق أمني واحد أن يدمر سنوات من بناء
                  العلامة التجارية. دافع عن سمعتك بالبقاء متقدمًا على التهديدات
                  المحتملة من خلال حلول الأمن الإلكتروني المتطورة.
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
            <div className="text-center mb-5">
              <h4 className="text-center">
                نقاط رئيسية لتنفيذ <br /> الأمن الإلكتروني في الأعمال
              </h4>
              <span style={{ fontWeight: "600" }}>
                تنفيذ الأمن الإلكتروني ليس مجرد إجراء حماية بل هو <br />
                ميزة استراتيجية تميز عملك في عالم رقمي متزايد.
              </span>
            </div>

            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.cybersecurityBlueUpperBox}`}
                >
                  <ul>
                    <h5>1. منع الخسائر المالية</h5>
                    <p>
                      يمكن أن تؤدي الهجمات الإلكترونية إلى أضرار مالية كبيرة
                      من خلال البيانات المسروقة أو الفدية أو التوقف عن العمل.
                      تساعد التدابير الأمنية الاستباقية على تجنب هذه
                      الاضطرابات المكلفة.
                    </p>
                  </ul>
                  <ul>
                    <h5>2. الحفاظ على ثقة العملاء</h5>
                    <p>
                      يهتم العملاء بشكل متزايد بسلامة معلوماتهم الشخصية. من خلال
                      تأمين عملك، تحافظ على ثقتهم وولائهم، مما يعزز النجاح
                      طويل الأمد.
                    </p>
                  </ul>
                  <ul>
                    <h5>3. الامتثال التنظيمي</h5>
                    <p>
                      الامتثال للوائح حماية البيانات (مثل GDPR أو CCPA أو HIPAA)
                      ضروري لتجنب الغرامات والعواقب القانونية. يساعد الأمن
                      الإلكتروني في ضمان امتثال عملك للمتطلبات الحديثة.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.cybersecurityWhiteBottomBox}`}
                >
                  <ul>
                    <h5>4. الدفاع ضد التهديدات الناشئة</h5>
                    <p>
                      تتطور التهديدات الإلكترونية باستمرار. تساعد استراتيجية
                      الأمن الإلكتروني القوية عملك على البقاء متقدمًا على
                      القراصنة والمهاجمين الخبيثين، مما يقلل من الثغرات
                      الأمنية.
                    </p>
                  </ul>
                  <ul>
                    <h5>5. حماية الملكية الفكرية</h5>
                    <p>
                      البيانات الابتكارية والمعلومات الخاصة بشركتك قيمة. يضمن
                      الأمن الإلكتروني أن تظل ملكيتك الفكرية في أيديك وليس في
                      أيدي مجرمي الإنترنت.
                    </p>
                  </ul>
                  <ul>
                    <h5>6. تعزيز استمرارية الأعمال</h5>
                    <p>
                      خطة الأمن الإلكتروني المتينة تقلل من الاضطرابات من خلال
                      منع الهجمات التي يمكن أن تؤدي إلى التوقف عن العمل أو
                      فشل العمليات. هذا يضمن استمرار عملك بسلاسة حتى في مواجهة
                      المخاطر الإلكترونية.
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
              <Image src={QoutesImg} alt="Qoutes" />
              <h4 className="text-center">
                عزز عملك مع حلول الأمن الإلكتروني من Fintechy
              </h4>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>
                    يستحق عملاؤك تجربة مصرفية متقدمة، وليس تجربة عالقة في العصور
                    الوسطى. Fintechy تقدم تطبيقات قوية وسهلة الاستخدام التي:
                  </h5>
                  <li>
                    <p>
                      قلق من تعرض عملك لتهديدات إلكترونية؟ نقوم بإنشاء خطط أمن
                      إلكتروني فعالة وسهلة الفهم مصممة خصيصًا لشركات التكنولوجيا
                      المالية. احمِ بياناتك القيمة، وأمّن سمعتك، وابق آمنًا من
                      القراصنة مع خدماتنا الموثوقة.
                    </p>
                  </li>
                  <li>
                    <p>
                      اتصل بنا اليوم! دعنا نتحدث عن احتياجاتك الأمنية ونريك كيف
                      يمكن لـ Fintechy أن تجعل عملك أكثر أمانًا وقوة.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.servicessection}`}>
        <div className="container">
          <div className="row">
            <h5 className={`${styles.keyBox} text-center`}>
              حصّن مستقبلك: خدمات <br /> الأمن الإلكتروني التي لا تقهر من Fintechy.ae
            </h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">اكتشاف التهديدات والاستجابة لها</h4>
                <span className="text-start pt-3">
                  كن دائمًا متقدمًا على المجرمين الإلكترونيين باستخدام خدمة اكتشاف التهديدات والاستجابة في الوقت الفعلي. في Fintechy، نراقب أنظمتك على مدار الساعة، ونحدد المخاطر المحتملة قبل أن تصبح مشكلة. احمِ عملك من الاختراقات وتأكد من أمان بياناتك واستمرارية عملياتك دون انقطاع.
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">أمان الشبكات</h4>
                <span className="text-start pt-3">
                  شبكتك هي العمود الفقري لأعمالك. توفر حلول أمان الشبكات المتقدمة لدينا حماية متعددة الطبقات، مما يضمن حماية ضد البرامج الضارة والفدية والوصول غير المصرح به. مع Fintechy، ستكون شبكتك محصنة، مما يضمن أن يكون كل اتصال آمنًا.
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">أمان السحابة</h4>
                <span className="text-start pt-3">
                  مع انتقال الأعمال إلى السحابة، تنتقل التهديدات الإلكترونية أيضًا. تضمن Fintechy حماية بياناتك وخدماتك القائمة على السحابة بتشفير متقدم، وعناصر تحكم في الوصول، ومراقبة مستمرة، مما يتيح لك الاستفادة من مرونة السحابة دون المساس بالأمان.
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">خدمات تشفير البيانات</h4>
                <span className="text-start pt-3">
                  بياناتك هي أثمن أصولك—احمها بحلول التشفير المتقدمة لدينا. توفر Fintechy أمان المعلومات الحساسة أثناء النقل وفي حالة الراحة، مما يجعل من المستحيل تقريبًا على القراصنة اعتراض بياناتك أو إساءة استخدامها.
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">تقييم الثغرات واختبار الاختراق</h4>
                <span className="text-start pt-3">
                  لا تنتظر حتى يحدث هجوم إلكتروني لكشف الثغرات في أمانك. تقدم Fintechy تقييمات شاملة للثغرات واختبارات اختراق، مما يحدد التهديدات المحتملة قبل أن تضرب. نحدد نقاط ضعف نظامك ونوفر حلولاً قابلة للتنفيذ لتعزيز دفاعاتك.
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">استشارات الامتثال للأمن الإلكتروني</h4>
                <span className="text-start pt-3">
                  الامتثال هو المفتاح للحفاظ على عمل آمن وقانوني. تساعدك Fintechy في التنقل بين اللوائح المعقدة مثل GDPR، وCCPA، والمزيد، مما يضمن امتثال شركتك لجميع معايير الأمان مع تجنب الغرامات الباهظة. نبقيك متوافقًا، حتى تتمكن من التركيز على النمو.
                </span>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className={`${styles.servicesBox} ${styles.servicesBoxScd}`}>
                <h4 className="text-start">الاستجابة للحوادث والتعافي</h4>
                <span className="text-start pt-3">
                  في حالة حدوث اختراق، فريق الاستجابة السريعة للحوادث في Fintechy هنا للحد من الأضرار وإعادة عملك إلى المسار الصحيح. يتولى خبراؤنا كل شيء بدءًا من الاحتواء إلى التعافي، مما يضمن استعادة بياناتك واستئناف عملياتك بأقل فترة توقف ممكنة.
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
}

export default page;
