import React from 'react';
import { reducer, initialState } from '../state/wallet';

export const WalletContext = React.createContext();


const WalletProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = { state, dispatch };
    return (<WalletContext.Provider value={value}>
        {children}
    </WalletContext.Provider>);
};

export default WalletProvider;
