import React from "react";
import { Range } from "rc-slider";

export default class Stars extends React.Component {

    render () {

        let { 
            minStars, 
            maxStars,
            starsLow,
            starsHigh,
            onStarSliderChange } = this.props;

        return (

            <div className="stars__wrapper">

                <div className="stars">

                    { [...Array (maxStars).keys ()].map ((star, i) => {

                        let className = ((maxStars == 0) || (i >= starsLow && i+1 <= starsHigh))
                            ? "stars__star stars__star--active"
                            : "stars__star";

                        return <div key={ i } className={ className }><i className="fa fa-star"></i></div>;
                    }) }

                </div>

                <div className="stars__slider">

                    <Range 
                        onChange={ onStarSliderChange }
                        number={ [starsLow, starsHigh] }
                        min={ minStars } 
                        max={ maxStars } 
                        step={ 1 } />

                </div>

            </div>
        )
    }
}