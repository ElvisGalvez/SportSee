import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import './RadialChart.css';

const RadialChart = ({ data }) => {
  const score = (data.todayScore || data.score || 0) * 100;
  const chartData = [{ name: 'Score', value: score }];

  return (
    <div className="gauge-chart-container">
      <RadialBarChart 
        width={258} 
        height={263} 
        cx={129} 
        cy={132} 
        innerRadius={69.69}
        outerRadius={79.69}
        barSize={10}
        data={chartData}
        startAngle={220}
        endAngle={-140} 
      >
        <PolarAngleAxis 
          type="number" 
          domain={[0, 100]} 
          angleAxisId={0} 
          tick={false}
        />
        <RadialBar
          minAngle={0}
          clockWise={true}
          dataKey="value"
          fill="#FF0000"
          cornerRadius={10}
          background={{ fill: '#FFFFFF' }}
        />
        <text x={20} y={20} fontSize={15} fill="#20253A">Score</text>
        <text x={129} y={120} textAnchor="middle" dominantBaseline="middle" fontSize={26} fontWeight="bold" fill="#282D30">{`${score}%`}</text>
        <text x={129} y={147} textAnchor="middle" dominantBaseline="middle" fontSize={26} fontWeight="700" fill="#74798C">de votre</text>
        <text x={129} y={174} textAnchor="middle" dominantBaseline="middle" fontSize={26} fontWeight="700" fill="#74798C">objectif</text>
      </RadialBarChart>
    </div>
  );
};

export default RadialChart;