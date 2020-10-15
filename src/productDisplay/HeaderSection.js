import React from 'react';
import phoneIcon from '../assets/phone-icon.svg';
import '../App.css'

function HeaderSection(props) {
    return (
        <>
            <div className="topHeader">
                <img src={phoneIcon} className="phoneIcon" alt="" /><span className="contactNumber">Call Now:8888888888</span>
            </div>
            <div className="title"> <h1 className="midContent">{props.title}</h1></div>
        </>
    );
}

export default HeaderSection;


