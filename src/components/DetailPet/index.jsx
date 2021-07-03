import React from 'react'
import './index.css'
import location from '../../../src/assets/icons/location.svg'
import clock from '../../../src/assets/icons/clock.svg'
import femenine from '../../../src/assets/icons/femenine.svg'
import left from '../../../src/assets/icons/left-arrow.svg'
import share from '../../../src/assets/icons/share.svg'
import { Link } from 'react-router-dom'

const DetailPet = ({dog}) => {
    return(
        <div className="detail-pet">
            <img width="100%" src={localStorage.getItem("image")} alt=""/>
            <div className="detail-arrow">
                <Link to="/" className="detail-arrow-item">
                    <img width="20px" src={left} alt=""/>
                </Link>
                <div className="detail-arrow-item">
                    <img width="20px" src={share} alt=""/>
                </div>
            </div>
            <div className="detail-info">
                <div className="flex flex-between my-2">
                    <h4>{dog.name}</h4>
                    <img width="18px" src={femenine} alt=""/>
                </div>
                <div className="flex flex-between">
                    <span style={{fontSize: "13px"}}>{dog.breed_group}</span>
                    <div className="detail-age">
                        <img style={{marginLeft:"5PX"}} width="10px" src={clock} alt=""/>
                        <span>1 year old</span>
                    </div>
                </div>
                <div>
                    <img src={location} width="10px" alt=""/>
                    <span style={{color: '#8C8C8C'}}>120 N 4th St. Brooklyn, NY, USA</span>
                </div>
            </div>
        </div>
    )
}

export default DetailPet