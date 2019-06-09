import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import Navigation from './shared-components/Navigation';
import pages from './pages/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WalletProvider from './context/Wallet';


const Index = () => {
    return (
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
    );
};

ReactDOM.render(<Index/>, document.getElementById('root'));
