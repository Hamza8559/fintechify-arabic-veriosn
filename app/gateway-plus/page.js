import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/cropped-mobile-man1.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/11111111.jpg"
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
        head={"جيتواي بلس"}
        tagLine={false}
        Des={false}
      />

      <section className='mb-5 mt-5 d-lg-block d-none'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>جيتواي بلس | نظام تحويل متكامل لخدمات الدفع عبر الهاتف المحمول</h4>
                <p>
                  جيتواي بلس هو حل مثالي، خاصة لمزودي خدمات الاتصالات والخدمات المالية عبر الهاتف المحمول، الذين يبحثون عن نظام استضافة قوائم USSD مخصص يمكن نشره كجسر تواصل بين بوابة USSD ومنصات الخدمات المالية عبر الهاتف المحمول.
                </p>
                <h5 className='mt-5'>المكونات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />تقارير اللوحة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />بوابة USSD للاتصالات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة العملاء</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الميزات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة القنوات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />توجيه الرسائل</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تشفير البيانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الأنظمة الخارجية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تحويل الرسائل</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />سجلات التدقيق</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المستخدمين</li>
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
                <h4>جيتواي بلس | نظام تحويل متكامل لخدمات الدفع عبر الهاتف المحمول</h4>
                <p>
                  جيتواي بلس هو حل مثالي، خاصة لمزودي خدمات الاتصالات والخدمات المالية عبر الهاتف المحمول، الذين يبحثون عن نظام استضافة قوائم USSD مخصص يمكن نشره كجسر تواصل بين بوابة USSD ومنصات الخدمات المالية عبر الهاتف المحمول.
                </p>
                <h5 className='mt-5'>المكونات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />تقارير اللوحة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />بوابة USSD للاتصالات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة العملاء</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الميزات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة القنوات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />توجيه الرسائل</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تشفير البيانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الأنظمة الخارجية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />تحويل الرسائل</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />سجلات التدقيق</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة المستخدمين</li>
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
                دعونا نتواصل مع <br />الأشخاص غير المتعاملين مع البنوك…
                </h2>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تقليل التكاليف:</h3>
                    <span>خفض النفقات التشغيلية عن طريق تشجيع <br />استخدام الخدمات المصرفية عبر الهاتف المحمول بدلاً من الفروع التقليدية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>خفض النفقات التشغيلية عن طريق تشجيع <br />استخدام الخدمات المصرفية عبر الهاتف المحمول<br /> بدلاً من الفروع التقليدية.</h3>
                    <span>تقديم تجربة مصرفية أكثر تخصيصًا وتفاعلية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تحسين رضا العملاء:</h3>
                    <span>تقديم خدمات مريحة وفعالة، مما يؤدي إلى زيادة ولاء العملاء.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>رؤى قائمة على البيانات:</h3>
                    <span>احصل على بيانات قيمة حول العملاء وعادات الإنفاق لتحسين استراتيجيات<br /> التسويق وتطوير المنتجات المستقبلية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>ميزة تنافسية:</h3>
                    <span>ابق في الصدارة من خلال تقديم حلول مصرفية مبتكرة عبر الهاتف المحمول.</span>
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
              <Image src={QoutesImg} alt='Qoutes' />
              <h4>ابدأ اليوم</h4>
              <p>هل تعبت من تطبيقات البنوك الثقيلة؟ نحن نبني صواريخ.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <li><IoCheckmarkSharp className={styles.iconClass} />شهادة أمان SSL وتشفير قوي</li>
                  <li><IoCheckmarkSharp className={styles.iconClass} />دعم متعدد القنوات</li>
                  <li><IoCheckmarkSharp className={styles.iconClass} />تحليلات متقدمة</li>
                  <li><IoCheckmarkSharp className={styles.iconClass} />واجهة سهلة الاستخدام</li>
                  <li><IoCheckmarkSharp className={styles.iconClass} />الدعم والتحديثات</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedRight}`}>
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
