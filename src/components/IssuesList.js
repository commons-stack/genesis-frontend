import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IssuesList = () => {
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
                        let a = 0;
                        let d = "DAI";
                        if (voteData.length === 3 && voteData[0] === "voteonfunding") {
                            a = parseInt(voteData[1], 10);
                            d = voteData[2];
                        }

                        return {
                            ...issue,
                            amount: a,
                            denomination: d
                        };
                    })
                    .reduce((accum, issue) => {
                        // filter out items with no amount filled in
                        if (issue.amount > 0) {
                            accum.push(issue);
                        }
                        return accum;
                    }, []);
                console.log(githubIssues);
                setIssues(githubIssues);
            })
            .catch(error => {});
    });

    return (
        <table className="table is-bordered is-hoverable is is-striped is-hoverable is-fullwidth">
            {issues.map(issue => {
                return (<tr key={issue.title}>
                    <td>
                        {issue.title}
                    </td>
                    <td>
                        {/*<Text>*/}
                        {issue.amount} {issue.denomination}
                        {/*</Text>*/}
                    </td>
                    <td>
                        THE CHART
                        {/*<LineChart*/}
                        {/*width={400}*/}
                        {/*height={150}*/}
                        {/*data={data}*/}
                        {/*margin={{ top: 5, right: 20, bottom: 5, left: 0 }}*/}
                        {/*>*/}
                        {/*<Line type="monotone" dataKey="tokens" stroke="#000" />*/}
                        {/*<Line type="monotone" dataKey="conviction" stroke="#8884d8" />*/}
                        {/*<Line type="monotone" dataKey="total" stroke="#82ca9d" />*/}
                        {/*<CartesianGrid stroke="#ccc" />*/}
                        {/*<XAxis dataKey="name" />*/}
                        {/*<YAxis />*/}
                        {/*<Tooltip />*/}
                        {/*</LineChart>*/}
                    </td>
                    <td>
                        {/*<TextInput type="number" defaultValue="0" />*/}
                        <button
                            // mode="outline"
                            // onClick={e => {
                            //     this.startVote(issue.url);
                            // }}
                        >
                          Vote
                        </button>
                    </td>
                </tr>);
            })}
        </table>

    );
};

export default IssuesList;
