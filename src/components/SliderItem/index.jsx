import React from 'react'
import './index.css'

const SliderItem = ({categorie, handleSelect, selected}) => {
    return (
            <div  className="slider-item" >
                <div style={{borderRadius: "10px"}} className={selected ? "selected" : ""} onClick={() => handleSelect(categorie.id)}>
                    <div className="slider-item-img">
                        <img width="30px" height="30px" src={categorie.img} alt=""/>
                    </div>
                </div>
                <span>{categorie.label}</span>
            </div>
    )
}

export default SliderItem