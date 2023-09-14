//Gère le processus de récupération des données, soit à partir des données simulées (mock) soit à partir de l'API réelle, en fonction de la valeur de USE_MOCK_DATA.

import { USE_MOCK_DATA } from './settings';
import * as MockAPI from './userDataMock';
import * as RealAPI from './userDataApi';
import { UserData, UserActivity, AverageSessions, UserPerformance } from './models';

const actionMap = {
  mainData: 'getUserDataById',
  activity: 'getUserActivityByUserId',
  averageSessions: 'getAverageSessionsByUserId',
  performance: 'getUserPerformanceByUserId'
};

const fetchData = async (dataType, userId) => {
  if (USE_MOCK_DATA) {
    return await MockAPI.getDataById(dataType, userId);
  } else {
    return await RealAPI[actionMap[dataType]](userId);
  }
};

const generateDataFunction = (dataType, Model) => {
  return async (userId) => {
    const data = await fetchData(dataType, userId);
    return new Model(data);
  };
};

export const getUserDataById = generateDataFunction('mainData', UserData);
export const getUserActivityByUserId = generateDataFunction('activity', UserActivity);
export const getAverageSessionsByUserId = generateDataFunction('averageSessions', AverageSessions);
export const getUserPerformanceByUserId = generateDataFunction('performance', UserPerformance);
