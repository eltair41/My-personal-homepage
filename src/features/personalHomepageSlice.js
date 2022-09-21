import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    downloadRepositoriesPending: () => ({
      status: "pending",
      repositories: null,
    }),
    downloadRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
    downloadRepositoriesSucces: (_, { payload: repositories }) => ({
      status: "succes",
      repositories,
    }),
  },
});

export const {
  downloadRepositoriesPending,
  downloadRepositoriesError,
  downloadRepositoriesSucces,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;
export const selectRepositories = state => selectPersonalHomepageState(state).repositories;

export default personalHomepageSlice.reducer;