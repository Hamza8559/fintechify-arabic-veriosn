"use client";
import React, { useEffect } from "react";
import styles from "../assets/css/testimonials.module.css";
import { RiChatQuoteLine } from "react-icons/ri";
import logo1 from "../assets/images/a64de0e4-d52c-446d-b89b-ebdec1774381.webp";
import logo2 from "../assets/images/logo2.e20e11af.png";
import Image from "next/image";
import AOS from "aos";

export default function Testimonials() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="mt-5">
        <div className={`${styles.testimonialsBg} container `}>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className={styles.testimonailsLeftPart}>
                <div className={styles.tagBox}>
                  <RiChatQuoteLine />
                  <span>عملاؤنا السعداء</span>
                </div>
                <h4>انضم إلى ملايين الأشخاص الذين <br/>يثقون بنا بالفعل.</h4>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <div className={styles.testimonailsRightPart}>
                <p>
                  عملاؤنا هم جوهر كل ما نقوم به. نفخر ببناء علاقات دائمة وتقديم
                  خدمة استثنائية للأفراد الذين يقدّرون الأشياء الراقية في
                  الحياة.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.contentSection}>
                <div>
                  <Image src={logo1} alt="logo" className={styles.logo1} />
                  <span>
                    "لقد غيرت Fintechify تجربتي المالية بالكامل. خدماتهم
                    الإلكترونية السلسة، والدعم المتجاوب، والحلول الاستثمارية
                    المبتكرة جعلت إدارة أموالي سهلة للغاية. أوصي بشدة بـ
                    Fintechify لواجهة المستخدم السهلة والالتزام برضا العملاء."
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className={styles.contentSection}>
                <div>
                  <Image src={logo2} alt="logo" className={styles.logo1} />
                  <span>
                    "لقد غيرت Fintechify تجربتي المالية. خدماتهم الإلكترونية
                    المتسقة، والدعم المتجاوب، والحلول الاستثمارية المبتكرة جعلت
                    إدارة أموالي سهلة للغاية. أوصي بشدة بـ Fintechify لواجهة
                    المستخدم السهلة والالتزام برضا العملاء."
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
