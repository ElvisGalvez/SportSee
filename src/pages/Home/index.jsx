import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import VerticalNav from '../../components/VerticalNav';
import { getUserDataById, getUserActivityByUserId, getAverageSessionsByUserId, getUserPerformanceByUserId } from '../../services/api';
import './Home.css';
import DailyActivityChart from '../../components/Charts/DailyActivityChart';
import AverageSessionsChart from '../../components/Charts/AverageSessionsChart';
import UserPerformanceRadarChart from '../../components/Charts/UserPerformanceRadarChart';
import RadialChart from '../../components/Charts/RadialChart';
import NutritionStats from '../../components/NutritionStats';

function Home() {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserData = await getUserDataById(12);
      const fetchedUserActivity = await getUserActivityByUserId(12);
      const fetchedAverageSessions = await getAverageSessionsByUserId(12);
      const fetchedUserPerformance = await getUserPerformanceByUserId(12);

      setUserData(fetchedUserData);
      setUserActivity(fetchedUserActivity.sessions);
      setAverageSessions(fetchedAverageSessions.sessions);
      setUserPerformance(fetchedUserPerformance);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <VerticalNav />
        {userData && userActivity && averageSessions && userPerformance && (
          <div>
            <div className="user-greeting">
              <h2 className="greeting">Bonjour <span className="user-name">{userData.userInfos.firstName}</span></h2>
              <p className="congratulations">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="chart-and-stats-container">
              <div className="charts-container">
                <DailyActivityChart data={userActivity} />
                <div className="graphs-container">
                  <AverageSessionsChart data={averageSessions} />
                  <UserPerformanceRadarChart data={userPerformance.data} kindMapping={userPerformance.kind} />
                  <RadialChart data={userData} />
                </div>
              </div>
              <NutritionStats keyData={userData.keyData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;