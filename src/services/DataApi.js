//Ici, on choisi entre l'API fictive ou réelle

import { USE_MOCK_DATA } from './settings'; //fichier de paramètre boléen
import * as api from './Api';
import * as mockApi from './mockApi';


//Chacune de ces fonctions est une fonction d'accès aux données. 
//Elles prennent un userId en paramètre et renvoient les données correspondantes, soit depuis l'API réelle (si USE_MOCK_DATA est false) soit depuis l'API fictive (si USE_MOCK_DATA est true).
export const getUserDataById = (userId) => {
    return USE_MOCK_DATA ? mockApi.getUserDataById(userId) : api.getUserDataById(userId);
}

export const getUserActivityByUserId = (userId) => {
    return USE_MOCK_DATA ? mockApi.getUserActivityByUserId(userId) : api.getUserActivityByUserId(userId);
}

export const getAverageSessionsByUserId = (userId) => {
    return USE_MOCK_DATA ? mockApi.getAverageSessionsByUserId(userId) : api.getAverageSessionsByUserId(userId);
}

export const getUserPerformanceByUserId = (userId) => {
    return USE_MOCK_DATA ? mockApi.getUserPerformanceByUserId(userId) : api.getUserPerformanceByUserId(userId);
}