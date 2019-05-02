import React from 'react';
import { Line } from "react-chartjs-2";
import convictionLib from '../math/convictionLib';

let d = 65;

//TODO: What is this for?
const around = (offset, range) => {
    d += 7;
    return offset + ((d * 47) & (range || 60));
};

const convictions = [
    {
        name: "Philadelphia DAO",
        stakes: [
            { time: around(0), tokensStaked: around(2000, 300) },
            { time: around(50), tokensStaked: around(0, 300) }
        ]
    },
    {
        name: "Aqua Array",
        stakes: [
            { time: around(20), tokensStaked: around(333, 300) },
            { time: around(65), tokensStaked: around(6000, 5000) }
        ]
    },
    {
        name: "Global Water Commons",
        stakes: [
            { time: around(30), tokensStaked: around(1000, 500) },
            { time: around(80), tokensStaked: around(7000, 4500) }
        ]
    },
    {
        name: "Autofactory Factory",
        stakes: [
            { time: around(0), tokensStaked: 1100 },
            { time: around(30), tokensStaked: 7000 }
        ]
    }
];

const ConvictionGraph = () => {
    const [convictionDataPlots, setConvictionDataPlots] = React.useState(null);

    const convictionThreshold = 100000;

    const globalParameters = {
        alpha: 90,
        totalTime: 100
    };

    const generateConvictionColor = (i) => {
        const r = (i * 139) % 255;
        const g = (i * 251) % 255;
        const b = (i * 43) % 255;
        return `rgba(${r},${g},${b},0.3)`;
    };
    const generateConvictionDataSets = (stakeHistory) => convictions.map((user, userIndex) => {
        const a = globalParameters.alpha / 100;
        const D = 10;
        let y0 = 0;
        let y1 = y0;
        let x = 0;
        let data = [];

        let localTime = 0; // local time ( = age of current conviction amount - reset every time conviction stake is changed.)
        let stakeIndex = 0;


        for (let time = 0; time < globalParameters.totalTime; time++) {
            // get timeline events for this CV
            y1 = convictionLib.getConviction(a, D, y0, x, localTime);

            data.push(y1);

            // check if user changed his conviction
            if (
                user.stakes &&
                user.stakes.length > stakeIndex &&
                user.stakes[stakeIndex].time <= time
            ) {
                let action = user.stakes[stakeIndex];
                stakeIndex++;
                x = action.tokensStaked;
                localTime = 0;
                y0 = y1;

                // descriptive history
                stakeHistory.push({
                    time: time,
                    description: `${user.name} changes stake to ${action.tokensStaked}`
                });
            }

            localTime++;
        }
        return {
            label: user.name,
            fill: false,
            borderColor: generateConvictionColor(userIndex),
            data: data
        };
    });

    const calculateConvictionPlotData = () => {
        let labels = [];
        for (let t = 0; t < globalParameters.totalTime; t++) {
            labels.push(t);
        }

        let stakeHistory = [];

        let convictionDataSets = generateConvictionDataSets(stakeHistory);
        // add a dataset with the total conviction
        let totalConvictionData = [];
        let triggerValues = [];
        let convictionThresholdPassed = false;
        for (let time = 0; time < globalParameters.totalTime; time++) {
            let totalConviction = convictionDataSets.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.data[time];
            }, 0);
            totalConvictionData.push(totalConviction);
            triggerValues.push(convictionThreshold);

            if (totalConviction > convictionThreshold && !convictionThresholdPassed) {
                convictionThresholdPassed = true;
                stakeHistory.push({
                    time: time,
                    description: `Proposal approved!`
                });
            }
        }
        convictionDataSets.push({
            label: "trigger value",
            borderColor: "rgba(75,255,75,1)",
            data: triggerValues
        });
        convictionDataSets.push({
            label: "total",
            borderColor: "rgba(75,192,192,1)",
            data: totalConvictionData
        });

        stakeHistory.sort((a, b) => {
            return a.time - b.time;
        });

        setConvictionDataPlots({
            labels: labels,
            datasets: convictionDataSets
        });
        //TODO: Add in timeline
        // this.setState({
        //     timeline: stakeHistory
        // });
    };

    React.useEffect(() => calculateConvictionPlotData());
    return (
        <div>
            {convictionDataPlots && <Line data={convictionDataPlots} />}
        </div>
    );
};

export default ConvictionGraph;
