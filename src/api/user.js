import axios from "axios";
const API_REGISTER = "https://api.dojofullstack.com/api/auth/users/";
const API_LOGIN_JWT = "https://api.dojofullstack.com/api/auth/jwt/create/";
const API_USER_ME = "https://api.dojofullstack.com/api/auth/users/me/";
const API_REFRESH_TOKEN = "https://api.dojofullstack.com/api/auth/jwt/refresh/";

export const authToLogin = async (loginData) => {
    try {
        const response = await axios.post(API_LOGIN_JWT, loginData);
        const { access, refresh } = response.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

    } catch (error) {
        console.log("Error al intentar inciar sesion api", error);
        throw error;
    }
}

export const getUser = async () => {
    try {
        const token = localStorage.getItem("access");
        const response = await axios.get(API_USER_ME, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        if (error.status === 401) {
            getRefresh();
        }

    }
}

export const getRefresh = async () => {
    const token = localStorage.getItem("refresh");
    if (token) {
        try {
            const response = await axios.post(API_REFRESH_TOKEN, { token });
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
        } catch (error) {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
        }
    }
}

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(API_REGISTER, userData);
    } catch (error) {
        console.log("Error al intentar registrarse api", error);
        throw error;
    }

}