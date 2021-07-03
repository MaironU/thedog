import React from 'react'
import Hearth from './../../assets/icons/heart.svg'
import people from '../../assets/icons/Prueba.jpg'

const CommentPeople = () => {
    return(
        <div className="info-people">
            <div className="container-people">
                <div className="people">
                    <img width="50px" height="50px" src={people} alt=""/>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "15px"}}>
                        <h5>Harry Jones</h5>
                        <span style={{color: "#8C8C8C"}}>Owner</span>
                    </div>
                </div>
                <div>
                    <span style={{color: "#8C8C8C"}}>24/01/2020</span>
                </div>
            </div>
            <div className="people-description">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>

            <div className="info-heart">
                <div className="cont-heart">
                    <img width="15px" src={Hearth} alt=""/>
                </div>
                <button>Adaption</button>
            </div>
        </div>
    )
}


export default CommentPeople