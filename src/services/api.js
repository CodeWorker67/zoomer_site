import axios from 'axios';
import { API_BASE_URL } from '@utils/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('zoomer_user');
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login?reason=session_expired';
      }
    }
    return Promise.reject(error);
  }
);

// Auth
export const authApi = {
  telegramLogin: (data) => api.post('/auth/telegram', data),
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  me: () => api.get('/auth/me'),
  verifyEmail: (data) => api.post('/auth/verify-email', data),
  resendCode: (data) => api.post('/auth/resend-code', data),
  resetPassword: (data) => api.post('/auth/reset-password', data),
  confirmReset: (data) => api.post('/auth/confirm-reset', data),
  logout: () => api.post('/auth/logout'),
  generateLinkingCode: () => api.post('/auth/generate-linking-code'),
  link: (data) => api.post('/auth/link', data),
  googleLogin: (data) => api.post('/auth/google', data),
  generateTelegramToken: () => api.post('/auth/generate-telegram-token'),
  checkTelegramStatus: (token) => api.get(`/auth/check-status/${token}`),
};

// User
export const userApi = {
  subscription: () => api.get('/user/subscription'),
  keys: () => api.get('/user/keys'),
  referrals: () => api.get('/user/referrals'),
  profile: () => api.get('/user/profile'),
  account: () => api.get('/user/account'),
  changePassword: (data) => api.post('/user/change-password', data),
};

// Payments
export const paymentApi = {
  createPayment: (data) => api.post('/payments/create', data),
  getStatus: (id) => api.get(`/payments/${id}/status`),
};

// Trial
export const trialApi = {
  activate: () => api.post('/trial/activate'),
};

// Config
export const configApi = {
  tariffs: () => api.get('/config/tariffs'),
};

// Gifts
export const giftApi = {
  activate: (giftId) => api.post(`/gifts/${giftId}/activate`),
};

export default api;
