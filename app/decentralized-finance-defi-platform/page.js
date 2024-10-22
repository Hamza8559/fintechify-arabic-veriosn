import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import styles from "../components/assets/css/services.module.css";
import QoutesImg from "../components/assets/images/img-3-300x300.png";
import img from "../components/assets/images/financeimg.jpg";
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"منصة التمويل اللامركزي (DeFi)"}
        tagLine={false}
        tagLine2={"الحرية المالية للجميع."}
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
                  ثورة في المالية: <br />اكتشف منصتنا القوية <br />للتمويل اللامركزي
                </h4>
                <p>
                  Fintechify تقوم بتغيير اللعبة مع منصتنا الثورية للتمويل اللامركزي (DeFi)، المصممة خصيصاً لك.
                </p>
                <p>
                  تحرر من القيود التقليدية: تخلص من الوساطة وسيطر على استثماراتك،
                  <br /> الاقتراض، وأنشطة الإقراض.
                </p>
                <p>
                  اكتشف عالماً من الإمكانيات: استمتع بمجموعة متنوعة من منتجات وخدمات التمويل اللامركزي، بما في ذلك:
                </p>
                <p>
                  التبادلات اللامركزية (DEXs): تداول العملات المشفرة مباشرة من نظير إلى نظير دون الاعتماد على
                  <br />المنصات المركزية.
                </p>{" "}
                <p>
                  أكثر من مجرد النقود: لم تعد الأمور تتعلق فقط بالمدفوعات. تخيل إدارة بطاقات الولاء، التذاكر، وحتى
                  <br />إدارة الاستثمارات - كل ذلك في تطبيق آمن واحد. المستقبل المالي هنا!
                </p>
                <p>
                  الإقراض والاقتراض في DeFi: اكسب فائدة على أصولك المشفرة أو
                  اقترض أموالاً بأسعار تنافسية،
                  <br />كل ذلك مدعوم بالعقود الذكية.
                </p>
                <p>
                  الزراعة العائدية: عزز أرباحك عبر إقراض أصولك المشفرة بشكل استراتيجي عبر
                  <br />بروتوكولات DeFi المختلفة.
                </p>
                <p>
                  الأمان والشفافية: منصتنا تضمن أمان أموالك باستخدام بروتوكولات أمان قوية
                  <br />ومعاملات شفافة على السلسلة.
                </p>
                <p>
                  تجربة مستخدم سلسة: نقدم واجهة بديهية وموارد تعليمية لمساعدتك
                  <br />في التنقل في عالم DeFi بثقة، بغض النظر عن مستوى خبرتك.
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
            <div className="col-lg-6 ">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div>
                  <Image className="img-fluid" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-lg-none d-block mb-5 mt-5">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div>
                  <Image className="img-fluid" src={img} />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className={styles.InnovativeBox}>
                <h4>
                  ثورة في المالية: <br />اكتشف منصتنا القوية <br />للتمويل اللامركزي
                </h4>
                <p>
                  Fintechify تقوم بتغيير اللعبة مع منصتنا الثورية للتمويل اللامركزي (DeFi)، المصممة خصيصاً لك.
                </p>
                <p>
                  تحرر من القيود التقليدية: تخلص من الوساطة وسيطر على استثماراتك،
                  <br /> الاقتراض، وأنشطة الإقراض.
                </p>
                <p>
                  اكتشف عالماً من الإمكانيات: استمتع بمجموعة متنوعة من منتجات وخدمات التمويل اللامركزي، بما في ذلك:
                </p>
                <p>
                  التبادلات اللامركزية (DEXs): تداول العملات المشفرة مباشرة من نظير إلى نظير دون الاعتماد على
                  <br />المنصات المركزية.
                </p>{" "}
                <p>
                  أكثر من مجرد النقود: لم تعد الأمور تتعلق فقط بالمدفوعات. تخيل إدارة بطاقات الولاء، التذاكر، وحتى
                  <br />إدارة الاستثمارات - كل ذلك في تطبيق آمن واحد. المستقبل المالي هنا!
                </p>
                <p>
                  الإقراض والاقتراض في DeFi: اكسب فائدة على أصولك المشفرة أو
                  اقترض أموالاً بأسعار تنافسية،
                  <br />كل ذلك مدعوم بالعقود الذكية.
                </p>
                <p>
                  الزراعة العائدية: عزز أرباحك عبر إقراض أصولك المشفرة بشكل استراتيجي عبر
                  <br />بروتوكولات DeFi المختلفة.
                </p>
                <p>
                  الأمان والشفافية: منصتنا تضمن أمان أموالك باستخدام بروتوكولات أمان قوية
                  <br />ومعاملات شفافة على السلسلة.
                </p>
                <p>
                  تجربة مستخدم سلسة: نقدم واجهة بديهية وموارد تعليمية لمساعدتك
                  <br />في التنقل في عالم DeFi بثقة، بغض النظر عن مستوى خبرتك.
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

      <section className={`${styles.processSection} mt-5`} data-aos="fade-up">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <h4 className="text-center">خدماتنا لتطوير منصة DeFi</h4>
            <h4 className="mb-5 text-center">سئمت من القلق بشأن الأمان والخيارات المحدودة؟</h4>

            <div className={styles.flexBoxes}>
              <div className="col-lg-5">
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.decentralizedBlueUpperBox} p-5`}
                >
                  <h5>سئمت من القلق بشأن الأمان والخيارات المحدودة؟</h5>
                  <p>
                    منصة Fintechify للتمويل اللامركزي توفر مزيجًا قويًا من 
                    <br /> الأمان المتطور ومجموعة متنوعة من الأدوات المالية،
                    <br /> المتاحة على مدار الساعة.
                  </p>
                  <h5>مبنية بأمان قوي:</h5>
                  <ul>
                    <li>
                      مدعومة بتكنولوجيا البلوكشين: نستخدم أحدث تكنولوجيا
                      <br />البلوكشين لضمان كل معاملة:
                    </li>{" "}
                    <li>
                      آمنة: مشفرة وغير قابلة للتلاعب، لحماية أموالك.
                    </li>
                    <li>
                      شفافة: كل خطوة مرئية وقابلة للتحقق على السلسلة.
                    </li>
                    <li>
                      غير قابلة للتغيير: بعد إتمام المعاملات، لا يمكن عكسها، مما يعزز الثقة.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5" id={styles.marginBoxTop}>
                <div
                  className={`${styles.processBox} ${styles.blueBg} ${styles.decentralizedWhiteBottomBox} p-5`}
                >
                  <h5>اكتشف عالمًا من الإمكانيات المالية:</h5>
                  <ul>
                    <li>
                      أبعد من التمويل التقليدي: منصتنا تقدم مجموعة أوسع
                      <br />من الأدوات المالية أكثر من أي وقت مضى:
                    </li>
                    <li>
                      التبادلات اللامركزية (DEXs): تداول مباشرة مع مستخدمين آخرين،
                      <br />دون الاعتماد على المنصات المركزية.
                    </li>
                    <li>
                      بروتوكولات الإقراض والاقتراض: اكسب فائدة على أصولك أو اقترض أموالًا بأسعار تنافسية.
                    </li>
                    <li>
                      فرص الزراعة العائدية: عزز عوائدك من خلال إقراض أصولك بشكل استراتيجي عبر بروتوكولات DeFi.
                    </li>
                  </ul>

                  <h5>تكامل سلس وإمكانية الوصول:</h5>
                  <ul>
                    <li>
                      نظام DeFi في متناول يديك: منصتنا متوافقة مع التطبيقات اللامركزية الأخرى (DApps)
                      <br />وشبكات البلوكشين، مما يسمح لك باستكشاف كامل منظومة DeFi.
                    </li>
                    <li>
                      الحرية المالية على مدار الساعة: بغض النظر عن موقعك أو مستوى خبرتك،
                      <br />واجهة المستخدم البسيطة الخاصة بنا تجعل DeFi سهل الاستخدام وفي متناول الجميع.
                    </li>
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
              <Image src={QoutesImg} alt="اقتباسات" />
              <h1 className={`${styles.heading} text-center`}>
                هل أنت مستعد للتحرر من التمويل التقليدي؟
              </h1>
              <h3 className='text-center'>منصتنا المتطورة للتمويل اللامركزي تمكنك</h3>
            </div>
            <div className="col-lg-12 text-center">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <li className="text-center">
                    <span>
                      تداول مثل المحترفين: وصول إلى مجموعة متنوعة من العملات المشفرة على DEX الآمنة الخاصة بنا.
                    </span>
                  </li>
                  <li className="text-center">
                    <span>
                      اربح مثل الملوك: اقترض، وقدم قروضًا، وازرع للحصول على عوائد عالية باستخدام أدوات DeFi المبتكرة.
                    </span>
                  </li>
                  <li className="text-center">
                    <span>
                      كن مصرفك الخاص: سيطر على أموالك، بدون سيطرة مركزية.
                    </span>
                  </li>
                </ul>
              </div>
              <h5 className="text-center">
                لا تنتظر! اشترك اليوم للحصول على حساب Fintechify المجاني الخاص بك واكتشف عالمًا من الإمكانيات المالية.
              </h5>
              <h3 style={{fontWeight:"600"}} className="text-center">عدد محدود من الأماكن! انضم إلى الثورة الآن!</h3>
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
