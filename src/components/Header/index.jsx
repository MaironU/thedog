import React from 'react'
import './index.css'
import Location from '../../assets/icons/location.svg'
import Line from '../../assets/icons/alinear.svg'
import people from '../../assets/icons/Prueba.jpg'

const Header = () => {
    return(
        <div className="header">
            <div className="toggle">
                <img
                    style={{marginLeft: "10px"}}
                    width="20px"
                    src={Line}
                  />
            </div>
            <div className="container-input">
                <div style={{display: "flex", justifyContent: "center", width: "80%"}}>
                    <img width="11px" src={Location} alt=""/>
                    <input type="text" placeholder="New York, Usa"/>
                </div>
            </div>
            <div className="profile">
                <img width="100%" src={people} alt=""/>
            </div>
        </div>
    )
}


export default Header