import React from "react";
import user from "../components/user.png"

const card=(props)=>{
    const {name, mobile, email}=props.contact;
    console.log(uid)
   
    return (
        
        <div className="item">
            <div className="content">
                <img className="ui avatar" style={{width:"40px", height:"35px", borderRadius:"25px"}} src={user} alt="user"/> 
                <div className="header"> Name: {name}</div>
                <div> Mobile: {mobile}</div>
                <div> Email: {email}</div>
            </div>
        </div>

    );
    
    
};

export default card;