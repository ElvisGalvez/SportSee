import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './UserPerformanceRadarChart.css';

const UserPerformanceRadarChart = ({ data, kindMapping }) => {
    const transformedData = Array.isArray(data) ? data.map(item => ({
        subject: kindMapping[item.kind], 
        key: item.kind,
        fullMark: item.value
    })) : [];

    

    return (
        <div className="radar-chart-container">
            <RadarChart
                width={258}
                height={263}
                data={transformedData}
                cx={129}
                cy={131.5}
            >
                <PolarGrid 
                    gridType='polygon'
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "white", fontSize: 12 }} 
                />
                <PolarRadiusAxis tick={false} axisLine={false} />  
                <Radar
                    dataKey="fullMark"
                    stroke="#FF0000"
                    fill="#FF0000"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </div>
    );
};

export default UserPerformanceRadarChart;
