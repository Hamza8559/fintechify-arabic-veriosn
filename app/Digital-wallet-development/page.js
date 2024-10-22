import React from 'react'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import styles from '../components/assets/css/services.module.css' // Assuming RTL styles
import QoutesImg from '../components/assets/images/img-3-300x300.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import img1 from '../components/assets/images/LwFhMaSbaBL4xwnIjhjtOh4AJVI2FE1fuQivfjbk.jpg'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Header />
      <Banner
        showCase={false}
        head={"تطوير المحفظة الرقمية"}
        tagLine={false}
        tagLine2={"كن رائدًا في الثورة المالية."}
        Des={false}
      />
      <section className='d-lg-block d-none mb-5 mt-5'>
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500">
              <div className={styles.InnovativeBox}>
                <h4>لماذا تزدهر صناعة تطوير المحافظ الرقمية؟</h4>
                <p>يشهد العالم ثورة في المدفوعات عبر الهواتف المحمولة، وفي قلب كل ذلك تكمن المحافظ الرقمية. أصبح النقد عملة قديمة، واستُبدل براحة المحافظ الرقمية الأنيقة. لكن هذا لا يتعلق فقط باستبدال البلاستيك بالبكسلات. إليك لماذا يعتبر تطوير المحافظ الرقمية فرصة ذهبية:</p>
                <p>انفجار المستخدمين: من المتوقع أن ينمو سوق المحافظ الرقمية بأكثر من 50٪ في بضع سنوات! ستكون محفظتك الرقمية على موجة من العملاء الجدد.</p>
                <p>المدفوعات السلسة: وداعًا لأيام البحث عن البطاقات. تجعل المحافظ الرقمية عمليات الدفع سهلة، فقط بنقرة واحدة!</p>
                <p>
                  أمان "فورت نوكس": قلق بشأن الأمان؟ المحافظ الرقمية هي أبطال الأمان، باستخدام تقنيات متقدمة لحماية أموالك.
                </p>
                <p>ما بعد النقد: الأمر لم يعد يتعلق بالمدفوعات فقط. تخيل تخزين بطاقات الولاء، التذاكر، وحتى إدارة الاستثمارات - كل ذلك في تطبيق آمن واحد. مستقبل التمويل هنا!</p>
                <p>جاهز للانضمام إلى الثورة؟ طوّر التطبيق الرقمي التالي الذي سيغير قواعد اللعبة!</p>
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

      <section className='d-lg-none d-block mb-5 mt-5'>
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.InnovativeBox} data-aos="fade-up" data-aos-duration="500">
                <Image src={img1} className='img-fluid' />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500">
              <div className={styles.InnovativeBox}>
                <h4>لماذا تزدهر صناعة تطوير المحافظ الرقمية؟</h4>
                <p>يشهد العالم ثورة في المدفوعات عبر الهواتف المحمولة، وفي قلب كل ذلك تكمن المحافظ الرقمية. أصبح النقد عملة قديمة، واستُبدل براحة المحافظ الرقمية الأنيقة. لكن هذا لا يتعلق فقط باستبدال البلاستيك بالبكسلات. إليك لماذا يعتبر تطوير المحافظ الرقمية فرصة ذهبية:</p>
                <p>انفجار المستخدمين: من المتوقع أن ينمو سوق المحافظ الرقمية بأكثر من 50٪ في بضع سنوات! ستكون محفظتك الرقمية على موجة من العملاء الجدد.</p>
                <p>المدفوعات السلسة: وداعًا لأيام البحث عن البطاقات. تجعل المحافظ الرقمية عمليات الدفع سهلة، فقط بنقرة واحدة!</p>
                <p>
                  أمان "فورت نوكس": قلق بشأن الأمان؟ المحافظ الرقمية هي أبطال الأمان، باستخدام تقنيات متقدمة لحماية أموالك.
                </p>
                <p>ما بعد النقد: الأمر لم يعد يتعلق بالمدفوعات فقط. تخيل تخزين بطاقات الولاء، التذاكر، وحتى إدارة الاستثمارات - كل ذلك في تطبيق آمن واحد. مستقبل التمويل هنا!</p>
                <p>جاهز للانضمام إلى الثورة؟ طوّر التطبيق الرقمي التالي الذي سيغير قواعد اللعبة!</p>
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
            <h4 className='text-center'>كود، حرفة، أموال! أطلق العنان لإمكانيات محفظتك الرقمية</h4>
            <span className='m-0 text-center'>هذه هي قوة تطوير المحافظ الرقمية لدينا.</span>
            <span className='text-center'>إليك كيف نحول رؤيتك إلى حقيقة:</span>

            <div className={styles.flexBoxes}>
              <div className='col-lg-5 p-lg-0'>
                <div className={`${styles.processBox}  ${styles.blueBg} ${styles.DigiBlueUpperBox}`}>
                  <ul>
                    <h5>1. فك الشيفرة: اكتشاف عميق</h5>
                    <p>نحن لا نكتب الأكواد فقط؛ نحن نكتب مستقبل التمويل. نتعاون معك لفهم أهداف عملك، والجمهور المستهدف، والتقنية التي تجعل كل شيء يعمل.</p>
                    <p>فكر فينا كـ"محققين ماليين"، نكتشف الصيغة المثالية لنجاح محفظتك الرقمية.</p>
                  </ul>
                  <ul>
                    <h5>2. صناعة السحر: التصميم والنماذج الأولية</h5>
                    <p>حرفيو التصميم لدينا يصنعون واجهة ليست فقط بديهية، بل ساحرة. نصنع نماذج تجريبية تجعل تدفق التطبيق ووظائفه تنبض بالحياة.</p>
                  </ul>
                </div>
              </div>
              <div className='col-lg-5 p-lg-0' id={styles.marginBoxTop}>
                <div className={`${styles.processBox}  ${styles.blueBg} ${styles.DigiWhiteBottomBox}`}>
                  <ul>
                    <h5>3. جني الأرباح: التطوير</h5>
                    <p>مطورونا هم "نينجا" البرمجة، يستخدمون أحدث التقنيات لبناء محفظة رقمية قابلة للتطوير وآمنة وسريعة. نستخدم أفضل الممارسات لضمان أن تطبيقك مبني ليبقى.</p>
                  </ul>
                  <ul>
                    <h5>4. الاختبار والتسليم:</h5>
                    <p>قبل الإطلاق، نضع تطبيقك في اختبارات صارمة. نحدد ونقضي على أي عيوب أو أخطاء، لضمان تجربة سلسة عبر جميع الأجهزة. اعتبرها اللمسة النهائية قبل أن تكشف عن تحفتك الفنية للعالم.</p>
                  </ul> 
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className={styles.getStartedSection} data-aos="fade-up" data-aos-duration="500">
        <div className="container px-lg-5">
          <div className="row">
            <div className={styles.startedUpperBox}>
              <Image src={QoutesImg} alt='اقتباسات' />
              <h1 className={styles.heading}>جاهز لكتابة الكود، الحرفة، وجني الأموال؟</h1>
              <h3>دعنا نبني مستقبل التمويل، معاً!</h3>
              <p className='text-center'>تطوير المحفظة الرقمية ليس مجرد بناء تطبيق، إنه بناء مستقبل التمويل. هل أنت جاهز لتكون جزءًا منه؟</p>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.startedBox} ${styles.startedLeft}`}>
                <ul>
                  <li className='text-center'><IoCheckmarkSharp /><span>لا تبني تطبيقًا فقط، بل ابتكر ثورة. المحافظ الرقمية تغير اللعبة، ويمكنك أن تكون في المقدمة.</span></li>
                  <li className='text-center'><IoCheckmarkSharp /><span>الأمان أشد من حلتك الجديدة. الراحة أسهل من معاملة العملات الرقمية.</span></li>
                  <li className='text-center'><IoCheckmarkSharp /><span>هذه ليست مجرد مدفوعات عبر الهاتف المحمول، إنها السكين السويسري المالي للمستقبل.</span></li>
                  <li className='text-center'><IoCheckmarkSharp /><span>جاهز للتخلص من انتفاخ المحفظة وبناء شيء رائع؟ دعنا نصنع السحر المالي.</span></li>
                </ul>
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
