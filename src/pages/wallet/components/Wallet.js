import React from 'react';
import { WalletContext } from '../../../context/Wallet';
import config from "../../../config";
import axios from "axios";

// shows the UI of the wallet
const Wallet = () => {
    const { state } = React.useContext(WalletContext);


    const [autoSign, setAutoSign] = React.useState(
        localStorage.getItem('ethwallet_autosign') || false);

    React.useEffect(() => {
        localStorage.setItem('ethwallet_autosign', autoSign);
    }, [autoSign]);

    const useFaucet = (address) => {
        axios
            .get(`${config.faucetUrl}/donate/${address}`)
            .then(res => {
                if (res && res.data && res.data.txhash) {
                    // TODO : notify user of TXHash & monitor TX for balance change
                } else {
                    // TODO : notify user of error
                }
            })
            .catch(error => {
                // TODO : notify user of error
            });
    };

    return (
        <div>
            <h1 className="title">Your wallet</h1>
            <pre>{JSON.stringify(state.wallet.signingKey.address, null, 2)}</pre>
            <section>
                <label className="checkbox">
                    <input defaultChecked={autoSign} type="checkbox" onChange={(e) => {
                        setAutoSign(e.target.checked);
                    }} />
                    auto-sign transactions {autoSign.toString()}
                </label>
            </section>
            <section>
                <button
                    onClick={() => { useFaucet(state.wallet.signingKey.address); }}
                    className=" button is-primary is-outlined is-small"
                >Get some ETH from faucet
                </button>
            </section>
        </div>
    );
};

export default Wallet;
