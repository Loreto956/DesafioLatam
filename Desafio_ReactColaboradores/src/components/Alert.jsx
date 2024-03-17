import React from 'react'

const Alert = ({mensaje, type}) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {mensaje}
    </div>
  )
}

export default Alert
