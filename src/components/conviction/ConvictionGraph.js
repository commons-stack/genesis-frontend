import React from 'react';
import { Line } from 'react-chartjs-2';

const ConvictionGraph = ({ convictionData }) => {
    return <div>{convictionData && <Line data={convictionData} />}</div>;
};

export default ConvictionGraph;
