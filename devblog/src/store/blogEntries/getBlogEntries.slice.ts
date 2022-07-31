import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlogEntry {
    slug: string,
    title: string,
    intro: string,
    date: string,
    img: string,
}

export interface BlogEntries {
    fetched: boolean,
    entries: BlogEntry[]
}

export const getBlogEntriesSlice = createSlice({
    name: 'blog-entries',
    initialState: {fetched: false, entries: []} as BlogEntries,
    reducers: {
        addEntry: (state, action: PayloadAction<BlogEntry>) => {
            state.entries.push(action.payload)
        },
        setFetched: (state) => {
            state.fetched = true
        },
        sortEntries: (state) => {
            state.entries.sort((a, b) => {
                let dateA = new Date(a.date).getTime();
                let dateB = new Date(b.date).getTime();
                return dateB - dateA
            })
        }
    }
});