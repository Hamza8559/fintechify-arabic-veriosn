import Image from "next/image";
import styles from "./fianancial.module.css";
import Phone1 from "../assets/images/finPhone.png";
import { BsLightningCharge } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";
import Brand1 from "../assets/images/FINTECHIFY_1-3.png";
import { RiSecurePaymentLine } from "react-icons/ri";


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
                حول شركة Fintechify
              </span>
              <h2>
                الابتكارات من البطاقات الائتمانية إلى النقود الإلكترونية هي
                الهدف.
              </h2>
              <p>
                انسَ البلاستيك، واحتضن المستقبل. تفتح Fintechify بابًا لعالم
                مصرفي متقدم بلمسة واحدة. تجارب مصممة بدقة، وليست مجرد حلول. نحن
                بوابتك للسيطرة على عالم التمويل الرقمي. شارك مع Fintechify. كن
                رائدًا، وليس تابعًا.{" "}
              </p>
              <div className={`${styles.percentFlex} d-flex  mt-4`}>
                <div className={`text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    
                    <h3>20x</h3>
                    <BsLightningCharge className={styles.eletric} />
                  </span>
                  <p className="">تحويلات ومدفوعات فورية وسريعة للغاية.</p>
                </div>
                <div className={`text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    
                    <h3>100%</h3>
                    <RiSecurePaymentLine className={styles.eletric} />
                  </span>
                  <p className="">حماية بيانات فائقة الأمان.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`mt-5 ${styles.section}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          {/* <h4 className="text-center">Trusted by industry-leading companies around the globe</h4> */}
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialComponent;
