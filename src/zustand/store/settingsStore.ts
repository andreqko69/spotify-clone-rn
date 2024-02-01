import { StateCreator } from 'zustand';
import { Theme } from '../../constants/settings-constants';

export interface SettingsState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const createSettingsStore: StateCreator<SettingsState> = () => ({
  theme: Theme.Light,
  setTheme: (theme: Theme) => ({ theme }),
});

export default createSettingsStore;
