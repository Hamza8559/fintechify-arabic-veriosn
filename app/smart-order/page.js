import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/portal-scrreen.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/smartScd.jpg"
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
        head={"طلب ذكي"}
        tagLine={false}
        Des={false}
      />

      <section className='mb-5 mt-5 d-lg-block d-none'>
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
              <div className={styles.InnovativeBox}>
                <h4>SMART ORDER | حل الطلبات والتوزيع</h4>
                <p>
                  يخلق رابطاً بين جميع أصحاب المصلحة في سلسلة التوريد. يدعم شبكة التوزيع للشركة عن طريق إنشاء الطلبات لتنفيذها. يلعب النظام دور مركز تبادل المعلومات بين الشركات المصنعة للمنتجات والموزعين ومتاجر التجزئة. يهدف الحل إلى أن يصبح جزءاً أساسياً في سلسلة القيمة في صناعة البيع بالتجزئة.
                </p>
                <h5 className='mt-5'>الوحدات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight /> الوحدات الأساسية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight /> بائع التجزئة والشركة المصنعة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight /> الموزع وبائع التجزئة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight /> بائع التجزئة والعميل</li>
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
                <h4>SMART ORDER | حل الطلبات والتوزيع</h4>
                <p>
                  يخلق رابطاً بين جميع أصحاب المصلحة في سلسلة التوريد. يدعم شبكة التوزيع للشركة عن طريق إنشاء الطلبات لتنفيذها. يلعب النظام دور مركز تبادل المعلومات بين الشركات المصنعة للمنتجات والموزعين ومتاجر التجزئة. يهدف الحل إلى أن يصبح جزءاً أساسياً في سلسلة القيمة في صناعة البيع بالتجزئة.
                </p>
                <h5 className='mt-5'>الوحدات الأساسية</h5>
                <ul className={styles.ulPoints}>
                  <li><MdOutlineKeyboardDoubleArrowRight /> الوحدات الأساسية</li>
                  <li><MdOutlineKeyboardDoubleArrowRight /> بائع التجزئة والشركة المصنعة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight /> الموزع وبائع التجزئة</li>
                  <li><MdOutlineKeyboardDoubleArrowRight /> بائع التجزئة والعميل</li>
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
                دعونا نصل إلى مزيد من<br /> العملاء...
                </h2>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>خفض التكاليف:</h3>
                    <span>تقليل النفقات التشغيلية من خلال تشجيع <br /> استخدام الخدمات المصرفية عبر الهاتف المحمول بدلاً من الفروع التقليدية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>خفض النفقات التشغيلية:</h3>
                    <span>تقديم تجربة مصرفية أكثر تخصيصاً وتفاعلية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>تحسين رضا العملاء:</h3>
                    <span>تقديم خدمات مريحة وفعالة، مما يؤدي إلى تحسين الاحتفاظ بالعملاء.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>رؤى قائمة على البيانات:</h3>
                    <span>اكتساب بيانات قيمة عن العملاء وعادات<br /> الإنفاق لتوجيه استراتيجيات التسويق وتطوير المنتجات المستقبلية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>ميزة تنافسية:</h3>
                    <span>التفوق على المنافسين من خلال تقد يم حلول مصرفية مبتكرة<br /> عبر الهاتف المحمول.</span>
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
              <p>هل سئمت من التطبيقات المصرفية غير المريحة؟ نحن نبني سفن الفضاء.</p>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <h5>يستحق عملاؤك تجربة مصرفية عبر الهاتف المحمول تنطلق للأعلى، لا التي تبقى في العصور المظلمة. نحن نصمم تطبيقات قوية وسهلة الاستخدام:</h5>
                  <li className='text-start'><IoCheckmarkSharp /><span>تحمي المعلومات مثل خزائن فورت نوكس (لكن مع واي فاي أفضل).</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>تجعل إدارة الأموال أسهل من الانزلاق بدون احتكاك.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>تجعل إدارة الأموال أسهل من الانزلاق بدون احتكاك.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.startedBox}  ${styles.starteRight}`}>
                <ul>
                  <h5>نحن لسنا مجرد مطورين، نحن أبطال المصرفية. فريقنا من السحرة المصممين، ونينجا البرمجة، والأدمغة الاستراتيجية يتحدون لإنشاء:</h5>
                  <li className='text-start'><IoCheckmarkSharp /><span>أدوات قوية لتحقيق التميز المصرفي.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>تجربة غنية تعزز القدرة على اتخاذ القرار للمستهلكين.</span></li>
                  <li className='text-start'><IoCheckmarkSharp /><span>استخدام آمن وفائق السرعة للتقنيات الجديدة.</span></li>
                </ul>
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
