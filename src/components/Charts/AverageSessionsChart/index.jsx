import React, { useState, useRef } from 'react';
import { LineChart, Line, XAxis, Tooltip, ReferenceArea } from 'recharts';
import './AverageSessionsChart.css';

const AverageSessionsChart = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const lastActiveIndex = useRef(null);

    const tickFormatter = (value) => {
        if (value === 0 || value === 8) return '';
        return ['L', 'M', 'M', 'J', 'V', 'S', 'D'][value - 1];
    };

    const isIndexInFirstHalf = activeIndex !== null && activeIndex < 3.5;

    const handleMouseMove = (e) => {
        if (e && e.activeTooltipIndex !== lastActiveIndex.current) {
            setActiveIndex(e.activeTooltipIndex);
            lastActiveIndex.current = e.activeTooltipIndex;
        }
    };

    return (
        <div className="average-sessions-chart-container">
            <h4>Durée moyenne des sessions</h4>
            <LineChart
    width={258}
    height={263}
    data={data}
    margin={{ top: 5, right: 5, bottom: 40, left: 5 }} 
    onMouseMove={handleMouseMove}
>
                <defs>
                    <linearGradient id="sessionGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4032} />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
                    </linearGradient>
                </defs>


                <XAxis
                     dataKey="day"
                     tickFormatter={tickFormatter}
                     axisLine={false}
                     tickLine={false}
                     tick={{ fill: '#FFFFFF', fontSize: 12, opacity: 0.5, dy: 20 }} 
                />

                
                <Tooltip
                    cursor={{ stroke: 'transparent', fill: 'transparent' }}
                    content={<CustomTooltip />}
                />
                {activeIndex !== null && data[activeIndex] && (isIndexInFirstHalf ? (
                    <ReferenceArea x1={1} x2={data[activeIndex].day} fill="rgba(0, 0, 0, 0.0975)" />
                ) : (
                    <ReferenceArea x1={data[activeIndex].day} x2={7} fill="rgba(0, 0, 0, 0.0975)" />
                ))}
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="url(#sessionGradient)"
                    strokeWidth={2}
                />
            </LineChart>
        </div>
    );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p>Jour : {['L', 'M', 'M', 'J', 'V', 'S', 'D'][data.day - 1]}</p>
                <p>Minutes : {data.sessionLength}</p>
            </div>
        );
    }
    return null;
};

export default AverageSessionsChart;
