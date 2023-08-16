import React from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import './AverageSessionsChart.css';

const AverageSessionsChart = ({ data }) => {
    console.log("AverageSessionsChart est rendu");
    console.log("Données reçues:", data);

    const tickFormatter = (value) => {
        console.log("Formatage de la valeur pour l'axe X:", value);
        return ['L', 'M', 'M', 'J', 'V', 'S', 'D'][value - 1];
    };

    return (
        <div className="average-sessions-chart-container">
             <h4>Durée moyenne des sessions</h4>
            <LineChart 
    width={258}
    height={263}
    data={data}
    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
>
                <XAxis dataKey="day" tickFormatter={tickFormatter} />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#000000" strokeWidth={2} />
            </LineChart>
        </div>
    );
}

export default AverageSessionsChart;
