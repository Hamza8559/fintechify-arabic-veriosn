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
import aboutFirstSectionImg from "../components/assets/images/3d-internet-secuirty-badge.jpg"
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


function page() {
    return (
        <>
            <Header />
            <Banner
                showCase={false}
                head={"تطوير تطبيقات البنوك"}
                tagLine={false}
                tagLine2={"البنك الذي يناسب جيبك"}
                Des={false}
            />
            <section className='mb-5 mt-5 d-lg-block d-none'>
                <div className="container-fluid px-lg-5" style={{ direction: 'rtl' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
                            <div className={styles.InnovativeBox}>
                                <h4>مع تطبيق البنك <br /> أخيرًا أموالك تحت التحكم التلقائي.</h4>
                                <h5>هل سئمت من الاتجاهات المصرفية التقليدية؟</h5>
                                <p>تخيل عالمًا حيث:</p>
                                <p>لم تعد بحاجة إلى الإسراع إلى البنك قبل الإغلاق.
                                    التحقق من رصيدك، تحويل الأموال، أو دفع الفواتير بات أمرًا سهلًا.</p>
                                <p>لديك مساعد ذكي في جيبك، يساعدك في إدارة أموالك بكل سهولة.</p>
                                <p>
                                    هذا الآن ممكن في العالم الحقيقي مع تطوير تطبيقات البنوك.
                                    فينتشيفايفي تصمم تطبيقات بنكية حديثة وآمنة تتفوق على المنافسة.
                                    فريقنا من المصممين والمطورين والاستراتيجيين يقوم ببناء ميزات تعزز المستخدمين وتعزز النمو.
                                </p>
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
                                <Image src={img1} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-5 mt-5 d-lg-none d-block'>
                <div className="container-fluid px-lg-5" style={{ direction: 'rtl' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                                <Image src={img1} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500" >
                            <div className={styles.InnovativeBox}>
                                <h4>مع تطبيق البنك أخيرًا أموالك تحت التحكم التلقائي.</h4>
                                <h5>هل سئمت من الاتجاهات المصرفية التقليدية؟</h5>
                                <p>تخيل عالمًا حيث:</p>
                                <p>لم تعد بحاجة إلى الإسراع إلى البنك قبل الإغلاق.
                                    التحقق من رصيدك، تحويل الأموال، أو دفع الفواتير بات أمرًا سهلًا.</p>
                                <p>لديك مساعد ذكي في جيبك، يساعدك في إدارة أموالك بكل سهولة.</p>
                                <p>
                                    هذا الآن ممكن في العالم الحقيقي مع تطوير تطبيقات البنوك.
                                    فينتشيفايفي تصمم تطبيقات بنكية حديثة وآمنة تتفوق على المنافسة.
                                    فريقنا من المصممين والمطورين والاستراتيجيين يقوم ببناء ميزات تعزز المستخدمين وتعزز النمو.
                                </p>
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

            <section className={styles.aboutFirst} style={{ direction: 'rtl' }}>
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div data-aos="fade-up" data-aos-duration="500" >
                                <Image className="img-fluid" src={aboutFirstSectionImg} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.aboutFirstsection} data-aos="fade-right" data-aos-offset="300">
                                <h2 className=''>
                                    لماذا يجب أن تنتقل إلى <br /> تطوير تطبيقات البنوك
                                </h2>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>تخفيض التكاليف:</h3>
                                        <span>خفض النفقات التشغيلية من خلال تشجيع <br /> استخدام البنوك عبر الهاتف بدلاً من الفروع الفعلية.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>تحسين رضا العملاء:</h3>
                                        <span>تقديم خدمات مريحة وفعالة مما يؤدي إلى زيادة الاحتفاظ بالعملاء.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>رؤى مستندة إلى البيانات:</h3>
                                        <span>الحصول على بيانات قيمة حول العملاء<br /> وعادات الإنفاق لاتخاذ استراتيجيات تسويقية وتطوير منتجات مستقبلي.</span>
                                    </div>
                                </div>
                                <div className={styles.iconFlexBox}>
                                    <IoMdCheckmarkCircleOutline />
                                    <div>
                                        <h3>ميزة تنافسية:</h3>
                                        <span>ابقَ في طليعة المنافسة<br />  من خلال تقديم  حلول بنكية مبتكرة عبر الهاتف المحمول.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className={styles.processSection} data-aos="fade-up" data-aos-duration="500" style={{ direction: 'rtl' }}>
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <h4>عمليتنا للاختبار</h4>
                        <span>قبل الإطلاق، نحتاج إلى خارطة طريق.</span>
                        <div className={styles.flexBoxes}>
                            <div className='col-lg-5 p-lg-0'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevBlueUpperBox} `}>
                                    <ul>
                                        <h5>الغوص العميق</h5>
                                        <p>سنقوم بتحليل أهدافك وجمهورك المستهدف واحتياجاتك التقنية لفهم رؤيتك تمامًا.</p>
                                    </ul>
                                    <ul>
                                        <h5>التخطيط للمهمة</h5>
                                        <p>بناءً على نتائجنا، سنقوم بوضع خطة مشروع واضحة وموجزة توضح:</p>
                                        <li>ما الذي سنبنيه ونطاق المشروع</li>
                                        <li>جدول زمني للإطلاق</li>
                                        <li>ما ستحصل عليه في كل مرحلة من المراحل</li>
                                        <p>يضمن ذلك أننا جميعًا على نفس الصفحة وأن تطبيقك سيُطلق بسلاسة.</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 p-lg-0'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevWhiteUpperBox}`}>
                                    <ul>
                                        <h5>تصميم التطبيق الحلم، بكسل تلو الآخر.</h5>
                                        <p>يتعاون فريقنا لإنشاء</p>
                                    </ul>
                                    <ul>
                                        <h5>الإطارات السلكية</h5>
                                        <p>فكر بها كالمخططات لتخطيط تطبيقك.</p>
                                    </ul>
                                    <ul>
                                        <h5>النماذج الأولية</h5>
                                        <p>نماذج تفاعلية تتيح لك تجربة التطبيق قبل بنائه.</p>
                                    </ul>
                                    <ul>
                                        <h5>واجهة المستخدم (UI)</h5>
                                        <p>الشاشات الجميلة والبديهية التي ستتفاعل معها.</p>
                                    </ul>
                                    <ul>
                                        <h5>علامتك التجارية في المقدمة</h5>
                                        <p>سوف نتأكد من أن التطبيق يعكس هويتك الفريدة.</p>
                                    </ul>
                                    <ul>
                                        <h5>حلقة ملاحظات سريعة</h5>
                                        <p>نستخدم الأساليب الرشيقة لجمع مدخلاتك باستمرار وتحسين التصميم أثناء التقدم.</p>
                                    </ul>
                                    <ul>
                                        <h5>النتيجة؟ تطبيق ليس فقط وظيفيًا، بل ممتعًا للاستخدام.</h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.flexBoxes}>
                            <div className='col-lg-5 p-lg-0 mt-5'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevWhiteBottomBox}`}>
                                    <ul>
                                        <h5>وضع تطبيقك المصرفي في الاختبار النهائي.</h5>
                                        <p>نحن لا نترك أي شيء للصدفة. فريقنا يجري فحوصات شاملة:</p>
                                    </ul>
                                    <ul>
                                        <h5>اختبار الأداء</h5>
                                        <p>التأكد من أن التطبيق يعمل بسلاسة على جميع الأجهزة.</p>
                                    </ul>
                                    <ul>
                                        <h5>اختبار الأمان</h5>
                                        <p>بناء حصن حول بياناتك، للحفاظ عليها آمنة ومأمونة.</p>
                                    </ul>
                                    <ul>
                                        <h5>عبر الأجهزة والمنصات، سيكون تطبيقك بلا عيوب.</h5>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 p-lg-0 mt-5'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevBlueBottomBox}`}>
                                    <ul>
                                        <h5>يوم الإطلاق:</h5>
                                        <h5>حان وقت الاحتفال!</h5>
                                        <p>تم التحقق من كل شيء وتكراره. بعد الانتهاء من الاختبارات الصارمة، سنتولى:</p>
                                    </ul>
                                    <ul>
                                        <h5>تقديم التطبيق في المتجر</h5>
                                        <p>إيصال تطبيقك إلى الجمهور المستهدف.</p>
                                    </ul>
                                    <ul>
                                        <h5>إعداد البنية التحتية الخلفية</h5>
                                        <p>المحرك غير المرئي الذي يشغل تطبيقك.</p>
                                    </ul>
                                    <ul>
                                        <h5>تهيئة الخوادم</h5>
                                        <p>ضبط دقيق للحصول على أفضل أداء.</p>
                                    </ul>
                                    <ul>
                                        <h5>نضمن إطلاقًا مثاليًا، لتستطيع تطبيقك التميز وجذب المستخدمين الجدد.</h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}

            <section className={styles.processSection} data-aos="fade-up" data-aos-duration="500">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <h4 className='text-center'>عمليتنا في الاختبار</h4>
                        <span className='text-center'>قبل الإطلاق، نحتاج إلى خارطة طريق.</span>
                        <div className={styles.flexBoxes}>
                            <div className='col-lg-5'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevBlueUpperBox} p-5`}>
                                    <ul>
                                        <h5>الغوص العميق</h5>
                                        <p>سنحلل أهدافك، جمهورك المستهدف، واحتياجاتك التقنية لفهم رؤيتك تمامًا.</p>
                                    </ul>
                                    <ul>
                                        <h5>تخطيط المهمة</h5>
                                        <p>استنادًا إلى نتائجنا، سنضع خطة مشروع واضحة وموجزة توضح:</p>
                                        <li>ما سنبنيه - نطاق المشروع</li>
                                        <li>الجدول الزمني للإطلاق</li>
                                        <li>ما ستحصل عليه في كل مرحلة - التسليمات</li>
                                        <p>يضمن هذا أننا جميعًا على نفس الصفحة وأن تطبيقك سيهبط بسلاسة.</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 p-lg-0' id={styles.marginBoxTop}>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevWhiteUpperBox} p-5`}>
                                    <ul>
                                        <h5>تصميم تطبيق أحلامك، بكسل بعد بكسل.</h5>
                                        <p>فريق التصميم والبرمجة يتعاونان لخلق:</p>
                                    </ul>
                                    <ul>
                                        <h5>إطارات السلكية</h5>
                                        <p>فكر بها كالمخططات لتخطيط تطبيقك.</p>
                                    </ul>
                                    <ul>
                                        <h5>النماذج الأولية</h5>
                                        <p>نماذج تفاعلية تتيح لك تجربة التطبيق قبل بنائه.</p>
                                    </ul>
                                    <ul>
                                        <h5>واجهات المستخدم (UI)</h5>
                                        <p>الشاشات الجميلة والبديهية التي ستتفاعل معها.</p>
                                    </ul>
                                    <ul>
                                        <h5>علامتك التجارية في المقدمة</h5>
                                        <p>سنتأكد من أن التطبيق يعكس هويتك الفريدة.</p>
                                    </ul>
                                    <ul>
                                        <h5>حلقة التغذية الراجعة بسرعة البرق</h5>
                                        <p>نستخدم الأساليب المرنة لجمع ملاحظاتك باستمرار وتحسين التصميم مع تقدمنا.</p>
                                    </ul>
                                    <ul>
                                        <h5>النتيجة؟ تطبيق ليس فقط وظيفيًا، بل ممتعًا للاستخدام.</h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.flexBoxes}>
                            <div className='col-lg-5'>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevWhiteBottomBox} p-5`}>
                                    <ul>
                                        <h5>وضع تطبيقك المصرفي في الاختبار النهائي.</h5>
                                        <p>نحن لا نترك شيئًا للصدفة. فريقنا يجري فحوصات شاملة:</p>
                                    </ul>
                                    <ul>
                                        <h5>اختبار الوظائف</h5>
                                        <p>نتأكد من أن كل ميزة تعمل كما هو مخطط لها.</p>
                                    </ul>
                                    <ul>
                                        <h5>اختبار الأداء</h5>
                                        <p>نتأكد من أن التطبيق يعمل بسلاسة على جميع الأجهزة.</p>
                                    </ul>
                                    <ul>
                                        <h5>اختبار الأمان</h5>
                                        <p>نبني قلعة حول بياناتك لحمايتها وتأمينها.</p>
                                    </ul>
                                    <ul>
                                        <h5>عبر الأجهزة، عبر المنصات، سيكون تطبيقك بلا عيوب.</h5>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5' id={styles.marginBoxTop}>
                                <div className={`${styles.processBox} ${styles.blueBg} ${styles.bankDevBlueBottomBox} p-5`}>
                                    <ul>
                                        <h5>يوم الإطلاق:</h5>
                                        <h5>حان وقت الاحتفال!</h5>
                                        <p>كل شيء تم التحقق منه بشكل دقيق. بعد الانتهاء من الاختبار الشامل، سنتعامل مع:</p>
                                    </ul>
                                    <ul>
                                        <h5>إرسال التطبيقات لمتاجر التطبيقات</h5>
                                        <p>جعل تطبيقك يصل إلى الجمهور المناسب.</p>
                                    </ul>
                                    <ul>
                                        <h5>إعداد الواجهة الخلفية</h5>
                                        <p>المحرك الخفي الذي يشغل تطبيقك.</p>
                                    </ul>
                                    <ul>
                                        <h5>تهيئة الخوادم</h5>
                                        <p>ضبط الأداء الأمثل.</p>
                                    </ul>
                                    <ul>
                                        <h5>**سنتأكد من إطلاق سلس، حتى يلمع تطبيقك ويجذب المستخدمين الجدد.</h5>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500" style={{ direction: 'rtl' }}>
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className={styles.startedUpperBox}>
                            <Image src={QoutesImg} alt='Qoutes' />
                            <h4>ابدأ اليوم</h4>
                            <p className='text-center'>هل سئمت من التطبيقات المصرفية المعقدة؟ نحن نبني الصواريخ.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                                <ul>
                                    <h5>يستحق عملاؤك تجربة مصرفية عبر الهاتف تتجاوز الحدود، لا واحدة عالقة في العصور المظلمة.
                                        نحن في فينتشيفايفي نصمم تطبيقات قوية وسهلة الاستخدام:</h5>
                                    <li className='text-end'><IoCheckmarkSharp /><span>تحمي المعلومات كحصن (ولكن بشبكة واي فاي أفضل).</span></li>
                                    <li className='text-end'><IoCheckmarkSharp /><span>تجعل إدارة الأموال أكثر سلاسة من زحلقة بدون احتكاك.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`${styles.startedBox}  ${styles.starteRight}`}>
                                <ul>
                                    <h5>نحن لسنا مجرد مطورين، نحن أبطال البنوك. فريقنا من السحرة التصميميين، النينجا البرمجيين، والعباقرة الاستراتيجيين ينضم لإنشاء:</h5>
                                    <li className='text-end'><IoCheckmarkSharp /><span>تطبيقات ممتعة للاستخدام، وليست مهمة مملة.</span></li>
                                    <li className='text-end'><IoCheckmarkSharp /><span>ميزات تجعل من إدارة الأموال أمرًا سهلًا وليس ساحة معركة.</span></li>
                                    <li className='text-end'><IoCheckmarkSharp /><span>حلول تحول العملاء إلى معجبين متحمسين، وليس مستخدمين محبطين.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={`${styles.startedBottomSection} text-center`}>
                                لا تقدم مجرد خدمات مصرفية، كن الثورة المصرفية. شارك مع فينتشيفايفي وشاهد تطبيقك المصرفي ينطلق إلى السماء! <br />
                                مستعد لإطلاق تطبيقك المصرفي إلى الفضاء؟ اتصل بنا اليوم!
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
