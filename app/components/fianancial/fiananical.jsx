import Image from "next/image";
import styles from "./fianancial.module.css";
import Phone1 from "../assets/images/finPhone.png";
import { BsLightningCharge } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";
import Brand1 from '../assets/images/brand1.svg'
import Brand2 from '../assets/images/brand2.svg'
import Brand3 from '../assets/images/brand3.svg'
import Brand4 from '../assets/images/brand4.svg'
import Brand5 from '../assets/images/brand5.svg'

const FinancialComponent = () => {
  return (
    <>
      <section className={`container mt-5 ${styles.container}`}>
        <div className="row  align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 p-4" data-aos="fade-right" data-aos-duration="500">
            <div className={styles.financialText}>
              <span className={styles.about}>
                <RiBuilding3Fill />
                About Fintechify
              </span>
              <h2>Start expanding your financial frontier</h2>
              <p>
                Impeccable beauty and functionality converge in both card and
                app. Marks the outset of a journey into a boundless world, free
                from constraints.
              </p>
              <div className="d-flex  mt-4">
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>20x</h3>
                  </span>
                  <p>Super fast instant <br />transfers and payments.</p>
                </div>
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>100%</h3>
                  </span>
                  <p>Ultra-secure data <br />protection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`col-lg-6 text-center ${styles.right}`} data-aos="fade-left" data-aos-duration="500">
                <Image src={Phone1} alt="Phone1" className={styles.rightPhone} />
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
                  <Image src={Brand2} alt="Brand 2" className={styles.brand}/>
                  <Image src={Brand3} alt="Brand 3" className={styles.brand} />
                  <Image src={Brand4} alt="Brand 4" className={styles.brand}/>
                  <Image src={Brand5} alt="Brand 5" className={styles.brand}/>
                  <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                  <Image src={Brand2} alt="Brand 2" className={styles.brand}/>
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
