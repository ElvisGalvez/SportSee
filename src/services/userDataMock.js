// Contient la logique pour récupérer les données simulées. Ces données sont utilisées lorsque USE_MOCK_DATA est défini sur true.

import { 
  USER_MAIN_DATA, 
  USER_ACTIVITY, 
  USER_AVERAGE_SESSIONS, 
  USER_PERFORMANCE 
} from '../mocks/mockData';

export const DATA_MAP = {
  mainData: USER_MAIN_DATA,
  activity: USER_ACTIVITY,
  averageSessions: USER_AVERAGE_SESSIONS,
  performance: USER_PERFORMANCE
};

export const getDataById = (dataType, userId) => {
  const dataSet = DATA_MAP[dataType];
  if (!dataSet) {
      throw new Error(`Unknown data type: ${dataType}`);
  }
  return dataSet.find(data => data.id === userId || data.userId === userId);
};
