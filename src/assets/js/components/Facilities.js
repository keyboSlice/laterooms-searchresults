import React from "react";

export default class Facilities extends React.Component {

    render () {

        let {
            facilities,
            activeFacilities,
            onFacilityClick
        } = this.props;

        return (

        <ul className="facilities">

            { facilities.map ((f, i) => {

            let facilityClass = "facilities__facility";
            let iconClass = "facilities__icon fa";

            if (activeFacilities.indexOf (f) !== -1) {

                facilityClass = `${facilityClass} ${facilityClass}--active`;
                iconClass = `${iconClass} fa-check-square-o facilities`;
            }
            else {

                iconClass = `${iconClass} fa-square-o`;
            }

            return <li className={ facilityClass } key={ i } onClick={ () => onFacilityClick (f) }>
                <span className="facilities__text">
                    <i className={ f.replace(" ", "-") }></i>
                    { f }
                </span>
                <i className={ iconClass }></i>
            </li>
        }) }

        </ul> );
    }
}