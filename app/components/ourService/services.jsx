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


const services = () => {
  return (
    <div className={`container-fluid my-5`}>
      <div className={`container mt-5`}>
        <div className={`row`}>
          <div className={`col-lg-5`}>
            <span className={style.about}>
              <RiSettings2Line className={style.settingIcon} />
              <h4>our services</h4>
            </span>
            <div className={style.content}>
              <h1 className={style.h1}>Our banking services and benefits</h1>
              <p>
                Explore the our banking services and benefits at Bank of
                Fintechify, tailored to provide a modern, secure banking
                experience.
              </p>
            </div>
            <div className={style.LuSend}>
              <LuSend className={style.sendIcon} />
              <span>
                <p>General enquiries</p>
                <h6>talktous@fintechify.ae</h6>
              </span>
            </div>
            <div className={style.LuSend}>
              <PiHeadphonesLight className={style.sendIcon} />
              <span>
                <p>Customer sales enquiries</p>
                <h6>+971-54-5061985</h6>
              </span>
            </div>
            <button className={style.LuSend2}>
              View All Services <FaArrowRight />
            </button>
          </div>
          <div className={`col-lg-7 ${style.rightBoxes}`} >
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={User} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={Loan} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={Card} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
            <div className={style.card}>
              <h2>Saving Account</h2>
              <p>
                Watch your money flourish with flexible options and competitive
                rates. Earn interest while enjoying the easy access to your
                funds.
              </p>
              <span>
                <Image src={HealthCare} width={50} height={50} />
                <MdArrowOutward className={style.arrow} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
