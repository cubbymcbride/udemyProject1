import React from 'react'

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
        <div className={`alert alert-${alert.type}`}>
         <i className="fas fa-info-cirlce" /> {alert.msg}
        </div>
    )
  )
}
