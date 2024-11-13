import React from "react";
import style from "./services.module.css";
import { RiSettings2Line } from "react-icons/ri";
import { LuSend } from "react-icons/lu";
import { PiHeadphonesLight } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa6";
import User from "../assets/images/user.svg";
import Card from "../assets/images/credit-card-6.svg";
import Loan from "../assets/images/loan.svg";
import HealthCare from "../assets/images/healthcare.svg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { LuArrowUpLeft } from "react-icons/lu";

import { FiArrowUpLeft } from "react-icons/fi";

const services = () => {
  return (
    <div className={`container-fluid my-5`}>
      <div className={`container mt-5`}>
        <div className={`row`}>
          <div className={`col-lg-5 ${style.check}`}>
            <span className={style.about}>
              <RiSettings2Line className={style.settingIcon} />
              <h4>خدماتنا</h4>
            </span>
            <div className={style.content}>
              <h1 className={style.h1}>خدماتنا المصرفية<br />  وفوائدها</h1>
              <p>
              استكشف خدماتنا المصرفية وفوائدها في بنك Fintechify، المصممة لتوفير تجربة مصرفية حديثة وآمنة.
              </p>
            </div>
            <div className={`${style.flexBoxNew}`}>
              <div className={style.LuSend}>
                <span>
                  <p>الاستفسارات العامة</p>
                  <h6>talktous@fintechify.ae</h6>
                </span>
                <LuSend className={style.sendIcon} />
              </div>
              <div className={style.LuSend}>
                <span>
                  <p>استفسارات مبيعات العملاء</p>
                  <h6>971-54-5061985+</h6>
                </span>
                <PiHeadphonesLight className={style.sendIcon} />
              </div>
            </div>
            <button className={`${style.LuSend2}`}>
              <Link
                href="/service"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FiArrowUpLeft />عرض جميع الخدمات{" "}
                
              </Link>
            </button>
          </div>
          <div className={`col-lg-7 col-sm-12 ${style.rightBoxes}`}>
            <div className="row justify-content-end" id={`${style.flexRow}`}>
              <div className={`${style.card} col-md-5 col-sm-12`}>
                <h2>تطبيق مصرفي</h2>
                <p>
                  في Fintechify، نحن متخصصون في إنشاء تطبيقات مصرفية متطورة
                  مصممة خصيصًا لتلبية الاحتياجات الفريدة للمؤسسات المالية.
                </p>
                <span>
                  <Link
                    href="/Banking-app-development"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <LuArrowUpLeft className={style.arrow} />
                  </Link>
                  <Image src={Loan} width={50} height={50} />
                </span>
              </div>
              <div className={`${style.card} col-md-5 col-sm-12`}>
                <h2>المحفظة الرقمية</h2>
                <p>
                  مرحبًا بكم في خدمات تطوير المحفظة الرقمية لدينا! في ظل المشهد
                  الرقمي السريع اليوم، تعتبر الراحة أولوية قصوى.
                </p>
                <span>
                  <Link
                    href="/Digital-wallet-development"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <LuArrowUpLeft className={style.arrow} />
                  </Link>
                  <Image src={User} width={50} height={50} />
                </span>
              </div>
            </div>
            <div className="row justify-content-end" id={`${style.flexRow}`}>
              <div className={`${style.card} col-md-5 col-sm-12`}>
                <h2>برنامج التأمين</h2>
                <p>
                في Fintechify، نفهم تعقيدات صناعة التأمين والحاجة الملحة إلى حلول برمجية فعالة وآمنة وقابلة للتطوير.
                </p>
                <span>
                  <Link
                    href="/Insurance-software-development"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <LuArrowUpLeft className={style.arrow} />
                  </Link>
                  <Image src={HealthCare} width={50} height={50} />
                </span>
              </div>
              <div className={`${style.card} col-md-5 col-sm-12`}>
                <h2> خدمات FinOps</h2>
                <p>
                مرحبًا بكم في Fintechify، حيث نقدم خدمات FinOps شاملة تهدف إلى تبسيط عملياتك المالية وتحسين الصحة المالية لأعمالك.
                </p>
                <span>
                  <Link
                    href="/finops-services"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <LuArrowUpLeft className={style.arrow} />
                  </Link>
                  <Image src={Card} width={50} height={50} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
