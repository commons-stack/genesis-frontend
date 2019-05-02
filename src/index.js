import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/styles/main.scss";
import IssuesTable from './components/IssuesTable';
import ConvictionGraph from './components/ConvictionGraph';

const Index = () => {
    return (
        <div className="container">
            <h1 className="title">Issue List</h1>
            <IssuesTable/>
            <ConvictionGraph/>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("root"));
