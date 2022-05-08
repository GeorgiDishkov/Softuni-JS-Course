import { auth } from './auth.js';

export function logout (){
    // console.log(`logout`);
    window.localStorage.clear();
    auth();
}

