import React from 'react'

const AccordionItem = ({index, title, content, isOpen, toggleItem}) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={() => toggleItem(index)}>
      <header >{title}</header>
      <div className="accordion-item_body">{content}</div>
    </div>
  )
}
export default AccordionItem