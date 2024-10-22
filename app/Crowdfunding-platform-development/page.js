import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css'
import img1 from '../components/assets/images/webp.net-resizeimage.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutFirstSectionImg from "../components/assets/images/crowdimg.jpg"
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head={"تطوير منصة التمويل الجماعي"}
                tagLine={false}
                tagLine2={"نحن نخلق منصتك للنجاح."}
                Des={false}
            />
            <section className='d-lg-block d-none mb-5 mt-5'>
                <div className="container-fluid px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500">
                            <div className={styles.InnovativeBox}>
                                <h4>تحويل الأفكار إلى واقع ممول مع <br /> تطوير منصة التمويل الجماعي</h4>
                                <p>قم بالتمويل الجماعي بثقة مع فينتكفاي. فريقنا الخبير يصنع منصات مخصصة وآمنة لإطلاق <br /> رؤيتك وتحقيق أهداف جمع التمويل الخاصة بك. دعونا نحول الأفكار إلى واقع معًا.</p>
                                <p>ادعم رؤيتك في الفنتك: هل يسعى عميلك إلى إحداث ثورة في جمع التمويل؟ فريقنا من الخبراء يبني <br /> منصات تمويل جماعي غنية بالميزات مصممة خصيصًا لتلبية احتياجاتهم.</p>
                                <p>الوصول إلى الجمهور المثالي: نحن نصمم واجهات سهلة الاستخدام تجذب المبدعين والممولين معًا،<br /> مما يعزز النظام البيئي للتمويل الجماعي.</p>
                                <p>
                                    حلول تمويل سلسة: دمج بوابات دفع آمنة <br /> وأدوات إدارة الأموال الشفافة لضمان تجربة سلسة وموثوقة.
                                </p>
                                <p>مصممة للنجاح: منصاتنا قابلة للتوسع والتكيف، مما يمكّن منصة عميلك من النمو <br /> جنبًا إلى جنب مع طموحاتهم.</p>
                                <p>أكثر من مجرد تطوير: نحن نقدم الدعم والصيانة المستمرة لضمان أن تظل منصة عميلك <br /> آمنة وفعالة وعلى طليعة مشهد التمويل الجماعي.</p>
                            </div>
                            <button className={styles.LuSend2}>
                                <Link href="/contact-us" passHref>
                                    <span style={{ textDecoration: "none", color: "white" }}>
                                        انضم الآن <FaArrowRight />
                                    </span>
                                </Link>
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                                <Image className="img-fluid" src={aboutFirstSectionImg} />                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-lg-none d-block mb-5 mt-5'>
                <div className="container px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                                <Image className="img-fluid" src={aboutFirstSectionImg} />                        </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500">
                            <div className={styles.InnovativeBox}>
                                <h4>تحويل الأفكار إلى واقع ممول مع <br /> تطوير منصة التمويل الجماعي</h4>
                                <p>قم بالتمويل الجماعي بثقة مع فينتكفاي. فريقنا الخبير يصنع منصات مخصصة وآمنة لإطلاق <br /> رؤيتك وتحقيق أهداف جمع التمويل الخاصة بك. دعونا نحول الأفكار إلى واقع معًا.</p>
                                <p>ادعم رؤيتك في الفنتك: هل يسعى عميلك إلى إحداث ثورة في جمع التمويل؟ فريقنا من الخبراء يبني <br /> منصات تمويل جماعي غنية بالميزات مصممة خصيصًا لتلبية احتياجاتهم.</p>
                                <p>الوصول إلى الجمهور المثالي: نحن نصمم واجهات سهلة الاستخدام تجذب المبدعين والممولين معًا،<br /> مما يعزز النظام البيئي للتمويل الجماعي.</p>
                                <p>
                                    حلول تمويل سلسة: دمج بوابات دفع آمنة <br /> وأدوات إدارة الأموال الشفافة لضمان تجربة سلسة وموثوقة.
                                </p>
                                <p>مصممة للنجاح: منصاتنا قابلة للتوسع والتكيف، مما يمكّن منصة عميلك من النمو <br /> جنبًا إلى جنب مع طموحاتهم.</p>
                                <p>أكثر من مجرد تطوير: نحن نقدم الدعم والصيانة المستمرة لضمان أن تظل منصة عميلك <br /> آمنة وفعالة وعلى طليعة مشهد التمويل الجماعي.</p>
                            </div>
                            <button className={styles.LuSend2}>
                                <Link href="/contact-us" passHref>
                                    <span style={{ textDecoration: "none", color: "white" }}>
                                        انضم الآن <FaArrowRight />
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.processSection} data-aos="fade-up" data-aos-duration="500">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <h4 className='text-center'>عمليتنا</h4>
                        <div className={styles.flexBoxes}>
                            <div className='col-lg-5 p-lg-0'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.CrowdBlueUpperBox}`}>
                                    <ul>
                                        <h5>تطوير المنصة</h5>
                                        <p>بناء منصة تمويل جماعي مخصصة لتلبية احتياجاتك المحددة.</p>
                                    </ul>
                                    <ul>
                                        <h5>إدارة الحملة</h5>
                                        <p>الدعم في التخطيط، الإطلاق، وإدارة حملة التمويل الجماعي الخاصة بك.</p>
                                    </ul>
                                    <ul><h5>التسويق والترويج</h5>
                                        <p>تطوير استراتيجيات للوصول إلى جمهورك المستهدف وجذب المستثمرين.</p>
                                    </ul>
                                    <ul>
                                        <h5>معالجة الدفع</h5>
                                        <p>دمج بوابات دفع آمنة لتسهيل المعاملات بسلاسة.</p>
                                    </ul>
                                    <ul>
                                        <h5>الامتثال التنظيمي</h5>
                                        <p>ضمان أن تتوافق منصتك مع جميع اللوائح ذات الصلة بالتمويل الجماعي.</p>
                                    </ul>
                                    <ul>
                                        <h5>ريادة الأعمال</h5>
                                        <p>جمع رأس المال للشركات الناشئة وإطلاق المنتجات والمشاريع الابتكارية.</p>
                                    </ul>
                                    <ul>
                                        <h5>الصناعات الإبداعية</h5>
                                        <p>تمويل الأفلام والموسيقى والمشاريع الفنية وغيرها من المبادرات الإبداعية.</p>
                                    </ul>
                                    <ul>
                                        <h5>القضايا الاجتماعية</h5>
                                        <p>دعم المبادرات الخيرية وتطوير المجتمع.</p>
                                    </ul>
                                    <ul>
                                        <h5>العقارات</h5>
                                        <p>تمويل مشاريع تطوير العقارات والاستثمارات العقارية.</p>
                                    </ul>
                                    <ul>
                                        <h5>الطاقة المتجددة</h5>
                                        <p>جمع رأس المال لمشاريع الطاقة المتجددة والمبادرات المستدامة.</p>
                                    </ul>
                                    <ul>
                                        <h5>الأعمال المحلية</h5>
                                        <p>تمكين الشركات المحلية من جمع الأموال للتوسع والتسويق.</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 p-lg-0' id={styles.marginBoxTop}>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.CrowdWhiteBottomBox}`}>
                                    <ul>
                                        <h5>حقق حلمك في التمويل الجماعي: فينتكفاي تقدم</h5>
                                        <h5>منصات مخصصة</h5>
                                        <p>نحن نبني حلول تمويل جماعي مخصصة تتوافق تمامًا مع رؤيتك – من المفهوم إلى الإطلاق.</p>
                                    </ul>
                                    <ul>
                                        <h5>تجربة مستخدم سلسة</h5>
                                        <p>واجهات جميلة وبديهية تحافظ على تفاعل الممولين وتدفق التبرعات.</p>
                                    </ul>
                                    <ul>
                                        <h5>ميزات قوية</h5>
                                        <p>زيادة جمع الأموال باستخدام أدوات مدمجة للتتبع، المدفوعات، والتواصل الاجتماعي والتحليلات المفيدة.</p>
                                    </ul>
                                    <ul>
                                        <h5>النمو بثقة</h5>
                                        <p>المنصات القابلة للتوسع تتعامل مع النمو بسلاسة، مع ضمان الأمان لجميع المعاملات.</p>
                                    </ul>
                                    <ul>
                                        <h5>فينتكفاي: حيث تحلق أحلام التمويل الجماعي.</h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className={styles.startedUpperBox}>
                            <Image src={QoutesImg} alt='اقتباسات' />
                            <h4>ابدأ اليوم</h4>
                            <p className='text-center'>أطلق العنان لإمكانيات فكرتك. اتصل بفينتكفاي اليوم! سنصنع منصتك التمويلية الجماعية المخصصة وسنمكنك من الوصول إلى أهدافك التمويلية. معًا، لنحدث فرقًا.</p>
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
