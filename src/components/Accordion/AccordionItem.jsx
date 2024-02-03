import React from 'react'

const AccordionItem = ({ title, content }) => {
  return (
    <div className={`accordion-item '}`}>
        <header>{title}</header>
        <div className="accordion-item_body">{content}</div>
    </div>
  )
}

export default AccordionItem