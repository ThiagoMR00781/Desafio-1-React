import React from 'react'

const AccordionItem = ({ title, content, open, isAcitive}) => {
  return (
    <div className={`accordion-item ${open ? 'open' : ''}`} onClick={open}>
        <header>{title}</header>
        {isAcitive && <div className="accordion-item_body">{content}</div>}
    </div>
  )
}

export default AccordionItem