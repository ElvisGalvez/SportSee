import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import VerticalNav from '../../components/VerticalNav'; 
import { getUserDataById, getUserActivityByUserId, getAverageSessionsByUserId } from '../../services/api';
import './Home.css';
import DailyActivityChart from '../../components/Charts/DailyActivityChart';
import AverageSessionsChart from '../../components/Charts/AverageSessionsChart';


function Home() {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserData = await getUserDataById(12);
      const fetchedUserActivity = await getUserActivityByUserId(12);
      const fetchedAverageSessions = await getAverageSessionsByUserId(12); 
      
      setUserData(fetchedUserData);
      setUserActivity(fetchedUserActivity.sessions);
      setAverageSessions(fetchedAverageSessions.sessions);  
  };  

    fetchData();
}, []);


  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <VerticalNav />
        {userData && userActivity && averageSessions && (
  <div>
    <div className="user-greeting">
      <h2 className="greeting">Bonjour <span className="user-name">{userData.userInfos.firstName}</span></h2>
      <p className="congratulations">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
    <DailyActivityChart data={userActivity} />
    <AverageSessionsChart data={averageSessions} /> 
  </div>
)}


      </div>
    </div>
)};

export default Home;