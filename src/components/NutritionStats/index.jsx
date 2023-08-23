import React from 'react';
import DataStatBox from '../DataStatBox';

const NutritionStats = ({ keyData }) => {
    const statsConfig = [
        { color: "rgba(255, 0, 0, 0.0661)", icon: "energy", value: `${keyData.calorieCount}kCal`, label: "Calories" },
        { color: "rgba(74, 184, 255, 0.1)", icon: "chicken", value: `${keyData.proteinCount}g`, label: "Protéines" },
        { color: "rgba(249, 206, 35, 0.1017)", icon: "apple", value: `${keyData.carbohydrateCount}g`, label: "Glucides" },
        { color: "rgba(253, 81, 129, 0.1)", icon: "cheeseburger", value: `${keyData.lipidCount}g`, label: "Lipides" },
    ];
    
    return (
        <div className="stats-container">
            {statsConfig.map((stat, index) => (
                <DataStatBox 
                    key={index}
                    color={stat.color}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                />            
            ))}
        </div>
    );
};

export default NutritionStats;
