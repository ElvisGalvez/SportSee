import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../mocks/mockData';

export const getUserDataById = (userId) => {
    return USER_MAIN_DATA.find(data => data.id === userId);
}

export const getUserActivityByUserId = (userId) => {
    return USER_ACTIVITY.find(data => data.userId === userId);
}

export const getAverageSessionsByUserId = (userId) => {
    const result = USER_AVERAGE_SESSIONS.find(data => data.userId === userId);
    console.log("Résultat pour getAverageSessionsByUserId:", result);
    return result;
}
