import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {

    return {
        hotels: []
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

const Results = () => (

    <div className="page__component results">

    </div>
);

export default connect (mapStateToProps) (Results);