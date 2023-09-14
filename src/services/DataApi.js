import { USE_MOCK_DATA } from './settings';
import * as MockAPI from './userDataMock';
import * as RealAPI from './userDataApi';
import { UserData, UserActivity, AverageSessions, UserPerformance } from './models'; 

// Sélection de l'API en fonction de la valeur de USE_MOCK_DATA
const API = USE_MOCK_DATA ? MockAPI : RealAPI;

export const getUserDataById = async (userId) => {
    const data = await API.getUserDataById(userId);
    return new UserData(data);
}

export const getUserActivityByUserId = async (userId) => {
    const data = await API.getUserActivityByUserId(userId);
    return new UserActivity(data);
}

export const getAverageSessionsByUserId = async (userId) => {
    const data = await API.getAverageSessionsByUserId(userId);
    return new AverageSessions(data);
}

export const getUserPerformanceByUserId = async (userId) => {
    const data = await API.getUserPerformanceByUserId(userId);
    return new UserPerformance(data);
}
