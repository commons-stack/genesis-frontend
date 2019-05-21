import React from 'react';
// import IssuesTable from './IssuesTable';
// import ConvictionOverview from './conviction/ConvictionOverview';
import Balance from './wallet/Balance';

const BondingContainer = ({ wallet }) => {
    // const [selectedIssue, setSelectedIssue] = React.useState(null);
    const buy = () => {
        // TODO
    };
    const sell = () => {
        // TODO
    };
    return (
        <div>
            <h1 className="title">Bonding curve buy/sell</h1>
            <p>Bonding curve comes here</p>
            <Balance wallet={wallet} contractAddress="0x1234" />
            <button
                onClick={buy}
                className=" button is-primary is-outlined is-small"
            >Buy tokens</button>
            <button
                onClick={sell}
                className=" button is-primary is-outlined is-small"
            >Sell tokens</button>

        </div>
    );
};

export default BondingContainer;
