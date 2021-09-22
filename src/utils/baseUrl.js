export function baseurl(endpoint) {
    const BASE = 'https://paisa-challange.herokuapp.com/api/v1/paisaflix';
 /*   const local = '/api/'; */
 
   return `${BASE}${endpoint}`;
 }

 export const CONFIG = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
};