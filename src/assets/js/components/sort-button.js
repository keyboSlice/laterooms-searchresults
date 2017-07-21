import React from "react";

export default class SortButton extends React.Component {

    render () {

        let {
            direction,
            activeDirection,
            onClick
        } = this.props;

        let className = "sort-button";

        if (activeDirection == direction) {

            className = `${className} ${className}--active`;
        }

        let iconClass = direction == "asc" 
            ? "fa fa-sort-amount-asc" 
            : "fa fa-sort-amount-desc"; 

        return <a className={ className } onClick={ onClick }><i className={ iconClass }></i></a>
    }
}