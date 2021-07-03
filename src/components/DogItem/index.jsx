import React from 'react'
import './index.css'
import { useHistory } from "react-router-dom";

const DogItem = ({dog}) => {
    const history = useHistory();

    const detailDog = (dog) => {
        localStorage.setItem("image", dog.image.url)
        history.push('/detail/' + dog.id)
    }

    return(
        <div className="dog-item" onClick={() => detailDog(dog)}>
            <img width="100%" loading="lazy" src={dog.image.url} alt=""/>
            <div className="dog-info">
                <h5>{dog.name}</h5>
                <span>{dog.bred_four}</span>
                <div className="dog-subinfo">
                    <div>
                        <img src="" alt=""/>
                        <span>{dog.life_span}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogItem