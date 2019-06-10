import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import Navigation from './shared-components/Navigation';
import pages from './pages/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WalletProvider from './context/Wallet';
import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';


// optional cofiguration
const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
};

const Index = () => {
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <WalletProvider>
                <div className="container">
                    <BrowserRouter>
                        <Navigation/>
                        <div>
                            <Switch>
                                {Object.values(pages).map(({ RootComponent, rootPath }) => (
                                    <Route
                                        key={rootPath}
                                        path={rootPath}
                                        exact
                                        render={props => <RootComponent {...props} />}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </WalletProvider>
        </AlertProvider>
    );
};

ReactDOM.render(<Index/>, document.getElementById('root'));
