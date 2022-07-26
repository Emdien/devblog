import matter from "gray-matter";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogEntry } from "../../store/blogEntries/getBlogEntries.slice";

 
const BlogController = () => {

    const { slug } = useParams();
    const [ blogContent, setBlogContent ] = useState({__html: ''})
    const [ blogImg, setBlogImg ] = useState('');

    useEffect(() => {
        const file = `${slug}.md`;
        import(`../../entries/${file}`)
            .then(importedFile => {
                return fetch(importedFile.default)
            })
            .then(res => res.text())
            .then(res => matter(res))
            .then(res => {
                setBlogContent({
                    __html: marked.parse(res.content)
                });
            })
            .catch(err => console.log(err))

        import(`../../images/${slug}_banner.jpg`)
            .then(importedImage => {
                return fetch(importedImage.default)
            })
            .then(res => res.url)
            .then(res => {
                setBlogImg(res)
            })
            .catch(err => console.log(err))
    }, [slug])

    return { blogContent, blogImg }
}

export default BlogController;