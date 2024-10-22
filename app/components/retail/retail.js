import React from "react";
import Image from "next/image";
import styles from "./banking.module.css";
import img1 from "../assets/images/sheikh2.jpg";

function page() {
  return (
    <>
      <section className="mb-5" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image src={img1} className="img-fluid" />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4 className="mt-4">نحن نحكي قصة الخدمات <br/>المصرفية للأفراد!</h4>
                <p>
                  اكتشف قمة الخدمات المصرفية الشخصية مع Fintechify! من حسابات
                  التوفير إلى القروض وبطاقات الائتمان، نحن نحدث ثورة في الخدمات
                  المصرفية للأفراد من خلال تقديم حلول مالية مخصصة وسهلة الوصول.
                  اختبر تجربة مصرفية تتناسب تمامًا مع احتياجاتك مع Fintechify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
