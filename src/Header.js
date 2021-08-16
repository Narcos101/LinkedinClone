import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Header() {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const logoutofApp = () =>{
        dispatch(logout());
        auth.signOut();
    }


    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>

                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption onClick={logoutofApp} avatar={true} title="me"/>
            </div>
        </div>
    )
}

export default Header
