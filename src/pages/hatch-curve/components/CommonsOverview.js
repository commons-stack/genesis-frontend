/**
 * Created by will on 13/04/19.
 */
import React from 'react';

const CommonsOverview = ({ name, description }) => {
    return (
        <div className="section">
            <p className="subtitle">Organisation name : {name}</p>
            <p className="subtitle">Description : {description}</p>
        </div>
    );
};

export default CommonsOverview;
