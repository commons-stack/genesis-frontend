import React from 'react';
import { Line } from "react-chartjs-2";
import convictionLib from '../math/convictionLib';

const globalParameters = {
    alpha: 90,
    totalTime: 100
};

let d = 65;

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
    const [plot, setPlot] = React.useState(null);

    const threshold = 100000;

    const makeColor = (i) => {
        const r = (i * 139) % 255;
        const g = (i * 251) % 255;
        const b = (i * 43) % 255;
        return `rgba(${r},${g},${b},0.3)`;
    };

    const generateDataSets = (stakeHistory) => convictions.map((user, userindex) => {
        const a = globalParameters.alpha / 100;
        const D = 10;
        let y0 = 0;
        let y1 = y0;
        let x = 0;
        let data = [];

        let localTime = 0; // local time ( = age of current conviction amount - reset every time conviction stake is changed.)
        let stakeIndex = 0;


        for (let t = 0; t < globalParameters.totalTime; t++) {
            // get timeline events for this CV

            y1 = convictionLib.getConviction(a, D, y0, x, localTime);

            data.push(y1);

            // check if user changed his conviction
            if (
                user.stakes &&
                user.stakes.length > stakeIndex &&
                user.stakes[stakeIndex].time <= t
            ) {
                let action = user.stakes[stakeIndex];
                stakeIndex++;
                x = action.tokensStaked;
                localTime = 0;
                y0 = y1;

                // descriptive history
                stakeHistory.push({
                    t: t,
                    desc: `${user.name} changes stake to ${action.tokensStaked}`
                });
            }

            localTime++;
        }
        return {
            label: user.name,
            fill: false,
            // backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: makeColor(userindex),
            data: data
        };
    });

    const recalc = () => {
        let labels = [];
        for (let t = 0; t < globalParameters.totalTime; t++) {
            labels.push(t);
        }

        let stakeHistory = [];

        let dataSets = generateDataSets(stakeHistory);
        // add a dataset with the total conviction
        let totalConvictionData = [];
        let triggerValues = [];
        let passed = false;
        for (let t = 0; t < globalParameters.totalTime; t++) {
            let total = dataSets.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.data[t];
            }, 0);
            totalConvictionData.push(total);
            triggerValues.push(threshold);

            if (total > threshold && !passed) {
                passed = true;
                stakeHistory.push({
                    t: t,
                    desc: `Proposal approved!`
                });
            }
        }
        dataSets.push({
            label: "trigger value",
            borderColor: "rgba(75,255,75,1)",
            data: triggerValues
        });
        dataSets.push({
            label: "total",
            borderColor: "rgba(75,192,192,1)",
            data: totalConvictionData
        });

        stakeHistory.sort((a, b) => {
            return a.t - b.t;
        });

        setPlot({
            labels: labels,
            datasets: dataSets
        });
        // this.setState({
        //     timeline: stakeHistory
        // });
    };

    React.useEffect(() => recalc());
    // recalc();
    return (
        <div>
            {plot && <Line data={plot} />}
        </div>
    );
};

export default ConvictionGraph;
