import React from 'react'
import './index.css'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import DogList from '../../components/DogList'

const Info = () => {
    return(
        <div className="Info" style={{padding: "10px"}}>
            <Header />
            <Slider />
            <DogList />
        </div>
    )
}

export default Info