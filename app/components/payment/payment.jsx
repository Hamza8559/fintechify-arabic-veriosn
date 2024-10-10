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
  const handleMouseOver = () => {
    setHover(true);
    setHover1(false);
    setHover2(false);
  };

  const handleMouseOver1 = () => {
    setHover1(true);
    setHover(false);
    setHover2(false);
  };

  const handleMouseOver2 = () => {
    setHover2(true);
    setHover1(false);
    setHover(false);

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
              What makes our bank stand out from the rest
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
              <span className={isHover ? style.spamHover : style.spam} id={style.spamHeadBox}>
                <h1>Gateway processing</h1>
                <p>
                  We provide online connectivity to Mastercard and Visa, as well
                  as the full range of card management tools while you hold the
                  balance, perform authorisations, and address...
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
              <span className={isHover1 ? style.spamHover : style.spam} id={style.spamHeadBox}>
                <h1>Gateway processing</h1>
                <p>
                  We provide online connectivity to Mastercard and Visa, as well
                  as the full range of card management tools while you hold the
                  balance, perform authorisations, and address...
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
              <span className={isHover2 ? style.spamHover : style.spam} id={style.spamHeadBox}>
                <h1>Gateway processing</h1>
                <p>
                  We provide online connectivity to Mastercard and Visa, as well
                  as the full range of card management tools while you hold the
                  balance, perform authorisations, and address...
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
