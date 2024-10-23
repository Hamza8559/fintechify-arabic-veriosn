"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/app/components/Banner/Banner'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "../components/assets/css/about.module.css"
import aboutFirstSectionImg from "../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg"
import Testimonials from '../components/Testimonials/Testimonials'

import CountUp from 'react-countup';

export default function page() {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head="من نحن"
        tagLine="رحلتنا للوصول إلى أفضل حل يناسبك"
        Des={`ابدأ رحلة تعاونية معنا بينما نتنقل بين الاحتمالات، التحديات، والابتكارات لصياغة الحل الأمثل المصمم خصيصًا لاحتياجاتك الفريدة. التزامنا هو إرشادك خلال هذه الرحلة، والتأكد من أن المسار الذي نسلكه معًا يؤدي إلى أفضل النتائج المالية بالنسبة لك.`}
      />
      <section className={styles.aboutFirst}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.aboutFirstsection} data-aos="fade-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="500">
                <h2>نحن نفعل ذلك بأكثر الطرق أهمية ووجودًا، باستخدام البيانات والتقنيات الرقمية</h2>
                <p>
                  في Fintechify، نعيد تشكيل المالية بلمسة عصرية، ندمج بين البيانات والتقنيات الرقمية لتحقيق الدقة والحلول الحديثة. انضم إلينا في رحلة تحويلية حيث يلتقي الابتكار مع احتياجاتك المالية.
                </p>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>النزاهة</h3>
                    <span>نلتزم بأعلى معايير النزاهة، مما يضمن الشفافية والصدق والممارسات الأخلاقية في جميع جوانب خدماتنا.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>الولاء</h3>
                    <span>ولاؤنا الثابت لك، عميلنا العزيز، بينما نبني علاقات دائمة ونبقى ثابتين في التزامنا برفاهيتك المالية.</span>
                  </div>
                </div>
                <div className={styles.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>الالتزام</h3>
                    <span>بالتزام مخصص، نقف إلى جانبك، نقدم الإرشادات المالية الموثوقة والدعم لمساعدتك في تحقيق أهدافك.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="center-bottom">
                <Image className="img-fluid" src={aboutFirstSectionImg} alt="About Us Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "50px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.clientSeciton}>
                <h5 data-aos="fade-up" data-aos-duration="500" className='text-center'>
                  السبب الذي يجب أن تختارنا مستشارك المالي
                </h5>
                <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='text-center' data-aos-duration="500">
                  نحن نعرّف بقيمنا الأساسية - النزاهة، الولاء، والالتزام. مهمتنا هي تقديم خدمات مالية تتجاوز المعاملات، مع التركيز على بناء علاقات موثوقة. من خلال التمسك بأعلى المعايير الأخلاقية، نضع رفاهيتك المالية في الأولوية.
                </p>
                {/* <div className={styles.counterStyle}>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={100}></CountUp>K</h4>
                    <span>المستخدمون النشطون</span>
                  </div>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={400}></CountUp>K</h4>
                    <span>التطبيقات المحملة</span>
                  </div>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={99}></CountUp>%</h4>
                    <span>المستخدمون الراضون</span>
                  </div>
                  <div className={styles.innerCounter}>
                    <h4><CountUp delay={1} style={{ color: "white", fontSize: "50px" }} start={0} end={200}></CountUp>+</h4>
                    <span>الشركاء المنضمون</span>
                  </div>
                </div> */}
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
