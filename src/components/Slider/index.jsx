import React, {useState} from 'react'
import './index.css'
import SliderItem from '../SliderItem'
import {categories} from '../../services/categories'

const Slider = () => { 

    const [selected, UseSelected] = useState(null)

    const handleSelect = (id) => {
        UseSelected(id)
    }

    return (
        <div className="slider">
            {categories.map((elem, key) => (
                    <SliderItem categorie={elem} key={key} handleSelect={handleSelect} selected={elem.id == selected ? true : false}/>
                ))
            }
        </div>
    )
}

export default Slider