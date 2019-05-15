import React from 'react';
import { ethers } from 'ethers';

const Wallet = ({ }) => {
    const [autoSign, setAutoSign] = React.useState(
        localStorage.getItem('ethwallet_autosign') || false);

    const [wallet] = React.useState(
        (localStorage.getItem('ethwallet') &&
            JSON.parse(localStorage.getItem('ethwallet'))) ||
        ethers.Wallet.createRandom()
    );

    React.useEffect(() => {
        localStorage.setItem('ethwallet', JSON.stringify(wallet));
    }, [wallet]);

    React.useEffect(() => {
        localStorage.setItem('ethwallet_autosign', autoSign);
    }, [autoSign]);

    //  const onChange = event => setwallet(event.target.value);

    return (
        <div>
            <h1 className="title">Your wallet</h1>
            <pre>{JSON.stringify(wallet.signingKey.address, null, 2)}</pre>
            <label className="checkbox">
                <input defaultChecked={autoSign} type="checkbox" onChange={(e) => { setAutoSign(e.target.checked); }} />
                auto-sign transactions {autoSign.toString()}
            </label>
        </div>
    );
};

export default Wallet;
