"use client";
import React, { useState } from "react";
import style from "./payment.module.css";
import { RiSettings2Line } from "react-icons/ri";
import Image from "next/image";
import bg1 from "../assets/images/h1.jpg";
import bg2 from "../assets/images/h2.png";
import bg3 from "../assets/images/h3.png";
import bg4 from "../assets/images/h4.png";
import bg5 from "../assets/images/h5.png";
import { MdOutlinePayment } from "react-icons/md";

const payment = () => {
  const [isHover, setHover] = useState(true);
  const [isHover1, setHover1] = useState(false);
  const [isHover2, setHover2] = useState(false);
  const [isHover3, setHover3] = useState(false);
  const [isHover4, setHover4] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
    setHover1(false);
    setHover2(false);
    setHover3(false);
    setHover4(false);
  };

  const handleMouseOver1 = () => {
    setHover1(true);
    setHover(false);
    setHover2(false);
    setHover3(false);
    setHover4(false);
  };

  const handleMouseOver2 = () => {
    setHover2(true);
    setHover1(false);
    setHover(false);
    setHover3(false);
    setHover4(false);
  };
  const handleMouseOver3 = () => {
    setHover3(true);
    setHover2(false);
    setHover1(false);
    setHover(false);
    setHover4(false);
  };
  const handleMouseOver4 = () => {
    setHover4(true);
    setHover2(false);
    setHover1(false);
    setHover(false);
    setHover3(false);
  };

  return (
    <div className={`container-fluid ${style.containerFluid}`}>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className="col-lg-12">
            <span className={style.about}>
              <MdOutlinePayment className={style.settingIcon} />
              <h4>عملية الدفع</h4>
            </span>
            <h1 className={style.heading}>بسط خدماتك المصرفية!</h1>
          </div>
        </div>
        <div className={`row ${style.row2}`}>
          <div className={`col-lg-6  ${style.col6}`}>
            {isHover && (
              <div className={style.divbg}>
                <Image src={bg1} className={`${style.bg1} img-fluid`} />
              </div>
            )}
            {isHover1 && (
              <div className={style.divbg}>
                <Image src={bg2} className={`${style.bg1} img-fluid`} />
              </div>
            )}
            {isHover2 && (
              <div className={style.divbg}>
                <Image src={bg3} className={`${style.bg1} img-fluid`} />
              </div>
            )}
            {isHover3 && (
              <div className={style.divbg}>
                <Image src={bg4} className={`${style.bg1} img-fluid`} />
              </div>
            )}
            {isHover4 && (
              <div className={style.divbg}>
                <Image src={bg5} className={`${style.bg1} img-fluid`} />
              </div>
            )}
          </div>
          <div className={`col-lg-6 mt-1`}>
            <div
              className={isHover ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver}
            >
              <span
                className={isHover ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>استراتيجيات تغير وجهات النظر</h1>
                <p>
                  انضم إلى Fintechify في إحداث ثورة في التمويل الرقمي. نحن نصنع
                  استراتيجيات مبتكرة وحلولًا رفيعة المستوى لدفع عملك نحو الأمام
                  في سوق التكنولوجيا المالية. لنبني مستقبل الخدمات المصرفية
                  معًا.
                </p>
              </span>
              <h1 className={isHover ? style.numberHover : style.number}>01</h1>
            </div>
            <div
              className={isHover1 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver1}
            >
              <span
                className={isHover1 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>قواعد اللعبة تغيرت</h1>
                <p>
                  انسَ التخبط مع البطاقات والأوراق التي لا تنتهي. Fintechify هي
                  منصتك نحو مستقبل التمويل، حيث تفتح لمسة واحدة عالمًا من
                  السهولة المالية.
                </p>
              </span>
              <h1 className={isHover1 ? style.numberHover : style.number}>
                02
              </h1>
            </div>
            <div
              className={isHover2 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver2}
            >
              <span
                className={isHover2 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>نحن لا نصنع حلولًا فحسب، بل نصنع تجارب.</h1>
                <p>
                  فريقنا من خبراء المال يمزج بين التكنولوجيا المتقدمة والتصميم
                  الذي لا يُضاهى لإنشاء خدمات مصرفية رقمية سلسة وآمنة في نفس
                  الوقت.
                </p>
              </span>
              <h1 className={isHover2 ? style.numberHover : style.number}>
                03
              </h1>
            </div>
            <div
              className={isHover3 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver3}
            >
              <span
                className={isHover3 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>هل أنت مستعد للسيطرة على السوق؟</h1>
                <p>
                  تعاون مع Fintechify وحوّل أعمالك. سنساعدك على التنقل في مشهد
                  التمويل الرقمي المتطور باستمرار، لتترك منافسيك في الخلف.
                </p>
              </span>
              <h1 className={isHover3 ? style.numberHover : style.number}>
                04
              </h1>
            </div>
            <div
              className={isHover4 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver4}
            >
              <span
                className={isHover4 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>لا تكتفَ بالبقاء، بل ازدهر.</h1>
                <p>
                  كن رائدًا في ثورة التكنولوجيا المالية. مع Fintechify، أنت لا
                  تواكب التطور فحسب، بل تضع المعايير.
                </p>
              </span>
              <h1 className={isHover4 ? style.numberHover : style.number}>
                05
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
