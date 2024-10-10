import React from 'react'
import style from './move.module.css'

const MovingText = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
      <div className="row">
        <div>
          <div className={style.left} title='Simplify your digital product management with FinTechify'>
            <span>Simplify your digital product management with FinTechify</span>
          </div>
          <div className={style.right} title="Maximize your digital product sales with FinTechify">
            <span>Maximize your digital product sales with FinTechify</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovingText