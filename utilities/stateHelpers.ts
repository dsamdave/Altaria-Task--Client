import { RootState } from '../redux/store';
import { initialState as authInitialState } from '../redux/slices/authSlice';

// Save state to session storage
export const saveState = (state: Partial<RootState>) => { 
    try {
      if (typeof window !== 'undefined') { 
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('reduxState', serializedState);
      }
    } catch (e) {
      console.warn("Could not save state to session storage", e);
    }
  };

// Load state from session storage
export const loadState = (): Partial<RootState> => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = sessionStorage.getItem('reduxState');
      if (serializedState === null) {
        return { auth: authInitialState };  
      }
      const parsedState = JSON.parse(serializedState) as Partial<RootState>;
      return { auth: parsedState.auth || authInitialState }; 
    }
  } catch (e) {
    console.warn("Could not load state from session storage", e);
    return { auth: authInitialState };  
  }
  return { auth: authInitialState };  
};
