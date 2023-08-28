const BASE_URL = 'http://localhost:3000'; //backend en cours d'exécution sur http://localhost:3000

async function handleFetch(url) { // effectue une requête HTTP GET vers l'URL spécifiée plus bas
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

export const getUserDataById = async (userId) => { //Utilise handleFetch pour récupérer les données principales d'un utilisateur spécifique en fonction de son identifiant
    const url = `${BASE_URL}/user/${userId}`;
    return handleFetch(url);
}

export const getUserActivityByUserId = async (userId) => {
    const url = `${BASE_URL}/user/${userId}/activity`;
    return handleFetch(url);
}

export const getAverageSessionsByUserId = async (userId) => {
    const url = `${BASE_URL}/user/${userId}/average-sessions`;
    return handleFetch(url);
}

export const getUserPerformanceByUserId = async (userId) => {
    const url = `${BASE_URL}/user/${userId}/performance`;
    return handleFetch(url);
}
