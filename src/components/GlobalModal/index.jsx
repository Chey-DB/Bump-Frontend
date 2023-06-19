import React from 'react'

import './GlobalModal.css'

const GlobalModal = props => {

  if (!props.show) {
    return null
  }

  return (
    <div className='modal' onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className='modal-title'>{props.title}</h3>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          {props.footer}
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default GlobalModal