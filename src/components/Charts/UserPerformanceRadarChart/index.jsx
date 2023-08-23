import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './UserPerformanceRadarChart.css';

const UserPerformanceRadarChart = ({ data, kindMapping }) => {
    const TRANSLATION_MAPPING = {
        "intensity": "Intensité",
        "speed": "Vitesse",
        "strength": "Force",
        "endurance": "Endurance",
        "energy": "Energie",
        "cardio": "Cardio"
    };

    const KIND_ORDER = {
        "Intensité": 1,
        "Vitesse": 2,
        "Force": 3,
        "Endurance": 4,
        "Energie": 5,
        "Cardio": 6
    };

    const transformedData = Array.isArray(data) ? data.map(item => ({
        subject: TRANSLATION_MAPPING[kindMapping[item.kind]],
        key: item.kind,
        fullMark: item.value
    })) : [];

    transformedData.sort((a, b) => KIND_ORDER[a.subject] - KIND_ORDER[b.subject]);

    return (
        <div className="radar-chart-container">
            <RadarChart
                width={250}  
                height={250} 
                data={transformedData}
                cx={125}     
                cy={125}     
            >
                <PolarGrid
                    gridType='polygon'
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "white", fontSize: 12, textAnchor: 'middle' }}
                />
                <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 165]} />
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
