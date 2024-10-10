import React from 'react'
import styles from './Banner.module.css'
import { BsBuildings } from "react-icons/bs";


export default function Banner({ showCase, head, tagLine, Des }) {
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
                                    <h2>{head}</h2> : false}
                                    
                                {tagLine !== false ?
                                    <span>{tagLine}</span> : false}

                                {Des !== false ?
                                    <p>{Des}</p> : false}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
