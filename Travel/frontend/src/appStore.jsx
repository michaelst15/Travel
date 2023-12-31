import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const appStore = (set) => ({
    dopen: true,
    updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

const persistedAppStore = persist(appStore, { name: 'my_store' });
export const useAppStore = create(persistedAppStore);