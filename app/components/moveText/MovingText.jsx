import React from 'react'
import style from './move.module.css'

const MovingText = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
        <div className={style.left} title='Simplify your digital product management with FinTechify'>
          <span>بسط إدارة منتجاتك الرقمية مع FinTechify</span>
        </div>
        <div className={style.right} title="Maximize your digital product sales with FinTechify">
          <span>ضاعف مبيعات منتجاتك الرقمية مع FinTechify</span>
        </div>
    </div>
  )
}

export default MovingText