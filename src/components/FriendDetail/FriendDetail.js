import React from 'react'
import { useParams } from 'react-router-dom'

const FriendDetail = () => {
    const { friendId } = useParams()
    return (
        <div>
            <h2>This Is Detail Of A Friend {friendId}</h2>
        </div>
    )
}

export default FriendDetail