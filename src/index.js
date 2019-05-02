import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/styles/main.scss";

class Welcome extends React.Component {
    render () {
        return (
            <div className="buttons">
                <a className="button is-primary">Primary</a>
                <a className="button is-link">Link</a>
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
