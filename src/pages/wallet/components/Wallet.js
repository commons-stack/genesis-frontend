import React from 'react';
import { WalletContext } from '../../../context/Wallet';

// shows the UI of the wallet
const Wallet = () => {
    const { state } = React.useContext(WalletContext);


    const [autoSign, setAutoSign] = React.useState(
        localStorage.getItem('ethwallet_autosign') || false);

    React.useEffect(() => {
        localStorage.setItem('ethwallet_autosign', autoSign);
    }, [autoSign]);

    const queryFaucet = () => {
        // TODO
    };

    return (
        <div>
            <h1 className="title">Your wallet</h1>
            <pre>{JSON.stringify(state.wallet.signingKey.address, null, 2)}</pre>
            <section>
                <label className="checkbox">
                    <input defaultChecked={autoSign} type="checkbox" onChange={(e) => {
                        setAutoSign(e.target.checked);
                    }}/>
                    auto-sign transactions {autoSign.toString()}
                </label>
            </section>
            <section>
                <button
                    onClick={queryFaucet}
                    className=" button is-primary is-outlined is-small"
                >Get some ETH from faucet
                </button>
            </section>
        </div>
    );
};

export default Wallet;
