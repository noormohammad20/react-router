import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FriendDetail = () => {
    const [friend, setFriend] = useState({})

    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/users/${friendId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const { friendId } = useParams()
    return (
        <div>
            <h2>This Is Detail Of A Friend {friendId}</h2>
            <h3>name:{friend.name}</h3>
            <p>Email:{friend.email}</p>
            <h4>Site:{friend.website}</h4>
            <p><small>City:{friend.address?.city}</small></p>
            <p><small>Lat:{friend.address?.geo?.lat}</small></p>
        </div>
    )
}

export default FriendDetail