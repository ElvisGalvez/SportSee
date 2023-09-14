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
    return handleFetch(`${BASE_URL}/user/${userId}`);
}

export const getUserActivityByUserId = async (userId) => {
    return handleFetch(`${BASE_URL}/user/${userId}/activity`);
}

export const getAverageSessionsByUserId = async (userId) => {
    return handleFetch(`${BASE_URL}/user/${userId}/average-sessions`);
}

export const getUserPerformanceByUserId = async (userId) => {
    return handleFetch(`${BASE_URL}/user/${userId}/performance`);
}
