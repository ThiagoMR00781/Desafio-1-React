import { useState } from 'react';
import './Accordion.css'
import AccordionItem from './AccordionItem'

const Accordion = ({ items }) => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (itemIndex) => {
    setOpenItem(openItem === itemIndex ? null : itemIndex);
  };
    return (
        <div className="accordion">
            <div>
             {items.map((item, index) => (
                    <AccordionItem 
                     key={item}
                     index={index}
                     title={item.title}
                     content={item.content}
                     isOpen={openItem === index}
                     toggleItem={toggleItem}             
                    />
                ))}
            </div>
        </div>
    )
}

export default Accordion