import React from "react";

export default class FacilityIcon extends React.Component {

    render () {

        let { icon, classAddon } = this.props;

        let className = `fa ${ classAddon }`;

        switch (icon) {

            case "car-park":
                className = `${className} fa-car`;
                break;

            case "pool":
                className = `${className} fa-tint`;
                break;

            case "gym":
                className = `${className} fa-heart`;
                break;
        }

        return <i className={ className }></i>;
    }    
}