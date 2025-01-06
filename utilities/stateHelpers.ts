import { RootState } from "../redux/store";

// Save state to session storage
export const saveState = (state: Partial<RootState>) => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem("reduxState", serializedState);
      // console.log("State saved to session storage:", state);
    }
  } catch (e) {
    console.warn("Could not save state to session storage", e);
  }
};


// Load state from session storage
export const loadState = (): Partial<RootState> | undefined => {
  try {
    if (typeof window !== "undefined") { // Ensure it runs only on the client side
      const serializedState = sessionStorage.getItem("reduxState");
      if (serializedState === null) {
        // console.log("No state found in session storage.");
        return undefined;
      }
      // console.log("State loaded from session storage:", JSON.parse(serializedState));
      return JSON.parse(serializedState) as Partial<RootState>;
    }
  } catch (e) {
    console.warn("Could not load state from session storage", e);
    return undefined;
  }
};

