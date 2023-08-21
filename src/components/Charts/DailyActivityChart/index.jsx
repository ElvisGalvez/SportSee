import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './DailyActivityChart.css';

const CustomLegend = () => {
  return (
    <div className="custom-legend">
      <div className="legend-item">
        <div className="legend-dot" style={{ backgroundColor: '#282D30' }}></div>
        <span className="legend-label">Poids (kg)</span>
      </div>
      <div className="legend-item">
        <div className="legend-dot" style={{ backgroundColor: '#E60000' }}></div>
        <span className="legend-label">Calories brûlées (kCal)</span>
      </div>
    </div>
  );
};

const DailyActivityChart = ({ data }) => {
  const minKg = Math.min(...data.map(item => item.kilogram)) - 5;
  const maxKg = Math.max(...data.map(item => item.kilogram)) + 1;
  const middleKg = (minKg + maxKg) / 2;

  return (
    <div className="daily-activity-chart-container">
      <div className="daily-activity-header">
      <h2 className="daily-activity-title">Activité quotidienne</h2>
        <CustomLegend />
      </div>
      <BarChart 
        className="daily-activity-bar-chart"
        width={752} 
        height={165} 
        data={data} 
        barSize={7}
        barGap={8}
        margin={{ top: 0, right: 30, bottom: 20, left: 30 }}  
      >
        <XAxis 
          className="x-axis" 
          dataKey="day" 
          tickFormatter={(value) => new Date(value).getDate()} 
          tickMargin={16}
          tickLine={false} 
          stroke="#DEDEDE"
          scale="point"
        />
        <YAxis
          className="y-axis"
          yAxisId="kg"
          domain={[minKg, maxKg]}
          ticks={[minKg, middleKg, maxKg]}
          orientation="right"
          tickMargin={50}
          axisLine={false}
          tickLine={false}
        />
        <YAxis className="y-axis-right" yAxisId="cal" orientation="right" hide={true} />
        <Tooltip />
        <Bar className="bar-kg" yAxisId="kg" dataKey="kilogram" radius={[4, 4, 0, 0]} />
        <Bar className="bar-cal" yAxisId="cal" dataKey="calories" radius={[4, 4, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default DailyActivityChart;