import React from "react";
import Image from "next/image";
import styles from "./banking.module.css";
import img1 from "../assets/images/sheikh2.jpg";

function page() {
  return (
    <>
      <section className="mb-5" style={{marginTop: "100px"}}>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className={styles.InnovativeBox}>
                <h4 className="mt-4">
                  We Tell the Tale of <br />
                  Retail Banking!
                </h4>
                <p>
                  Discover the epitome of personalized banking services with
                  Fintechify! From savings accounts to loans and credit cards,
                  we’re revolutionizing retail banking by offering accessible
                  and tailored financial solutions. Experience banking that’s
                  perfectly attuned to your needs with Fintechify.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className={styles.InnovativeBox}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image src={img1} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
