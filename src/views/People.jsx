import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState("")

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/people/${id}`)
        .then(response => {
            setPerson(response.data);
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                person ?
                <div>
                    <h1>{person.name}</h1>
                    <img src={person.image.medium} alt={person.name} />
                </div> :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default People