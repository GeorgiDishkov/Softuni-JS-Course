import { navUpdate } from '../middlewere/navUpdate.js';
import { logout } from '../services/services.js';
import { clearUserData } from '../unit.js';

export async function logoutView() {
    await logout();
    clearUserData();
    navUpdate();
    // to do redirect when data is cleared 
}