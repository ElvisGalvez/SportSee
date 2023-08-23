import React from 'react';
import './DataStatBox.css';
import { EnergyIcon, ChickenIcon, AppleIcon, CheeseburgerIcon } from '../Logos/logos';

const DataStatBox = ({ color, icon, value, label }) => {
    let IconComponent;

    switch(icon) {
        case 'energy':
            IconComponent = EnergyIcon;
            break;
        case 'chicken':
            IconComponent = ChickenIcon;
            break;
        case 'apple':
            IconComponent = AppleIcon;
            break;
        case 'cheeseburger':
            IconComponent = CheeseburgerIcon;
            break;
        default:
            IconComponent = () => null; 
    }

    return (
        <div className="stat-item">
            <div className="icon-container" style={{ backgroundColor: color }}>
                <IconComponent />
            </div>
            <div className="text-container">
                <span className="value">{value}</span>
                <span className="label">{label}</span>
            </div>
        </div>
    );
}

export default DataStatBox;
