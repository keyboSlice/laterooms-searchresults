import React from "react";
import FacilityIcon from "./facility-icon.js";

export default class Result extends React.Component {

    render () {

        let { 
            hotel, 
            maxStars } = this.props;

        let stars = [...Array (maxStars).keys ()].map (i => {

            let className = "stars__star";

            if ((i + 1) <= hotel.StarRating) {

                className = `${className} ${className}--active`;
            }

            className = `${className} result__star`;

            return <div key={ i } className={ className }><i className="fa fa-star"></i></div>;
        });

        return (
            <div className="result page__component">
                
                <div className="result__top-row">
                    
                    <h2 className="result__name">{ hotel.Name }</h2>
                    
                    <div className="result__stars stars">
                        {stars}
                    </div>

                </div>

                <div className="result__bottom-row result__facilities">

                    { hotel.Facilities.map ((f, i) => {

                        return <div className="result__facility" key={ i }>
                            <FacilityIcon icon={ f.replace (" ", "-") } classAddon="result__facility-icon" />
                            <span className="result__facility-name">{ f }</span>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}