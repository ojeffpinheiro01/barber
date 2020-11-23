import AsyncStorage from "@react-native-community/async-storage";

const BASE_API = 'https://api.b7web.com.br/devbarber/api';
const authBaseURL = 'https://identitytoolkit.googleapis.com/v1'

// import { API_KEY } from '../env'

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method:'POST',
            headers:{
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const res = await req.json();        
        return res;
    },

    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method:'POST',
            headers:{
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const res = await req.json();
        return res;
    },
    
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method:'POST',
            headers:{
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const res = await req.json();
        return res;
    },

    logout: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            },
            body: JSON.stringify({token}),
        });
        const res = req.json();
        return res;
    },
    getBarbers: async (lat = null, lng = null, address = null) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(
            `${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`,
        );
        const res = await req.json();
        return res;
    },
    getBarber: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`);
        const res = await req.json();
        return res;
    },
    setFavorite: async (barberId) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/favorite?token=${token}`, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            },
            body: JSON.stringify({barber: barberId}),
        });
        const res = await req.json();
        return res;
    },
    setAppointments: async (
        userId,
        service,
        selectedYear,
        selectedMonth,
        selectedDay,
        selectedHour,
        ) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/barber/${userId}/appointment`, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            },
            body: JSON.stringify({
                token,
                id: userId,
                service,
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay,
                hour: selectedHour,
            }),
        });
        const res = req.json();
        return res;
    },
    search: async (barberName) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(
            `${BASE_API}/search?q=${barberName}&token=${token}`,
        );
        const res = await req.json();
        return res;
    },
    getFavorites: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(
            `${BASE_API}/user/favorites?token=${token}`,
        );
        const res = await req.json();
        return res;
    },

    getAppointments: async () => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(
        `${BASE_API}/user/appointments?token=${token}`,
    );
    const res = await req.json();
    return res;
    },
};