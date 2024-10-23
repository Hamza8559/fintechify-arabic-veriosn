import React from "react";
import Image from "next/image";
import styles from "./banking.module.css";
import img1 from "../assets/images/sheikh.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Page() {
  return (
    <>
      <section className="mb-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image src={img1} alt="Fintech Image" className="img-fluid" />
              </div>
              {/* <button className={`${styles.LuSend2} mt-3 d-lg-none d-block float-end`}>
                <Link href="/contact-us" passHref>
                  <span style={{ textDecoration: "none", color: "white" }}>
                  <FaArrowRight /> GET STARTED 
                  </span>
                </Link>
              </button> */}
            </div>
            <div
              className="col-lg-6 p-3"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4>بسط خدماتك المصرفية مع Fintechify</h4>
                <p>
                  التكنولوجيا المالية تغير الطريقة التي ندير بها أموالنا، مما
                  يجعلها أسرع وأسهل وأكثر إتاحة للجميع. على سبيل المثال، يمكنك
                  الآن:
                </p>
                <ul className="mx-4">
                  <li>استخدام هاتفك لدفع ثمن البقالة.</li>
                  <li>إيداع الشيكات عن بُعد.</li>
                  <li>الحصول على قرار قرض في غضون دقائق.</li>
                  <li>الاستثمار في الأسهم والسندات ببضع نقرات فقط.</li>
                </ul>
                <p>
                  انضم إلينا في رحلة التكنولوجيا المالية حيث نبتكر حلولًا مخصصة
                  معًا، وندمج الخبرات بسلاسة لتعزيز نموك. لنتحول معًا نحو النجاح
                  المشترك!
                </p>
                <button className={`${styles.LuSend2} mt-3 float-end`}>
                  <Link href="/contact-us">
                    <span style={{ textDecoration: "none", color: "white" }}>
                      <FaArrowRight /> البدء{" "}
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
