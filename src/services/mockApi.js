// Ici, on fournit des implémentations de fonctions qui retournent des données à partir d'un ensemble de données fictives (mockData) plutôt qu'une API réelle.

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mockData';
import { UserData, UserActivity, AverageSessions, UserPerformance } from './models';


export const mock_getUserDataById = (userId) => {
  const data = USER_MAIN_DATA.find(data => data.id === userId);
  return data ? new UserData(data) : null;
}

export const mock_getUserActivityByUserId = (userId) => {
  const data = USER_ACTIVITY.find(activity => activity.userId === userId);
  return data ? new UserActivity(data) : null;
}

export const mock_getAverageSessionsByUserId = (userId) => {
  const data = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
  return data ? new AverageSessions(data) : null;
}

export const mock_getUserPerformanceByUserId = (userId) => {
  const data = USER_PERFORMANCE.find(performance => performance.userId === userId);
  return data ? new UserPerformance(data) : null;
}
