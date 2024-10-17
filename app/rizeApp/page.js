import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "./rise.module.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import RisImage from "../components/assets/images/riseApp.png";
import RisMobile from "../components/assets/images/riseMobile.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/pexels-christina-morillo-1181244-1024x684.jpg"

const page = () => {
  return (
    <>
      <Header />

      <div className={`container-fluid ${style.containerFluid}`}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-md-12 ${style.col12}`}>
              <h1><Image src={RisImage} /></h1>
              {/* <p>
                FinPoan is a leading digital product management platform that
                empowers businesses to streamline their digital product
                management processes. With its advanced features and expertise,
                we help you achieve better productivity, increase customer
                satisfaction, and drive growth.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`container  d-lg-block d-none ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            <Image src={RisImage} />
            <h1>
              TRANSFORMING BANKING WITH AL RAJHI BANKING & INVESTMENT
              CORPORATION (MALAYSIA)
            </h1>
            <p>
              Experience a new era in banking with Rize. Open a savings account
              anytime, anywhere, apply for personal financing with funds
              deposited in your account within 15 minutes. Rize provides 24/7
              access to your financial information and a comprehensive suite of
              banking services. Whether you want to check your balance, transfer
              funds, pay bills, or deposit checks, it’s all convenient and
              secure from the comfort of your home or on the go using Rize. Rize
              is revolutionizing the banking experience, combining anytime,
              anywhere access, robust security measures, personalized financial
              insights, and a wide range of banking services. Embrace the power
              of digital banking with Rize and unlock a world of possibilities
              for effortless and efficient financial management.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
          <div className={`col-lg-6 flex_right ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={RisMobile} className={style.RisMobile} />
          </div>
        </div>
      </div>

      <div className={`container  d-lg-none d-block ${style.container2}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-6 flex_right ${style.collg62}`} data-aos="fade-left" data-aos-duration="2000">
            <Image src={RisMobile} className={style.RisMobile} />
          </div>
          <div className={`col-lg-6 flex_left ${style.collg6}`} data-aos="fade-right" data-aos-duration="2000">
            <Image src={RisImage} />
            <h1>
              TRANSFORMING BANKING WITH AL RAJHI BANKING & INVESTMENT
              CORPORATION (MALAYSIA)
            </h1>
            <p>
              Experience a new era in banking with Rize. Open a savings account
              anytime, anywhere, apply for personal financing with funds
              deposited in your account within 15 minutes. Rize provides 24/7
              access to your financial information and a comprehensive suite of
              banking services. Whether you want to check your balance, transfer
              funds, pay bills, or deposit checks, it’s all convenient and
              secure from the comfort of your home or on the go using Rize. Rize
              is revolutionizing the banking experience, combining anytime,
              anywhere access, robust security measures, personalized financial
              insights, and a wide range of banking services. Embrace the power
              of digital banking with Rize and unlock a world of possibilities
              for effortless and efficient financial management.
            </p>
            <button className={`${style.btn} mt-3`}>Join Now</button>
          </div>
        </div>
      </div>

      <section className={style.aboutFirst}>
        <div className="container-fluid px-5">
          <div className="row text-center mb-5">
            <h2 style={{fontWeight:"700"}}>Current Features</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 p-0">
              <div data-aos="fade-up" data-aos-duration="500" >
                <Image className="img-fluid" src={aboutFirstSectionImg} />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className={style.aboutFirstsection} data-aos="fade-right" data-aos-offset="300">
                {/* <h2>
                  Why You Should Move <br />for Banking App <br />Development
                </h2> */}
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>ACCOUNT MANAGEMENT:</h3>
                    <span>Users can access and manage their bank accounts, check balances, view transaction history, and perform various banking activities directly from their mobile devices.</span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>PAYMENTS AND TRANSFERS:</h3>
                    <span>The app allows users to make local and international transfers, pay bills, and conduct other financial transactions seamlessly.</span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>BUDGETING AND EXPENSE TRACKING:</h3>
                    <span>It offers tools to help users track their expenses, set budgets, and manage their finances more effectively.</span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>CUSTOMER SUPPORT:</h3>
                    <span>This app incorporates customer support features to provide assistance and resolve queries directly through the app.</span>
                  </div>
                </div>
                <div className={style.iconFlexBox}>
                  <IoMdCheckmarkCircleOutline />
                  <div>
                    <h3>
                    SECURITY FEATURES:</h3>
                    <span>Security is a top priority for banking apps. Rize likely implements robust security measures, such as encryption and authentication methods, to ensure the safety of users' financial information.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`container-fluid ${style.Essential}`} data-aos="fade-up" data-aos-duration="500">
        <div className={`row ${style.row2}`}>
          <h1>
            Essential Banking Services
          </h1>
          <div className={style.flexBoxes}>
            <div className={`col-lg-5 ${style.boxleft}`}>
              <h2>READY CASHLINE (RCL)</h2>
              <div className={style.section}>
                <h5>Credit Line:</h5>
                <ul>
                  <li>
                    The bank assigns a maximum credit limit to its customers which
                    they can use for various financial needs.
                  </li>
                  <li>Monitoring of utilized limits.</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>Encouraging Financial Behavior:</h5>
                <ul>
                  <li>Introducing Cashback incentive</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>Flexibility and Adaptability:</h5>
                <ul>
                  <li>
                    Interest is only charged on the outstanding balance, and it’s
                    typically based on the amount of credit utilized.
                  </li>
                  <li>
                    The customer can make regular payments to repay the borrowed
                    amount.
                  </li>
                  <li>
                    As the customer repays the borrowed amount, the credit limit
                    becomes available again.
                  </li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>Technology Integration:</h5>
                <ul>
                  <li>RCL origination facilitated via Digibank app.</li>
                  <li>
                    Access to generated RCL reports via portal for compliance and
                    management.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-5  ${style.boxright} ${style.marginTop}`}>
              <div className={style.tdSection}>
                <h2>TERM DEPOSIT (TD)</h2>
                <div className={style.section}>
                  <h5>Investment:</h5>
                  <ul>
                    <li>
                      Term Deposit is a lump sum savings account with a fixed
                      deposit period.
                    </li>
                    <li>Seamless digital investment.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>Encouraging Digital Investment:</h5>
                  <ul>
                    <li>Introducing Digital Term Deposit placements via App.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>Flexibility and Adaptability:</h5>
                  <ul>
                    <li>
                      Predetermined interest rate which remains constant
                      throughout the deposit period.
                    </li>
                    <li>Aims to improve digital banking experience.</li>
                    <li>
                      Prioritize capital preservation and a predictable income
                      stream.
                    </li>
                    <li>Earn interest at the end of the deposit term.</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>Technology Integration:</h5>
                  <ul>
                    <li>
                      TD origination is facilitated through the Digibank app.
                    </li>
                    <li>
                      Access to generated TD reports via the portal for portfolio
                      management and compliance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid mt-5 ${style.Essential}`}>
        <div className={`row ${style.row2}`}>
          <h1>
            Digital Lending
          </h1>
          <div className={style.flexBoxes}>
            <div className={`col-lg-5 ${style.boxleft}`}>
              <h2>Personal Financing (PF)</h2>
              <div className={style.section}>
                <h5>Personal Credit:</h5>
                <ul>
                  <li>
                    Amount approves depending on to customer’s financial profile and may have a fixed limit.
                  </li>
                  <li>Get funds to achieve your personal financial needs.</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>Encouraging Digital Lending:</h5>
                <ul>
                  <li>Introducing fixed term financing</li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>Flexibility and Adaptability:</h5>
                <ul>
                  <li>
                    Financing that comes with an interest rate that is fixed.
                  </li>
                  <li>
                    Customer repay the loan in installments over a fixed period, with options for short or long-term loans.
                  </li>
                  <li>
                    With minimal documentation, approval for the loan can be obtained.
                  </li>
                </ul>
              </div>
              <div className={style.section}>
                <h5>Technology Integration:</h5>
                <ul>
                  <li>PF origination facilitated via Digibank app.</li>
                  <li>
                    Access to generated PF reports via portal for compliance and
                    management.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-lg-5 ${style.boxright} ${style.marginTop}`}>
              <div className={style.tdSection}>
                <h2>Corporate Financing (CF)</h2>
                <div className={style.section}>
                  <h5>SME Financing:
                  </h5>
                  <ul>
                    <li>
                      Specialized financing and credit options for your large-scale projects for business expansion
                    </li>
                    <li>Get funds to achieve your Business goals</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>Encouraging Digital Financing:</h5>
                  <ul>
                    <li>Introducing Digital SME Financing</li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>Flexibility and Adaptability:</h5>
                  <ul>
                    <li>
                      Financing that comes with fixed repayment terms.
                    </li>
                    <li>Customers repay the loan in installments over a fixed period, for long-term loans.</li>
                    <li>
                      Offer digital platforms for SMEs to manage their finances, make transactions, and access funding more efficiently.
                    </li>
                  </ul>
                </div>
                <div className={style.section}>
                  <h5>Technology Integration:</h5>
                  <ul>
                    <li>
                      CF origination is facilitated through Digibank app.
                    </li>
                    <li>
                      Access to generate CF reports via the portal for portfolio management and compliance.
                    </li>
                  </ul>
                </div>
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
