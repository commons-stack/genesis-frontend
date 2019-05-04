import React from 'react';
import IssuesTable from './IssuesTable';
import ConvictionOverview from './conviction/ConvictionOverview';

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

const IssuesContainer = () => {
    const [selectedIssue, setSelectedIssue] = React.useState(null);

    return (
        <div>
            <h1 className="title">Issue List</h1>
            <IssuesTable onSelectIssue={setSelectedIssue}/>
            <ConvictionOverview issue={selectedIssue} convictionList={convictions}/>
        </div>
    );
};

export default IssuesContainer;
