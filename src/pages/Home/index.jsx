import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import VerticalNav from '../../components/VerticalNav';
import { getUserDataById, getUserActivityByUserId, getAverageSessionsByUserId, getUserPerformanceByUserId } from '../../services/dataApi';
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
  const [error, setError] = useState(null);  // État pour gérer les erreurs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUserData = await getUserDataById(12);
        const fetchedUserActivity = await getUserActivityByUserId(12);
        const fetchedAverageSessions = await getAverageSessionsByUserId(12);
        const fetchedUserPerformance = await getUserPerformanceByUserId(12);

        // Si tout va bien, mettre à jour l'état
        setUserData(fetchedUserData);
        setUserActivity(fetchedUserActivity.sessions);
        setAverageSessions(fetchedAverageSessions.sessions);
        setUserPerformance(fetchedUserPerformance);
        setError(null);  // Réinitialiser le message d'erreur
      } catch (err) {
        // En cas d'erreur, mettre à jour l'état d'erreur
        setError("Une erreur est survenue de notre côté. Veuillez réessayer plus tard.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <VerticalNav />
              {error && <div className="error-message">{error}</div>} {/* Affichage du message d'erreur */}
        {userData && userActivity && averageSessions && userPerformance && (
          <div>
            <div className="user-greeting">
            <h2 className="greeting">Bonjour <span className="user-name">{userData.firstName}</span></h2>
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