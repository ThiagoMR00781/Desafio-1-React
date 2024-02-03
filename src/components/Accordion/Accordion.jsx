import { useState } from 'react'
import './Accordion.css'
import AccordionItem from './AccordionItem'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const OnTitleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
  }
    // // essa parte eu teria que colocar no return, tá funcionando, mas sem css
    //     <div>
    //         {items.map((item, index) => (
    //             <div key={index}>
    //                 <button onClick={() => OnTitleClick(index)}>
    //                     {item.title}
    //                 </button>
    //                 {index === activeIndex && <div>{item.content}</div>}
    //                 </div>
    //             ))}
    //     </div>
    //
    return (
        <div className="accordion">
            <div>
             {items.map((item, index) => (
                    <AccordionItem 
                     key={item.id}
                     title={item.title}
                     open={() => OnTitleClick}
                     content={item.content}
                     isAcitive={activeIndex === index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Accordion