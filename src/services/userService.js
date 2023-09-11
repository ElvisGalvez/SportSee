import { UserData, UserActivity, AverageSessions, UserPerformance } from './models'; 

const BASE_URL = 'http://localhost:3000';

async function handleFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
        throw error;
    }
}

export const getUserDataById = async (userId) => {
    const url = `${BASE_URL}/user/${userId}`;
    const data = await handleFetch(url);
    return new UserData(data);  // Utilisation du modèle UserData
}

export const getUserActivityByUserId = async (userId) => {
    const url = `${BASE_URL}/user/${userId}/activity`;
    const data = await handleFetch(url);
    return new UserActivity(data);  // Utilisation du modèle UserActivity
}

export const getAverageSessionsByUserId = async (userId) => {
    const url = `${BASE_URL}/user/${userId}/average-sessions`;
    const data = await handleFetch(url);
    return new AverageSessions(data);  // Utilisation du modèle AverageSessions
}

export const getUserPerformanceByUserId = async (userId) => {
    const url = `${BASE_URL}/user/${userId}/performance`;
    const data = await handleFetch(url);
    return new UserPerformance(data);  // Utilisation du modèle UserPerformance
}
