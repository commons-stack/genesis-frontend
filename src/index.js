import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import Navigation from './components/Navigation';
import IssuesContainer from './components/IssuesContainer';
import BondingContainer from './components/BondingContainer';
import Wallet from './components/wallet/Wallet';
import WalletView from './components/wallet/WalletView';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Index = () => {
    const [wallet, setWallet] = React.useState();

    return (
        <div className="container">
            <BrowserRouter>
                <Navigation />
                <Wallet onWalletAvailable={setWallet} />
                <div>
                    <Switch>
                        <Route path="/bonding" render={props => <BondingContainer wallet={wallet} {...props} />} exact />
                        <Route path="/" render={props => <IssuesContainer {...props} />} exact />
                        <Route path="/wallet" render={props => <WalletView wallet={wallet} {...props} />} exact />
                    </Switch>
                </div>
            </BrowserRouter>


        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
