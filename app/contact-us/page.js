import React from 'react'
import Header from '../components/Header/Header'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import styles from '../components/assets/css/contact.module.css'
import { MdOutlineAddIcCall } from "react-icons/md";
import ContactImg from '../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg'
import Image from 'next/image'
import Map from '../components/map/map'
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";



function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head={"اتصل بنا"}
                tagLine={false}
                Des={false}
            />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                                <MdOutlineAddIcCall />
                                <div>
                                    <span>هاتف</span>
                                    <a href="tel:+971-54-5061985">+971-54-5061985</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                                <GrLocation />
                                <div>
                                    <span>الموقع</span>
                                    <a href="#">الوحدة : IH0101-OF01، الطابق الأول،<br/> Innovation One، <br/>مركز دبي المالي العالمي (DIFC)، دبي، الإمارات العربية المتحدة.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contactBox}>
                            <MdOutlineEmail />
                                <div>
                                    <span>البريد الإلكتروني</span>
                                    <a href="mailto:talktous@fintechify.ae">talktous@fintechify.ae</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Map /> */}
            <section className={styles.contactFormSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.contactFormImg}>
                                <Image src={ContactImg} alt="Contact Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.contactFormBox}>
                                <h5>تواصل معنا</h5>
                                <p>لن يتم نشر عنوان بريدك الإلكتروني. الحقول المطلوبة محددة *</p>
                                <form>
                                    <div class="form-group">
                                        <label>الاسم *</label>
                                        <input type="text" class="form-control" required placeholder="أدخل اسمك" />
                                    </div>
                                    <div class="form-group">
                                        <label>عنوان البريد الإلكتروني *</label>
                                        <input type="email" class="form-control" required placeholder="بريدك الإلكتروني" />
                                    </div>
                                    <div class="form-group">
                                        <label>الموضوع *</label>
                                        <input type="text" class="form-control" required placeholder="موضوع الرسالة" />
                                    </div>
                                    <div class="form-group">
                                        <label>تعليقات / أسئلة *</label>
                                        <textarea class="form-control" rows="3" placeholder="اكتب تعليقك أو سؤالك هنا"></textarea>
                                    </div>
                                    <div class="form-group">
                                       <button>إرسال الرسالة</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <Footer />
        </>
    )
}

export default page
