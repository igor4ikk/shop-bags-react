import React, { Component } from 'react';
import styletitle from "./component.view";

export default  function Title(props) {
        return (
            <styletitle.rowtitle>
                <div className = "wrapperTitle">
                    <h1>{props.name} {props.product}</h1>
                </div> 
            </styletitle.rowtitle>
        )
}

