import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img2 from "../components/assets/images/Graphic-Option-1.jpg";
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"تطوير برامج التأمين"}
        tagLine={false}
        tagLine2={"ارتقِ بأعمال التأمين الخاصة بك مع فينتكفاي"}
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
                  حلول تطوير برامج التأمين المخصصة
                </h4>
                <h5>أمّن تفوقك</h5>
                <p>
                  تفهم فينتكفاي التحديات الفريدة التي تواجهك في سوق التأمين المتغيرة اليوم. <br /> نحن لسنا هنا لبيع حل عام – نحن نبني برامج مخصصة لتمكنك من:
                </p>
                <p>
                  التغلب على التعقيد: قم بتبسيط العمليات، وأتمتة المهام، ووداعًا للعوائق مع حلول ذكية وقابلة للتوسع.
                  <br /> كن حصنًا من الأمان: احمِ البيانات الحساسة وتأكد من الامتثال لبروتوكولات الأمان الصارمة.
                </p>
                <p>
                  تقديم عروض أسعار سريعة: أدهش العملاء بسرعة الاستجابة في الوقت الفعلي وعملية تقديم العروض المبسطة.
                </p>
                <p>
                  احتضان ثورة البيانات: احصل على رؤى تغييرية من خلال التحليلات القوية التي تساعدك في اتخاذ قرارات أذكى.
                  <br /> فينتكفاي ليست مجرد برنامج، إنها شريكك الاستراتيجي. نحن نعمل معك عن كثب لفهم احتياجاتك المحددة وتطوير حلول تدعم نموك وتحسن عملياتك.
                </p>
                <p>
                  مستعد لاكتشاف الإمكانات الكاملة لعملك في مجال التأمين؟ لنتحدث!
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
                <Image src={img2} className="img-fluid" />
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
                <Image src={img2} className="img-fluid" />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  حلول تطوير برامج التأمين المخصصة
                </h4>
                <h5>أمّن تفوقك</h5>
                <p>
                  تفهم فينتكفاي التحديات الفريدة التي تواجهك في سوق التأمين المتغيرة اليوم. <br /> نحن لسنا هنا لبيع حل عام – نحن نبني برامج مخصصة لتمكنك من:
                </p>
                <p>
                  التغلب على التعقيد: قم بتبسيط العمليات، وأتمتة المهام، ووداعًا للعوائق مع حلول ذكية وقابلة للتوسع.
                  <br /> كن حصنًا من الأمان: احمِ البيانات الحساسة وتأكد من الامتثال لبروتوكولات الأمان الصارمة.
                </p>
                <p>
                  تقديم عروض أسعار سريعة: أدهش العملاء بسرعة الاستجابة في الوقت الفعلي وعملية تقديم العروض المبسطة.
                </p>
                <p>
                  احتضان ثورة البيانات: احصل على رؤى تغييرية من خلال التحليلات القوية التي تساعدك في اتخاذ قرارات أذكى.
                  <br /> فينتكفاي ليست مجرد برنامج، إنها شريكك الاستراتيجي. نحن نعمل معك عن كثب لفهم احتياجاتك المحددة وتطوير حلول تدعم نموك وتحسن عملياتك.
                </p>
                <p>
                  مستعد لاكتشاف الإمكانات الكاملة لعملك في مجال التأمين؟ لنتحدث!
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
            <h4 className="text-center">
              الميزات الرئيسية لخدمات تطوير برامج التأمين من فينتكفاي
            </h4>
            <div className={styles.flexBoxes}>
              <div className="col-lg-5 p-lg-0">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.InsuranceBlueUpperBox} `}
                >
                  <ul>
                    <h5>1. أنظمة إدارة السياسات</h5>
                    <p>
                      وداعًا للفوضى الورقية! أنظمتنا القوية تدير السياسات، الأقساط، المطالبات، والمزيد – كل ذلك في منصة رقمية آمنة.
                    </p>
                  </ul>
                  <ul>
                    <h5>• الاكتتاب الآلي</h5>
                    <p>
                      قم بتبسيط الموافقات وتحرير الموظفين للقيام بمهام ذات قيمة أعلى.
                    </p>
                  </ul>
                  <ul>
                    <h5>• تقييم المخاطر المتقدم</h5>
                    <p>اتخذ قرارات أذكى مع رؤى مستندة إلى البيانات.</p>
                  </ul>
                  <ul>
                    <h5>• الامتثال المضمون!</h5>
                    <p>ابق على اطلاع على اللوائح مع ضمانات مدمجة.</p>
                  </ul>
                  <ul>
                    <h5>2. حلول معالجة المطالبات</h5>
                    <p>
                      وداعًا لتأخير المطالبات! حلولنا تبسط وتسرع العملية:
                    </p>
                  </ul>
                  <ul>
                    <h5>• استقبال المطالبات المؤتمت</h5>
                    <p>لا مزيد من الأكوام الورقية!</p>
                  </ul>
                  <ul>
                    <h5>• سير عمل القرار</h5>
                    <p>موافقات مبسطة للحصول على مدفوعات أسرع.</p>
                  </ul>
                  <ul>
                    <h5>• أدوات الاتصال المتكاملة</h5>
                    <p>ابق العملاء مطلعين ومتفاعلين طوال العملية.</p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 p-lg-0"  id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.InsuranceWhiteBottomBox}`}
                >
                  <ul>
                    <h5>3. منصات إدارة الوكالة</h5>
                    <p>قم بتمكين وكالتك بحل شامل:</p>
                  </ul>
                  <ul>
                    <p>
                      • إدارة العملاء، السياسات، والعمولات بسهولة.
                      <br />
                      • أتمتة المهام الروتينية لتحرير فريقك.
                      <br /> • اكتساب رؤى قيمة لقيادة القرارات الإستراتيجية.
                    </p>
                  </ul>
                  <ul>
                    <h5>4. تحليلات البيانات والتقارير</h5>
                    <p>اكتشاف قوة بياناتك:</p>
                  </ul>
                  <ul>
                    <h5>• رؤى تتجاوز الجداول</h5>
                    <p>
                      التحليلات القوية تحول البيانات الخام إلى رؤى قابلة للتنفيذ.
                    </p>
                  </ul>
                  <ul>
                    <h5>علامتك التجارية، في المقدمة</h5>
                    <p>سنضمن أن التطبيق يعكس هويتك الفريدة.</p>
                  </ul>
                  <ul>
                    <h5>• ثورة إدارة المخاطر</h5>
                    <p>
                      تحديد الأنماط، توقع الاتجاهات، واتخاذ قرارات المخاطر بشكل أذكى.
                    </p>
                  </ul>
                  <ul>
                    <h5>• الاكتتاب برؤية نسر</h5>
                    <p>تعزيز الدقة من خلال رؤى مستندة إلى البيانات.</p>
                  </ul>
                  <ul>
                    <h5>• العملاء السعداء = أعمال ناجحة</h5>
                    <p>
                      استخدم البيانات لتخصيص التجارب وزيادة التفاعل.
                    </p>
                  </ul>
                  <ul>
                    <h5>فينتكفاي</h5>
                    <p>
                      مركز واحد لعمل تأمين أكثر ذكاءً وكفاءة.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.getStartedSection} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt="Qoutes" />
              <h4>ابدأ اليوم</h4>
              <p className="text-center">
                هل برامج التأمين البطيئة تعيقك؟ قم بالترقية إلى فينتكفاي وازدهر! أتمت المهام، احم البيانات، واتخذ قرارات مستندة إلى البيانات. لا ترضى! تواصل معنا وافتح باب النمو
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
