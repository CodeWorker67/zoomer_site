import { create } from 'zustand';

const useUIStore = create((set) => ({
  mobileMenuOpen: false,
  sidebarOpen: false,

  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),

  loadFromStorage: () => {},
}));

export default useUIStore;
