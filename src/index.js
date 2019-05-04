import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/styles/main.scss";
import IssuesContainer from './components/IssuesContainer';

const Index = () => {
    return (
        <div className="container">
            <IssuesContainer/>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("root"));
