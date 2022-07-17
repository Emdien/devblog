
import matter from "gray-matter";
import { useState } from "react";


const CardListController = () => {

    const files = ['mockEntry.md', 'mockEntry2.md'];

    const [ entries, setEntries] = useState([''])


    const getMarkdownContents = () => {
        
        console.log('loading')

        setEntries([])

        Promise.all(files.map((file) => {
            import(`../../entries/${file}`)
            .then(importedFile => {
                return fetch(importedFile.default)
            })
            .then(res => res.text())
            .then(res => setEntries((prev) => [...prev, res]))
            .catch(err => console.log(err))
        }))

    }

    const getMatter = () => {
        // Extract gray matter

    }
    

    return { getMarkdownContents, getMatter, entries, setEntries }
}

export default CardListController;