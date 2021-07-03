import React, {useEffect, useState} from 'react'
import { getXML } from '../../../src/services/request'
import DetailPet from '../../components/DetailPet'
import InfoPeople from '../../components/InfoPeople'

const Detail = (props) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        let id = props.match.params.id
        getXML('https://api.thedogapi.com/v1/breeds/' + id).then(res => {
            setData(res)
        })
    },[])

    return(
       <>
        {data &&
            <div className="Info">
                <DetailPet dog={data}/>
                <InfoPeople/>
            </div>
        }
       </>
    )
}

export default Detail