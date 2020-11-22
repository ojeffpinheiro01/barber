const BASE_API = 'https://barber-56631.firebaseio.com/';
const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'

// import { API_KEY } from '../env'
const API_KEY = 'AIzaSyBqtG08tLzd3Kaf251OJISu8W8GPmE-LkY'

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        })
        const res = await req.json();        
        return res;
    },
    signIn: async (email, password) => {
        const req = await fetch(`${authBaseURL}/accounts:signUp?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const res = await req.json();
        return res;
    },
    signUp: async (name, email, password) => {
        const req = await fetch(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const res = await req.json();
        return res;
    }
}