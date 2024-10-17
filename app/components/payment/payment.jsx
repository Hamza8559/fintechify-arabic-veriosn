"use client";
import React, { useState } from "react";
import style from "./payment.module.css";
import { RiSettings2Line } from "react-icons/ri";
import Image from "next/image";
import bg1 from "../assets/images/h1_showcase1.jpg";
import bg2 from "../assets/images/h1_showcase2.jpg";
import bg3 from "../assets/images/h1_showcase3.jpg";
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
          <div className="col-lg-6">
            <span className={style.about}>
              <MdOutlinePayment className={style.settingIcon} />
              <h4>Payment Process</h4>
            </span>
            <h1 className={style.heading}>
            Simplified Your Banking!
            </h1>
          </div>
        </div>
        <div className={`row ${style.row2}`}>
          <div className={`col-lg-6 mt-1`}>
            <div
              className={isHover ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver}
            >
              <h1 className={isHover ? style.numberHover : style.number}>01</h1>
              <span
                className={isHover ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>Strategies That Shift Perspectives</h1>
                <p>
                  Join Fintechify in revolutionizing digital finance. We craft
                  innovative strategies and top-tier solutions to propel your
                  business ahead in the fintech market. Let's shape the future
                  of banking together.
                </p>
              </span>
            </div>
            <div
              className={isHover1 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver1}
            >
              <h1 className={isHover1 ? style.numberHover : style.number}>
                02
              </h1>
              <span
                className={isHover1 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>The Game Has Changed</h1>
                <p>
                  Forget fumbling with cards and endless paperwork. Fintechify
                  is your springboard to the future of finance, where a tap
                  unlocks a world of financial ease.
                </p>
              </span>
            </div>
            <div
              className={isHover2 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver2}
            >
              <h1 className={isHover2 ? style.numberHover : style.number}>
                03
              </h1>
              <span
                className={isHover2 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>We Don't Just Craft Solutions, We Craft Experiences.</h1>
                <p>
                  Our team of financial wizards blends cutting-edge technology
                  with unparalleled design to create digital banking that's as
                  smooth as it is secure.
                </p>
              </span>
            </div>
            <div
              className={isHover3 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver3}
            >
              <h1 className={isHover3 ? style.numberHover : style.number}>
                04
              </h1>
              <span
                className={isHover3 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>Ready To Dominate The Market?</h1>
                <p>
                  Partner with Fintechify and transform your business. We'll
                  help you navigate the ever-evolving digital finance landscape,
                  leaving the competition in the dust.
                </p>
              </span>
            </div>
            <div
              className={isHover4 ? style.cardHover : style.card}
              onMouseEnter={handleMouseOver4}
            >
              <h1 className={isHover4 ? style.numberHover : style.number}>
                05
              </h1>
              <span
                className={isHover4 ? style.spamHover : style.spam}
                id={style.spamHeadBox}
              >
                <h1>Don't Just Survive, Thrive.</h1>
                <p>
                  Become a pioneer in the fintech revolution. With Fintechify,
                  you're not just keeping pace, you're setting the standard.
                </p>
              </span>
            </div>
          </div>
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
                <Image src={bg3} className={`${style.bg1} img-fluid`} />
              </div>
            )}
            {isHover4 && (
              <div className={style.divbg}>
                <Image src={bg3} className={`${style.bg1} img-fluid`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
