import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <IconButton >
            <PersonIcon  fontSize='large' className='header_icon'/>
            </IconButton>

            <img 
            src="https://dataprot.net/wp-content/uploads/2020/01/Tinder-logo.jpg"
             className="header_logo" alt="logo"/>

             <IconButton>
             <ForumIcon  fontSize='large' className='header_icon'/>
             </IconButton>

        </div>
    )
}

export default Header
