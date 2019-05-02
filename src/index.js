import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/styles/main.scss";
import IssuesList from './components/IssuesList';

const Index = () => {
    return (
        <div className="container">
            <h1 className="title">Issue List</h1>
            <IssuesList/>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("root"));
