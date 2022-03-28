import React, { useEffect, useState } from 'react'
import Friend from '../Friend/Friend'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Hello Friends How Are You!</h1>
            <p><small>Parle Kichu Taka Dhar Dis...: {friends.length}</small></p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}

export default Friends