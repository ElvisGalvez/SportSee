import React, { useState, useRef, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ReferenceArea } from 'recharts';
import './AverageSessionsChart.css';

const AverageSessionsChart = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const lastActiveIndex = useRef(null);
    const [processedData, setProcessedData] = useState([]);

    useEffect(() => { //Données statiques, useEffect pas utile
        // Ajout de données supplémentaires pour les bords
        const newData = [...data];
        newData.unshift({ day: 0, sessionLength: data[0]?.sessionLength });
        newData.push({ day: 8, sessionLength: data[data.length - 1]?.sessionLength });
        setProcessedData(newData);
    }, [data]);

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

    const CustomActiveDot = (props) => {
        const { cx, cy } = props;
        return (
            <g>
                <circle
                    cx={cx}
                    cy={cy}
                    r={5}
                    stroke="white"
                    strokeWidth={5}
                    strokeOpacity={0.1983}
                    fill="transparent"
                />
                <circle
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill="white"
                />
            </g>
        );
    };

    return (
        <div className="average-sessions-chart-container">
            <h4>Durée moyenne des sessions</h4>
            <div className="chart-wrapper">
                <LineChart
                    width={258}
                    height={223}
                    data={processedData}
                    margin={{ top: 5, right: 0, bottom: 40, left: 0 }}
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
                    {activeIndex !== null && processedData[activeIndex] && (isIndexInFirstHalf ? (
                        <ReferenceArea x1={0} x2={processedData[activeIndex].day} fill="rgba(0, 0, 0, 0.0975)" />
                    ) : (
                        <ReferenceArea x1={processedData[activeIndex].day} x2={8} fill="rgba(0, 0, 0, 0.0975)" />
                    ))}



                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="url(#sessionGradient)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={<CustomActiveDot />}
                    />
                </LineChart>
            </div>
        </div>
    );
};

const CustomTooltip = ({ active, payload }) => {
    const tooltipStyle = {
        width: '39px',
        height: '25px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '8px',
        color: '#000000',
        textAlign: 'center'
    };

    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div style={tooltipStyle}>
                <p>{`${data.sessionLength} min`}</p>
            </div>
        );
    }
    return null;
};

export default AverageSessionsChart;
