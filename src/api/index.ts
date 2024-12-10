import authApi from './authApi.ts';
import cardApi from './cardApi.ts';

const api = {
    card: cardApi,
    auth: authApi
}

export default api;