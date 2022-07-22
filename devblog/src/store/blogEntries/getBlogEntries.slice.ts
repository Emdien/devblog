import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlogEntry {
    data: {
        slug: string,
        title: string,
        intro: string,
        date: string,
        img: string,
    },
    content: string
}

export interface BlogEntries {
    entries: {[slug: string]: BlogEntry}
}

export const getBlogEntriesSlice = createSlice({
    name: 'blog-entries',
    initialState: {} as BlogEntries,
    reducers: {
        addEntry: (state, action: PayloadAction<{entry: BlogEntry}>) => {
            state.entries[action.payload.entry.data.slug] = action.payload.entry
        }
    }
});