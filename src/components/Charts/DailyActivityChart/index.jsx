import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        width: '39px',
        height: '63px',
        backgroundColor: '#E60000',
        color: '#FFFFFF',
        fontSize: '7px',
        lineHeight: '21px',  
        textAlign: 'center',
        padding: '5px'
      }}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
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
        style={{ marginLeft: 43 }}
        width={752}
        height={175}
        data={data}
        barSize={7}
        barGap={8}
        margin={{ top: 0, right: 30, bottom: 10, left: 0 }}
      >

        <ReferenceLine yAxisId="kg" y={middleKg} stroke="#DEDEDE" strokeDasharray="3 3" />
        <ReferenceLine yAxisId="kg" y={maxKg} stroke="#DEDEDE" strokeDasharray="3 3" />

        <XAxis
          className="x-axis"
          dataKey="day"
          tickFormatter={(value) => new Date(value).getDate()}
          tickMargin={16}
          tickLine={false}
          stroke="#DEDEDE"
          scale="point"
          padding={{ left: 11, right: 10 }}
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
        <Tooltip content={<CustomTooltip />} />
        <Bar className="bar-kg" yAxisId="kg" dataKey="kilogram" radius={[4, 4, 0, 0]} />
        <Bar className="bar-cal" yAxisId="cal" dataKey="calories" radius={[4, 4, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default DailyActivityChart;