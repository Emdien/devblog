import { combineReducers } from "@reduxjs/toolkit";
import { getBlogEntriesReducer } from "./blogEntries";
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    blogEntries: getBlogEntriesReducer
});

export default rootReducer;