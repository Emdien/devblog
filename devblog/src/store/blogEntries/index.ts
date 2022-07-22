import { combineReducers } from "@reduxjs/toolkit"; 
import { getBlogEntriesSlice } from "./getBlogEntries.slice";

export const getBlogEntriesReducer = combineReducers({
    blogEntries: getBlogEntriesSlice.reducer
});

export const getBlogEntriesActions = {
    ...getBlogEntriesSlice.actions
}