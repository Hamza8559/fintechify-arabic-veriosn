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
import Link from 'next/link';


const services = () => {
  return (
    <div className={`container-fluid my-5`}>
      <div className={`container mt-5`}>
        <div className={`row`}>
          <div className={`col-lg-5 ${style.check}`}>
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
            <div className={`${style.flexBoxNew}`}>
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
            </div>
            <button className={`${style.LuSend2} d-lg-block d-none`}>
              <Link href="/service" style={{ textDecoration: "none", color: "white" }}>View All Services <FaArrowRight /></Link>
            </button>
          </div>
          <div className={`col-lg-7 col-sm-12 ${style.rightBoxes}`} >
            <div className="row justify-content-end" id={`${style.flexRow}`}>
                <div className={`${style.card} col-md-5 col-sm-12`}>
                  <h2>Banking App</h2>
                  <p>
                    At Fintechify, we specialize in creating cutting-edge banking apps tailored to the unique requirements of financial institutions.
                  </p>
                  <span>
                    <Image src={Loan} width={50} height={50} />
                    <Link href="/Banking-app-development" style={{ textDecoration: "none", color: "black" }}><MdArrowOutward className={style.arrow} /></Link>
                  </span>
                </div>
                <div className={`${style.card} col-md-5 col-sm-12`}>
                  <h2>Digital Wallet</h2>
                  <p>
                    Welcome to our Digital Wallet Development Services! In today’s fast-paced digital landscape, convenience is paramount,
                  </p>
                  <span>
                    <Image src={User} width={50} height={50} />
                    <Link href="/Digital-wallet-development" style={{ textDecoration: "none", color: "black" }}><MdArrowOutward className={style.arrow} /></Link>
                  </span>
                </div>
            </div>
            <div className="row justify-content-end" id={`${style.flexRow}`}>
              <div className={`${style.card} col-md-5 col-sm-12`}>
                <h2>Insurance Software</h2>
                <p>
                  At Fintechify, we understand the complexities of the insurance industry and the critical need for efficient, secure, and scalable software solutions.
                </p>
                <span>
                  <Image src={HealthCare} width={50} height={50} />
                  <Link href="/Insurance-software-development" style={{ textDecoration: "none", color: "black" }}><MdArrowOutward className={style.arrow} /></Link>
                </span>
              </div>
              <div className={`${style.card} col-md-5 col-sm-12`}>
                <h2> FinOps Services</h2>
                <p>
                  Welcome to Fintechify, where we offer comprehensive FinOps services designed to streamline your financial operations and optimize your business’s financial health.
                </p>
                <span>
                  <Image src={Card} width={50} height={50} />
                  <Link href="/finops-services" style={{ textDecoration: "none", color: "black" }}><MdArrowOutward className={style.arrow} /></Link>
                </span>
              </div>
            </div>
            <button className={`${style.LuSend2} ${style.LuSendMobile} d-block d-lg-none`}>
              <Link href="/service" style={{ textDecoration: "none", color: "white" }}>View All Services <FaArrowRight /></Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
