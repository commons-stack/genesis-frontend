import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssuesTable = ({ onSelectIssue, selectedIssue }) => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.github.com/repos/gitviction/vicdao/issues`)
            .then(res => {
                // debugger;
                const githubIssues = res.data
                    .map(issue => {
                        // parse issue body
                        const voteData = issue.body.split(" ");
                        let amount = 0;
                        let denomination = "DAI";
                        if (voteData.length === 3 && voteData[0] === "voteonfunding") {
                            amount = parseInt(voteData[1], 10);
                            denomination = voteData[2];
                        }

                        return {
                            ...issue,
                            amount: amount,
                            denomination: denomination
                        };
                    })
                    .reduce((accum, issue) => {
                        // filter out items with no amount filled in
                        if (issue.amount > 0) {
                            accum.push(issue);
                        }
                        return accum;
                    }, []);
                setIssues(githubIssues);
            })
            .catch(error => {});
    });

    return (
        <table className="table is-bordered is-hoverable is is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Issue</th>
                    <th>Funding</th>
                    <th>Conviction</th>
                    <th>Countdown</th>
                    <th>All Tokens</th>
                    <th>Your Tokens</th>

                </tr>
            </thead>
            <tbody>
                {issues.map(issue => {
                    return (<tr className={selectedIssue && issue.title === selectedIssue.title ? "is-selected" : ""}
                        key={issue.title} onClick={() => onSelectIssue(issue)}>
                        <td>
                            {issue.title}
                        </td>
                        <td>
                            {issue.amount} {issue.denomination}
                        </td>
                        <td>
                            e.g. 90%
                        </td>
                        <td>holding</td>
                        <td>holding</td>

                        <td>
                            <button
                            // mode="outline"
                            // onClick={e => {
                            //     this.startVote(issue.url);
                            // }}
                            >
                            Support
                            </button>
                        </td>
                    </tr>);
                })}

            </tbody>
        </table>
    );
};

export default IssuesTable;
