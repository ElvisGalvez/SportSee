
import { USE_MOCK_DATA } from './settings'; //fichier de paramètre boléen
import { 
  getUserDataById as real_getUserDataById, 
  getUserActivityByUserId as real_getUserActivityByUserId, 
  getAverageSessionsByUserId as real_getAverageSessionsByUserId, 
  getUserPerformanceByUserId as real_getUserPerformanceByUserId 
} from './userService';

import { 
  mock_getUserDataById, 
  mock_getUserActivityByUserId, 
  mock_getAverageSessionsByUserId, 
  mock_getUserPerformanceByUserId 
} from './mockApi';


//Chacune de ces fonctions est une fonction d'accès aux données. 
//Elles prennent un userId en paramètre et renvoient les données correspondantes, soit depuis l'API réelle (si USE_MOCK_DATA est false) soit depuis l'API fictive (si USE_MOCK_DATA est true).
export const getUserDataById = (userId) => {
    return USE_MOCK_DATA ? mock_getUserDataById(userId) : real_getUserDataById(userId);
}

export const getUserActivityByUserId = (userId) => {
    return USE_MOCK_DATA ? mock_getUserActivityByUserId(userId) : real_getUserActivityByUserId(userId);
}

export const getAverageSessionsByUserId = (userId) => {
    return USE_MOCK_DATA ? mock_getAverageSessionsByUserId(userId) : real_getAverageSessionsByUserId(userId);
}

export const getUserPerformanceByUserId = (userId) => {
    return USE_MOCK_DATA ? mock_getUserPerformanceByUserId(userId) : real_getUserPerformanceByUserId(userId);
}