import React from 'react';

const ConvictionTimeline = ({ timeline }) => {
    return (
        <div>
            <h2 className="title">Conviction Timeline</h2>
            <ol>
                {timeline.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.time}h : {item.description}
                        </div>
                    );
                })}
            </ol>
        </div>
    );
};

export default ConvictionTimeline;
