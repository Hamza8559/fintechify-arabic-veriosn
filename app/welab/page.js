import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./welab.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/weblab.png";
import RisMobile from "../components/assets/images/weblabPhone.png";
const page = () => {
  return (
    <>
      <Header />
      <div className={`container-fluid ${style.containerFluid}`}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-12 ${style.col12}`}>
              <h1><Image src={RisImage} /></h1>
              <p>
              Welab is a Software-as-a-Service (SaaS) platform that seamlessly connects patients with healthcare providers, enabling services to be performed in the comfort of their own homes. With Welab, licensed healthcare professionals are just a click away, providing on-demand healthcare services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`container  ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 ${style.collg6}`} data-aos="fade-right" data-aos-duration="500">
            <Image src={RisImage} />
            <h1 className="mt-3">
            WE ARE PROUD TO PRESENT WELAB, A GROUNDBREAKING SOLUTION THAT BRINGS HEALTHCARE SERVICES TO YOUR DOORSTEP WITH SPEED AND CONVENIENCE.
            </h1>
            <p>
            Welab is a Software-as-a-Service (SaaS) platform that seamlessly connects patients with healthcare providers, enabling services to be performed in the comfort of their own homes. With Welab, licensed healthcare professionals are just a click away, providing on-demand healthcare services.
            </p>

            <button className={style.btn}>Join Us</button>
          </div>
          <div className={`col-lg-6 ${style.collg62}`}>
            <Image src={RisMobile} className={style.RisMobile2} data-aos="fade-left" data-aos-duration="500"/>
          </div>
        </div>
      </div>
      <div className={`container  ${style.Essential}`} data-aos="fade-up" data-aos-duration="500">
        <div className={`row  ${style.row2}`}>
             <h1>
             Benefits for All Stakeholders
             </h1>
           
          <div className={`col-lg-6  ${style.boxleft}`}>
            <h5>Discovery Phase</h5>
            <div className={style.section}>
              <ul>
                <li>
                For licensed healthcare professionals, Welab offers greater flexibility and autonomy over their work schedules, allowing them to earn more by working independently.
                </li>
                <li>This model also simplifies the process for laboratories by eliminating the need for collection centers, allowing them to receive specimens directly from licensed professionals.</li>
              </ul>
            </div>
         

            
          </div>
          <div className={`col-lg-6  m-0 ${style.boxright}`}>
            <div className={style.tdSection}>
              <div className={style.section}>
                <h5>Investment:</h5>
                <ul>
                  <li>
                  Welab’s innovative healthcare delivery system extends far beyond blood specimen collection and delivery. By connecting patients with licensed healthcare professionals through a mobile platform, Welab can offer a wide range of in-home medical services such as IV hydration, ECGs, and vaccines. 
                  </li>
                  <li>Welab is revolutionizing the healthcare industry, making quality healthcare services accessible, efficient, and convenient. Embrace the future of healthcare with Welab.</li>
                </ul>
              </div>
             
           
            
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
