import React from 'react'

const Alert = ({message, type, color}) => {
    const alertClass = color ? `alert alert-${color}` : `alert alert-${type}`

    if (!message) return null;

  return (
    <div className={alertClass} role='alert'>
      {message}
    </div>
  )
}

export default Alert
