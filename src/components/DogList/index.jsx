import React, {useState, useEffect} from 'react'
import { getXML } from '../../services/request'
import DogItem from '../DogItem'
import './index.css'

const DogList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getXML('https://api.thedogapi.com/v1/breeds').then(res => {
            setData(res)
        })
    }, [])
    return(
        <>
            {data.length > 0 &&
                <div className="dog-list">
                    {data.map((elem, key) => (
                        <DogItem dog={elem} key={key}/>
                    ))
                    }
                </div>
            }
        </>
    )
}

export default DogList