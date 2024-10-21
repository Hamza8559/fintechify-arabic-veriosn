import Image from "next/image";
import styles from "./fianancial.module.css";
import Phone1 from "../assets/images/finPhone.png";
import { BsLightningCharge } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";
import Brand1 from "../assets/images/brand1.svg";
import Brand2 from "../assets/images/brand2.svg";
import Brand3 from "../assets/images/brand3.svg";
import Brand4 from "../assets/images/brand4.svg";
import Brand5 from "../assets/images/brand5.svg";

const FinancialComponent = () => {
  return (
    <>
      <section className={`container mt-5 ${styles.container}`}>
        <div className="row  align-items-center">
          {/* Right Column */}
          <div
            className={`col-lg-6 text-center ${styles.right}`}
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Image src={Phone1} alt="Phone1" className={styles.rightPhone} />
          </div>
          <div
            className="col-lg-6 p-4"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className={styles.financialText}>
              <span className={styles.about}>
                <RiBuilding3Fill />
                معلومات عن فينتكفاي
              </span>
              <h2>
                الهدف هو الابتكارات من البطاقة الائتمانية إلى النقد الإلكتروني
              </h2>
              <p>
                انسَ البلاستيك، واحتضن المستقبل. فينتكفاي تفتح لك آفاقًا جديدة
                في عالم البنوك بلمسة واحدة. تجارب مصممة بإتقان، وليست مجرد حلول.
                نحن بوابتك للسيطرة على عالم التمويل الرقمي. تعاون مع فينتكفاي.
                كن الرائد، لا التابع
              </p>
              <div className={`${styles.percentFlex} d-flex  mt-4`}>
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>٢٠x</h3>
                  </span>
                  <p>
                  تحويلات ومدفوعات فورية وسريعة للغاية
                  </p>
                </div>
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>١٠٠%</h3>
                  </span>
                  <p>
                  حماية بيانات فائقة الأمان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`mt-5 ${styles.section}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          <h4>Trusted by industry-leading companies around the globe</h4>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand2} alt="Brand 2" className={styles.brand} />
                <Image src={Brand3} alt="Brand 3" className={styles.brand} />
                <Image src={Brand4} alt="Brand 4" className={styles.brand} />
                <Image src={Brand5} alt="Brand 5" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand2} alt="Brand 2" className={styles.brand} />
                <Image src={Brand3} alt="Brand 3" className={styles.brand} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialComponent;
