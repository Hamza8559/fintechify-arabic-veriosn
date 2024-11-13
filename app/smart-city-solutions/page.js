import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/3f78baf2.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/222222222.jpg"
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"حلول المدن الذكية"}
        tagLine={false}
        Des={false}
      />

      <section className='mb-5 mt-5 d-lg-block d-none'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>المدينة الذكية | القيادة والسيطرة المتكاملة لخدمات المدينة</h4>
                <p>
                    المدينة الذكية | القيادة والسيطرة المتكاملة لخدمات المدينة
                </p>
                <h5 className='mt-5'>الوحدات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المرافق</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الصحة والسلامة والأمن</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المواقف</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />الإعلانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التحكم في الإضاءة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مراقبة الأمن</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مراقبة المناخ</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة النفايات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التنقل الذكي</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />الخدمات المالية المتكاملة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المياه والصرف الصحي</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الأسطول</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />والمزيد...</li>
                </ul>
              </div>
              <button className={`${styles.LuSend2} mt-3`}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                    انضم الآن <FaArrowRight />
                  </span>
                </Link>
              </button>
            </div>
            <div className="col-lg-6">
              <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                <Image src={img1} className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-5 mt-5 d-lg-none d-block'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                <Image src={img1} className='img-fluid' />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>المدينة الذكية | القيادة والسيطرة المتكاملة لخدمات المدينة</h4>
                <p>
                    المدينة الذكية | القيادة والسيطرة المتكاملة لخدمات المدينة
                </p>
                <h5 className='mt-5'>الوحدات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المرافق</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الصحة والسلامة والأمن</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المواقف</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />الإعلانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التحكم في الإضاءة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مراقبة الأمن</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مراقبة المناخ</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة النفايات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التنقل الذكي</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />الخدمات المالية المتكاملة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المياه والصرف الصحي</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الأسطول</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />والمزيد...</li>
                </ul>
              </div>
              <button className={`${styles.LuSend2} mt-3`}>
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
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="500" >
                <Image className="img-fluid" src={aboutFirstSectionImg} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.aboutFirstsection} data-aos="fade-right" data-aos-offset="300">
                <h2 className=''>
                دعونا نجعل المدن<br/> ذكية…
                </h2>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>خفض التكاليف:</h3>
                    <span>خفض النفقات التشغيلية من خلال تشجيع استخدام<br /> الخدمات المصرفية عبر الهاتف المحمول بدلاً من الفروع التقليدية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>خفض النفقات التشغيلية:</h3>
                    <span>تقديم تجربة مصرفية أكثر تخصيصًا وتفاعلية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تحسين رضا العملاء:</h3>
                    <span>تقديم خدمات مريحة وفعالة، مما يؤدي إلى زيادة الاحتفاظ بالعملاء.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تحليلات مدفوعة بالبيانات:</h3>
                    <span>الحصول على بيانات قيمة حول العملاء وعادات الإنفاق لتوجيه <br />استراتيجيات التسويق المستقبلية وتطوير المنتجات.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>الميزة التنافسية:</h3>
                    <span>البقاء في الصدارة من خلال تقديم حلول مصرفية مبتكرة عبر الهاتف المحمول.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt='الاقتباسات' />
              <h4>ابدأ اليوم</h4>
              <p>هل سئمت من تطبيقات البنوك المعقدة؟ نحن نبني السفن الصاروخية.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>يستحق عملاؤك تجربة مصرفية عبر الهاتف المحمول تنطلق مثل الصواريخ، وليس واحدة عالقة في العصور المظلمة. تقوم Fintechify ببناء تطبيقات قوية عبر الهاتف المحمول، دعنا نساعدك في إعادة تخيل النمو الرقمي لأعمالك مع حلول الجيل التالي.</h5>
                  <li><IoCheckmarkSharp /> بنك إلكتروني على مدار الساعة طوال أيام الأسبوع</li>
                  <li><IoCheckmarkSharp /> بنك ذكي للجوّال</li>
                  <li><IoCheckmarkSharp /> ميزات أمان متقدمة</li>
                  <li><IoCheckmarkSharp /> شبكة مالية متكاملة</li>
                  <li><IoCheckmarkSharp /> منصة مفتوحة مع واجهة API مبتكرة</li>
                  <li><IoCheckmarkSharp /> أدوات إدارة مرنة لمؤسستك المالية</li>
                  <li><IoCheckmarkSharp /> منصة مصرفية متعددة القنوات</li>
                </ul>
                <button className={`${styles.LuSend2} mt-3`}>
                  <Link href="/contact-us" passHref>
                    <span style={{ textDecoration: "none", color: "white" }}>
                      احجز موعدك الآن <FaArrowRight />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedRight}`}>
                <ul>
                  <h5>ابدأ بالحلول المالية المتكاملة:</h5>
                  <li><IoCheckmarkSharp /> حلول أمنية متعددة الطبقات</li>
                  <li><IoCheckmarkSharp /> تكامل سلس مع الأنظمة المصرفية القديمة</li>
                  <li><IoCheckmarkSharp /> تحسين تجربة العميل عبر جميع القنوات</li>
                  <li><IoCheckmarkSharp /> حلول متطورة تواكب تطلعاتك المستقبلية</li>
                  <li><IoCheckmarkSharp /> خدمات الدفع السريعة والآمنة</li>
                  <li><IoCheckmarkSharp /> تقارير ومتابعة تحليلات كاملة للعملاء</li>
                </ul>
                <button className={`${styles.LuSend2} mt-3`}>
                  <Link href="/contact-us" passHref>
                    <span style={{ textDecoration: "none", color: "white" }}>
                      انضم الآن <FaArrowRight />
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <Footer />
    </>
  )
}

export default page
