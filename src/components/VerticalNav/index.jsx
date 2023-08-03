import React from 'react';
import './VerticalNav.css';
import { YogaIcon, SwimIcon, BikeIcon, DumbbellIcon } from '../Logos/logos';

function VerticalNav() {
    return (
      <div className="vertical-nav">
        <div className="nav-group">  
          <div className="nav-square">
            <YogaIcon />
          </div>
          <div className="nav-square">
            <SwimIcon />
          </div>
          <div className="nav-square">
            <BikeIcon />
          </div>
          <div className="nav-square">
            <DumbbellIcon />
          </div>
        </div> 
        <div className="copyright">
          Copyright, SportSee 2020
        </div>
      </div>
    );
  }
  

export default VerticalNav;
