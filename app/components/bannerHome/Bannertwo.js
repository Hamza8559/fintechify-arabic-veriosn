"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./banner.module.css";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Image1 from "../assets/images/revslider_1_img-1.jpg";
import Image2 from "../assets/images/revslider_1_img-2.jpg";
import Image3 from "../assets/images/revslider_1_img-3.jpg";
import Image4 from "../assets/images/revslider_1_img-4.jpg";
import Image5 from "../assets/images/revslider_1_img-5.jpg";
import Image6 from "../assets/images/revslider_1_img-6.jpg";
import Image7 from "../assets/images/revslider_1_img-7.jpg";
import Card1 from "../assets/images/revslider_card-1.png";
import Card2 from "../assets/images/revslider_card-2.png";
import Card3 from "../assets/images/revslider_card-3.png";
import Card4 from "../assets/images/revslider_card-4.png";
import Card5 from "../assets/images/revslider_card-5.png";
import Card6 from "../assets/images/revslider_card-6.png";
import Card7 from "../assets/images/revslider_card-7.png";
import Phone from "../assets/images/bgPhone.png";
import Phone1 from "../assets/images/bgPhone.png";
import head1 from "../assets/images/head1.png";
import head2 from "../assets/images/head2.png";
import head3 from "../assets/images/head3.png";
import head4 from "../assets/images/head4.svg";
import { FaArrowRight } from "react-icons/fa6";

export default function Bannertwo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={style.bannerSection}>
      <Slider {...settings}>
        <div className={style.firstSlide}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-0 m-0">
                <h4>Empowering Financial Futures</h4>
                <div className={`${style.multipleItemsOfBanner} mt-5`}>
                  <div className={`${style.ImagesFlex}`}>
                    <div className={style.images}>
                      <Image src={head1} />
                      <Image src={head2} />
                      <Image src={head3} />
                    </div>
                    <h6>
                      <span>25.9 M+</span>
                      <p className="p-0 m-0">World Active User</p>
                    </h6>
                  </div>
                  <div className={`${style.RatingBox}`}>
                    <Image src={head4} />
                    <div>
                      <span>2024 the world's</span>
                      <p className="m-0">best digital banks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={style.RightBoxOfFirstSlide}>
                  <p className="m-0">
                    Welcome to Fintechify, your gateway to cutting-edge
                    financial solutions in the heart of the UAE. We
                    revolutionize the way you bank, offering a seamless blend of
                    technology and financial solutions to meet the unique needs
                    of our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.BottomBoxOne}>
            <div className={`${style.one}`}>
              <Image src={Card1} />
              <Image src={Card2} />
            </div>
            <div className={`${style.one} ${style.scd}`}>
              <Image src={Card4} />
              <Image src={Card4} />
            </div>
            <div className={`${style.one}`}>
              <Image src={Card5} />
              <Image src={Card6} />
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </section>
  );
}
