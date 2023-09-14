import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mocks/mockData';

export const getUserDataById = (userId) => {
    return USER_MAIN_DATA.find(data => data.id === userId);
}

export const getUserActivityByUserId = (userId) => {
    return USER_ACTIVITY.find(activity => activity.userId === userId);
}

export const getAverageSessionsByUserId = (userId) => {
    return USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
}

export const getUserPerformanceByUserId = (userId) => {
    return USER_PERFORMANCE.find(performance => performance.userId === userId);
}
