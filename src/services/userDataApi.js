// Contient les fonctions qui interagissent avec l'API réelle pour récupérer les données.

const BASE_URL = 'http://localhost:3000';

async function handleFetch(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
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

export const getUserDataById = (userId) => handleFetch(`/user/${userId}`);
export const getUserActivityByUserId = (userId) => handleFetch(`/user/${userId}/activity`);
export const getAverageSessionsByUserId = (userId) => handleFetch(`/user/${userId}/average-sessions`);
export const getUserPerformanceByUserId = (userId) => handleFetch(`/user/${userId}/performance`);
