
import matter from "gray-matter";
import { useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogEntriesActions } from "../../store/blogEntries";
import { BlogEntry } from "../../store/blogEntries/getBlogEntries.slice";
import { RootState } from "../../store/rootReducer";
window.Buffer = window.Buffer || require("buffer").Buffer;


const CardListController = () => {
    const dispatch = useDispatch();


    const entrySet = useSelector(
        (state: RootState) => state.blogEntries.blogEntries.entries
    )

    const fetchStatus = useSelector(
        (state: RootState) => state.blogEntries.blogEntries.fetched
    )

    const loadEntries = useRef(true);
    useEffect(() => {
        const files = ['mockEntry.md', 'mockEntry2.md', 'mockEntry.md', 'mockEntry2.md', ];
        if(loadEntries.current && !fetchStatus){
            Promise.all(files.map((file) => {

                const slug = file.split('.md')[0]

                return import(`../../entries/${slug}/${file}`)
                .then(importedFile => {
                    return fetch(importedFile.default)
                })
                .then(res => res.text())
                .then(res => matter(res).data)
                .then(res => dispatch(getBlogEntriesActions.addEntry(res as BlogEntry)))
                .catch(err => console.log(err))
            }))
            loadEntries.current = false
            dispatch(getBlogEntriesActions.setFetched())

        }
    }, [dispatch, fetchStatus])

    const filterEntry = (entry: BlogEntry, filter: string) => {
        if (entry.title.toLowerCase().includes(filter.toLowerCase())) return true;
        return false
    }

    return { entrySet, filterEntry }
}

export default CardListController;