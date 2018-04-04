import React, { Component } from 'react';


const UserComponent = ({ name, company, avatar_url }) => {



    var someCss = {
        display: "inline-block"
    }
    return (

        <div >
            <img width="70" src={avatar_url} />
            <div style={someCss}>
                <div>{name}</div>
                <div>{company}</div>
            </div>
        </div>

    )

}

export default UserComponent;