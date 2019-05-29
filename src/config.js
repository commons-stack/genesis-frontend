const configs = {
    // env specific settings go here
    development: {
        name: "dev"
    },
    staging: {
        name: "sta"
    },
    production: {
        name: "prod"
    }
};
let config = process.env.REACT_APP_STAGE ?
    configs[process.env.REACT_APP_STAGE] :
    configs.development;

export default {
    // non-env specific settings go here
    faucetUrl: "https://sokol.web3.party",
    ...config
};
