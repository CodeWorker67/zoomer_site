import { create } from 'zustand';
import { authApi } from '@services/api';

const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  loadFromStorage: async () => {
    const userJson = localStorage.getItem('zoomer_user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        set({ user, isAuthenticated: true });
        // Verify token is still valid
        const { data } = await authApi.me();
        set({ user: data, isAuthenticated: true });
        localStorage.setItem('zoomer_user', JSON.stringify(data));
      } catch {
        localStorage.removeItem('zoomer_user');
        set({ user: null, isAuthenticated: false });
      }
    }
  },

  _setAuth: (user) => {
    localStorage.setItem('zoomer_user', JSON.stringify(user));
    set({ user, isAuthenticated: true, isLoading: false });
  },

  telegramLogin: async (telegramData) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.telegramLogin(telegramData);
      get()._setAuth(data.user);
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.response?.data?.detail || 'Ошибка авторизации' };
    }
  },

  emailRegister: async (email, password) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.register({ email, password });
      set({ isLoading: false });
      if (data.requires_verification) {
        return { success: true, requiresVerification: true, email: data.email };
      }
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.response?.data?.detail || 'Ошибка регистрации' };
    }
  },

  emailLogin: async (email, password) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.login({ email, password });
      get()._setAuth(data.user);
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      const resp = error.response?.data;
      if (resp?.requires_verification) {
        return { success: false, requiresVerification: true, email: resp.email };
      }
      return { success: false, error: resp?.detail || 'Неверный email или пароль' };
    }
  },

  verifyEmail: async (email, code) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.verifyEmail({ email, code });
      get()._setAuth(data.user);
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.response?.data?.detail || 'Неверный код' };
    }
  },

  googleLogin: async (credential) => {
    set({ isLoading: true });
    try {
      const { data } = await authApi.googleLogin({ credential });
      get()._setAuth(data.user);
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.response?.data?.detail || 'Ошибка авторизации Google' };
    }
  },

  fetchMe: async () => {
    try {
      const { data } = await authApi.me();
      set({ user: data });
      localStorage.setItem('zoomer_user', JSON.stringify(data));
    } catch {
      get().logout();
    }
  },

  logout: async () => {
    try { await authApi.logout(); } catch {}
    localStorage.removeItem('zoomer_user');
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
