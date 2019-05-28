import React from 'react';

// shows the UI of the wallet
const Balance = ({ wallet, contractAddress }) => {
    const [balance, setBalance] = React.useState();
    const [tokenName, setTokenName] = React.useState();
    const [tokenSymbol, setTokenSymbol] = React.useState();

    React.useEffect(() => {
        if (wallet && contractAddress) {
            // TODO : actually query wallet for balance & token Name
            setBalance(Math.floor(Math.random() * 1000));
            setTokenName(`XDAI`);
            setTokenSymbol("xDAI");
        }
        //        localStorage.setItem('ethwallet_autosign', autoSign);
    }, [contractAddress, wallet]);

    // const queryFaucet = () => {
    //     // TODO
    // };

    return (
        <div>
            <section>
                <label className="checkbox">
                    Balance of {tokenName}: {balance} {tokenSymbol}
                </label>
            </section>
        </div>
    );
};

export default Balance;


