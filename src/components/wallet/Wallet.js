import React from 'react';
import { ethers } from 'ethers';

// Implements the wallet & its storage in localstorage
const Wallet = ({ onWalletAvailable, autoSign }) => {
    const [wallet] = React.useState(
        (localStorage.getItem('ethwallet') &&
            JSON.parse(localStorage.getItem('ethwallet'))) ||
        ethers.Wallet.createRandom()
    );

    React.useEffect(() => {
        onWalletAvailable(wallet);
        localStorage.setItem('ethwallet', JSON.stringify(wallet));
    }, [wallet]);

    React.useEffect(() => {
        // what needs to be done here ?
    }, [autoSign]);

    // const queryFaucet = () => {
    //     // TODO
    // };

    //  const onChange = event => setwallet(event.target.value);
    return (null);
};

export default Wallet;
