import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/involve_media.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/3d-internet-secuirty-badge.jpg"
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
        head={"منصة الإعلام التفاعلية"}
        tagLine={false}
        Des={false}
      />

      <section className='mb-5 mt-5 d-lg-block d-none'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>الإعلام التفاعلي</h4>
                <p>
                  على عكس معظم المواقع الموجهة نحو الفيديو التي تعرض إعلانًا فقط في بداية أو نهاية الفيديو، تهدف منصة الإعلام التفاعلي EVS إلى وضع إعلانات تفاعلية أكثر ملاءمة وسياقًا في مواقع أقل تدخلًا داخل دفق الفيديو.
                </p>
                <h5 className='mt-5'>خادم إعلانات قوي للسياق <br />لمحتوى الفيديو</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الوسائط</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />محرر سياق الفيديو</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مدير الإعلانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مصمم نقاط الفيديو التفاعلية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مدير حملة الإعلانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التحليلات والتقارير</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مشغل الفيديو التفاعلي</li>
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
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>الإعلام التفاعلي</h4>
                <p>
                  على عكس معظم المواقع الموجهة نحو الفيديو التي تعرض إعلانًا فقط في بداية أو نهاية الفيديو، تهدف منصة الإعلام التفاعلي EVS إلى وضع إعلانات تفاعلية أكثر ملاءمة وسياقًا في مواقع أقل تدخلًا داخل دفق الفيديو.
                </p>
                <h5 className='mt-5'>خادم إعلانات قوي للسياق <br />لمحتوى الفيديو</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight />إدارة الوسائط</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />محرر سياق الفيديو</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مدير الإعلانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مصمم نقاط الفيديو التفاعلية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مدير حملة الإعلانات</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />التحليلات والتقارير</li>
                  <li><MdOutlineKeyboardDoubleArrowRight />مشغل الفيديو التفاعلي</li>
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
                  لماذا يجب عليك الانتقال إلى <br />تطوير تطبيقات البنوك
                </h2>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تقليل التكاليف:</h3>
                    <span>خفض النفقات التشغيلية من خلال تشجيع استخدام الخدمات المصرفية عبر الهاتف المحمول بدلاً من الفروع التقليدية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تقليل النفقات التشغيلية من خلال تشجيع استخدام <br />الخدمات المصرفية عبر الهاتف المحمول بدلاً من الفروع التقليدية.</h3>
                    <span>توفير تجربة مصرفية أكثر تخصيصًا وتفاعلية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تحسين رضا العملاء:</h3>
                    <span>تقديم خدمات مريحة وفعّالة، مما يؤدي إلى زيادة الاحتفاظ بالعملاء.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تحليلات قائمة على البيانات:</h3>
                    <span>جمع بيانات قيمة حول سلوك العملاء وعادات الإنفاق لاستخدامها في استراتيجيات التسويق المستقبلية وتطوير المنتجات.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>ميزة تنافسية:</h3>
                    <span>البقاء في الصدارة من خلال تقديم حلول مصرفية مبتكرة عبر الهاتف المحمول.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt='اقتباسات' />
              <h4>ابدأ اليوم</h4>
              <p>هل سئمت من تطبيقات البنوك البطيئة؟ نحن نبني تطبيقات مذهلة.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>يستحق عملاؤك تجربة مصرفية عبر الهاتف المحمول تنطلق بهم، وليس واحدة عالقة في العصور القديمة. يقوم فريقنا في "فينتكيفا" بإنشاء تطبيقات قوية وسهلة الاستخدام التي:</h5>
                  <li className='text-start'><IoCheckmarkSharp /><span>تحمي المعلومات كما لو كانت في فورت نوكس (لكن مع اتصال واي فاي أفضل).</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>تجعل إدارة الأموال أسهل من الانزلاق بسلاسة.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>تجعل إدارة الأموال أسهل من أي وقت مضى.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedRight}`}>
                <h4>ابدأ الآن</h4>
                <button className={`${styles.LuSend} mt-3`}>
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
      </section>

      <Testimonials />
      <Footer />
    </>
  )
}

export default page;
