export const selectAllNannies = (state) => state.nannies.items;
export const selectNanniesIsLoading = (state) => state.nannies.isLoading;
export const selectNanniesError = (state) => state.nannies.error;
export const selectCurrentNanny = (state) => state.nannies.currentNanny;