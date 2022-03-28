import React from 'react'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Fancy Routing!!</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/countries'>Countries</CustomLink>


            </nav>
        </div >
    )
}

export default Header