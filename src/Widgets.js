import React from 'react'
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

const newsArticle = (heading,subtitle) =>{
    return(
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>

        </div>
    </div>
    )
}



function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin news!</h2>
                <InfoIcon />
            </div>
            {newsArticle("Tesla","Reaches sky high")}
            {newsArticle("Virgin Group","Richard Branson to go to space")}
            {newsArticle("LVMH","Bernard Arnault becomes the worlds richest man")}
            {newsArticle("Reliance","Ambani is likely to bid for T-mobile Netherlands")}
            {newsArticle("Covid-19","India recorded 41,806 new coronavirus cases, taking the infection tally to 3,09,87,880")}
        </div>
    )
}

export default Widgets
