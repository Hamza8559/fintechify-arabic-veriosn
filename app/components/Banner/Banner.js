import React from 'react'
import styles from './Banner.module.css'
import { BsBuildings } from "react-icons/bs";


export default function Banner({ showCase, head, tagLine, tagLine2, Des }) {
    return (
        <>
            <section className={`${styles.BannerBg}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${styles.bannerBox}`}>
                                {showCase !== false ?
                                    <div className={`${styles.bannerTag}`}>
                                        <BsBuildings />
                                        <h5>{showCase}</h5>
                                    </div> : false}

                                {head !== false ?
                                    <h2 className='text-center'>{head}</h2> : false}

                                {tagLine !== false ?
                                    <span className={`${styles.aboutTagLine} text-center`}>{tagLine}</span> : false}

                                {tagLine2 !== false ?
                                    <span className={`${styles.tagLine2} text-center`}>{tagLine2}</span> : false}

                                {Des !== false ?
                                    <p className='text-center'>{Des}</p> : false}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
