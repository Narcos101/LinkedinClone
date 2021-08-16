import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem1 = (topic) => {
        return(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1551573355-19727699d60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="" />  
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>              
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber"> 2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber"> 3,000</p>
                </div>

                
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem1('reactjs')}
                {recentItem1('programming')}
                {recentItem1('softwareengineering')}
                {recentItem1('design')}
                {recentItem1('developer')}
            </div>
            
        </div>
    )
}

export default Sidebar
