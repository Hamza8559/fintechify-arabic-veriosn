import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Testimonials from '../components/Testimonials/Testimonials'
import styles from '../components/assets/css/services.module.css'
import { FcAddRow } from "react-icons/fc";
import { FcDoughnutChart } from "react-icons/fc";
import img1 from '../components/assets/images/services-img.jpg'
import img2 from '../components/assets/images/shape-1@2x.png'
import { FaCropSimple } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { GiFlatPlatform } from "react-icons/gi";
import { AiFillMerge } from "react-icons/ai";
import { SiCivicrm } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";





function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head="الخدمات"
                tagLine={false}
                Des={false}
            />
            <section className={styles.everyoneSection}>
                <div className="container">
                    <div className="row">
                        <h4 className='text-center'>تعال وشاهد ماذا يقول الجميع</h4>
                        <p className='text-center'>اكتشف الضجة! تعال وشاهد ماذا يقول الجميع عن خدماتنا.</p>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-4">
                            <div className={`${styles.everyoneInnerBox} text-center`}>
                                <FcAddRow />
                                <h5 className='text-center'>خدمة استثنائية!</h5>
                                <span className='text-center'>فريق Fintechify يتجاوز التوقعات. خبرتهم في حلول البنوك حولت عملياتنا المالية. موصى به بشدة!</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${styles.everyoneInnerBox} text-center`}>
                                <FcDoughnutChart />
                                <h5 className='text-center'>مغير لقواعد اللعبة!</h5>
                                <span className='text-center'>Fintechify فاقت توقعاتنا. التزامهم بتقليل ديون تكنولوجيا المعلومات وضمان الامتثال يعكس تفانيهم في التميز. شريك موثوق في رحلتنا المالية.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <Image src={img1} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <h4 className='mt-4'>حلول Fintech المبتكرة <br /> للتمويل الحديث</h4>
                                <p>اكتشف التمويل الحديث من خلال حلولنا المبتكرة في Fintech. من المدفوعات السلسة إلى الرؤى المدعومة بالذكاء الاصطناعي، نقدم مجموعة من الخدمات المصممة لتبسيط وتعزيز تجربتك المالية. استكشف مستقبل التمويل معنا.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.servicessection}>
                <div className="container">
                    <div className="row">
                        <h5 className='text-center'>خدماتنا</h5>
                        <p className='text-center'>اكتشف الضجة! تعال وشاهد ماذا يقول الجميع عن خدماتنا.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <CiBank />
                                <h4 className='text-center'>تطوير تطبيقات البنوك</h4>
                                <span className='text-center'>في Fintechify، نحن متخصصون في إنشاء تطبيقات بنكية متطورة مصممة خصيصًا لمتطلبات المؤسسات المالية.</span>
                                <div className={styles.numberBox}>
                                    <h6>01</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <FaWallet />
                                <h4 className='text-center'>تطوير المحافظ الرقمية</h4>
                                <span className='text-center'>مرحبًا بكم في خدمات تطوير المحافظ الرقمية لدينا! في العالم الرقمي السريع اليوم، الراحة هي الأولوية.</span>
                                <div className={styles.numberBox}>
                                    <h6>02</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <SiJirasoftware />
                                <h4 className='text-center'>تطوير برامج التأمين</h4>
                                <span className='text-center'>في Fintechify، نفهم تعقيدات صناعة التأمين والحاجة الماسة إلى حلول برمجية فعالة وآمنة وقابلة للتوسع.</span>
                                <div className={styles.numberBox}>
                                    <h6>03</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <FaCropSimple />
                                <h4 className='text-center'>خدمات FinOps</h4>
                                <span className='text-center'>مرحبًا بكم في Fintechify، حيث نقدم خدمات FinOps شاملة مصممة لتبسيط العمليات المالية وتحسين الصحة المالية لأعمالك.</span>
                                <div className={styles.numberBox}>
                                    <h6>04</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <GiFlatPlatform />
                                <h4 className='text-center'>تطوير منصة التمويل الجماعي</h4>
                                <span className='text-center'>مرحبًا بكم في Fintechify، حيث يلتقي الابتكار بالكفاءة في تطوير منصات التمويل الجماعي.</span>
                                <div className={styles.numberBox}>
                                    <h6>05</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <AiFillMerge />
                                <h4 className='text-center'>منصة التمويل اللامركزي (DeFi)</h4>
                                <span className='text-center'>في Fintechify، نفخر بتقديم منصة التمويل اللامركزي (DeFi) المتطورة، التي تحدث ثورة في العالم المالي.</span>
                                <div className={styles.numberBox}>
                                    <h6>06</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <SiCivicrm />
                                <h4 className='text-center'>تطوير برمجيات CRM في FinTech</h4>
                                <span className='text-center'>عزز عملك في الخدمات المالية بحلول CRM مخصصة مصممة لتلبية احتياجاتك الفريدة.</span>
                                <div className={styles.numberBox}>
                                    <h6>07</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <MdPayments />
                                <h4 className='text-center'>تطوير تطبيقات الدفع</h4>
                                <span className='text-center'>في Fintechify، نفهم أن كل عمل فريد، وكذلك احتياجاته في الدفع. لهذا نقدم حلول تطوير تطبيقات دفع مخصصة.</span>
                                <div className={styles.numberBox}>
                                    <h6>08</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <FaExchangeAlt />
                                <h4 className='text-center'>تطوير منصات تبادل العملات</h4>
                                <span v>في Fintechify، نحن متخصصون في تطوير منصات تبادل العملات المتطورة القابلة للتوسع.</span>
                                <div className={styles.numberBox}>
                                    <h6>09</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className={`${styles.servicesBox} text-center`}>
                                <CiLock />
                                <h4 className='text-center'>الأمن السيبراني</h4>
                                <span className='text-center'>تنفيذ الأمن السيبراني ليس مجرد إجراء وقائي، بل هو ميزة استراتيجية تميز عملك في العالم الرقمي المتزايد.</span>
                                <div className={styles.numberBox}>
                                    <h6>10</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <h4>صياغة النجاح: تعاون مع خبراء في تصميم وتطوير المنتجات المبتكرة</h4>
                                <p>تعاون مع خبرائنا المخضرمين في تصميم وتطوير المنتجات لتحقيق أهداف عملك بدقة. نحن نجلب الابتكار إلى المقدمة، مما يضمن أن كل جانب من جوانب مشروعك يتم صياغته بدقة. من التصور إلى التنفيذ، ثق بفريقنا لتحويل أفكارك إلى منتجات مؤثرة وعملية تدفع عملك نحو نجاح لا مثيل له.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox}>
                                <Image src={img2} className='img-fluid' />
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