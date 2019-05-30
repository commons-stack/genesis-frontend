/**
 * Created by will on 12/04/19.
 */
import React from 'react';
import PropTypes from 'prop-types';

const HatchPhaseHeader = ({ title, subtitle, hatchPhase }) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subtitle}</h3>
        </div>
    );
};

HatchPhaseHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};


export default HatchPhaseHeader;
