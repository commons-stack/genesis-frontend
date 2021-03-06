/**
 * Created by will on 13/04/19.
 */
import React from 'react';
// const abcLib = require("@giveth/commons-abc-lib");
// const protocol = require("../../integrations/protocol");
// const web3 = require("../../integrations/web3");

const Launch = ({ name, curveParameters, communityParameters, initializeCommonsToken }) => {
    const [launching, setLaunchingFlag] = React.useState(false);

    const launchCommons = () => {
        setLaunchingFlag(true);

        // const account = await web3.getAccount();
        // const reserveToken = await protocol.getReserveToken();
        // const fundingPool = await protocol.getFundingPool();

        // console.log(curveParameters) // initialRaise, fundingPoolPercentage, initialTokenPrice
        // console.log(communityParameters) // minimumContribution, time, convicationTime

        console.log("LAUNCH WITH P0 ", curveParameters.initialTokenPrice);
        const commonsTokenDummy = {
            account: 1234567,
            reserveToken: 12345678,
            reserveRatio: 142857, // reserveRatio = kappa ~ 6
            gasPrice: 15000000000, // 15gwei
            theta: Math.ceil(curveParameters.fundingPoolPercentage * 10000), // % in ppm
            p0: curveParameters.initialTokenPrice,
            initialRaise: Math.ceil(curveParameters.initialRaise),
            fundingPool: 10000000,
            friction: Math.ceil(communityParameters.exitFee * 10000), // % in ppm
            duration: Math.ceil(communityParameters.hatchSalePeriod),
            minimunContribution: Math.ceil(communityParameters.minimumContribution)
        };

        initializeCommonsToken(commonsTokenDummy);


        // const commonsToken = await abcLib.CommonsToken.deploy(
        //   account,
        //   reserveToken,
        //   142857, // reserveRatio = kappa ~ 6
        //   15000000000, // 15gwei
        //   Math.ceil(curveParameters.fundingPoolPercentage * 10000), // % in ppm
        //   Math.ceil(curveParameters.initialTokenPrice),
        //   Math.ceil(curveParameters.initialRaise),
        //   fundingPool,
        //   Math.ceil(communityParameters.exitFee * 10000), // % in ppm
        //   Math.ceil(communityParameters.hatchSalePeriod),
        //   Math.ceil(communityParameters.minimumContribution)
        // );

        // console.log(commonsToken);
    };

    return (
        <div className="launch-commons">
            <span className="title">{name}</span>
            <div className="level-item">
                <div className="tile is-vertical subtitle">
                    <div>Initial Raise : <b>{curveParameters.initialRaise}</b> XDAI</div>
                    <div>Initial Price Point : <b>{curveParameters.initialTokenPrice}</b> XDAI</div>
                    <div>Funding Pool : <b>{curveParameters.fundingPoolPercentage * curveParameters.initialRaise}</b> XDAI</div>
                </div>
                <span className="tile is-vertical subtitle">
                    <div>Minimum contribution : <b>{communityParameters.minimumContribution} XDAI</b></div>
                    <div>Hatch Sale Period : <b>{communityParameters.hatchSalePeriod}</b> Days</div>
                    <div>Proposal duration : <b>{communityParameters.proposalDuration}</b> Days</div>
                    <div>Exit fee : <b>{communityParameters.exitFee}</b> %</div>
                </span>
            </div>


            <div>
                <h1 className="title">All Set!</h1>
                <p className="subtitle">Raise funds, engage communities, support projects, and incentivize action.</p>
                {launching ? (
                    <div>lanching...</div>
                ) : (
                    <button className="button is-primary" onClick={launchCommons}>
            Launch your Commons
                    </button>
                )}
            </div>
        </div>
    );
};

export default Launch;
