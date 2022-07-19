
import matter from "gray-matter";
import { useState } from "react";
import { BlogData } from "./BlogCard/BlogCard";
window.Buffer = window.Buffer || require("buffer").Buffer;


const CardListController = () => {

    const files = ['mockEntry.md', 'mockEntry2.md', 'mockEntry.md', 'mockEntry2.md', ];

    const [ entries, setEntries] = useState<BlogData[]>([])

    

    const getMarkdownContents = () => {
        
        console.log('loading')

        setEntries([])

        Promise.all(files.map((file) => {
            return import(`../../entries/${file}`)
            .then(importedFile => {
                return fetch(importedFile.default)
            })
            .then(res => res.text())
            .then(res => matter(res).data)
            .then(res => setEntries((prev) => [...prev, res as BlogData]))
            .catch(err => console.log(err))
        }))

    }

    const getMatter = (content: string) => {
        
        

    }
    

    return { getMarkdownContents, getMatter, entries, setEntries }
}

export default CardListController;