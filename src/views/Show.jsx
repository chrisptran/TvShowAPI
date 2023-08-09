import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Show = () => {
    const {id} = useParams()
    const [show, setShow] = useState();

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
            setShow(response.data);
        })
        .catch(err => console.log(err))
    }, [id])
    return (
        <div>
            {
                show ?
                <div>
                    <h1>{show.name}</h1>
                    <img src={show.image.medium} alt={show.name} />
                </div> :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Show