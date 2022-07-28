import matter from "gray-matter";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
const BlogController = () => {

    const { slug } = useParams();
    const [ blogContent, setBlogContent ] = useState({__html: ''})
    const [ blogImg, setBlogImg ] = useState('');
    const [ fetchStatus, setFetchStatus ] = useState(false)

    useEffect(() => {
        const file = `${slug}.md`;

        Promise.all([
            import(`../../entries/${slug}/${file}`)
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
                .catch(err => console.log(err)),

                import(`../../entries/${slug}/${slug}_banner.jpg`)
                    .then(importedImage => {
                        return fetch(importedImage.default)
                    })
                    .then(res => res.url)
                    .then(res => {
                        setBlogImg(res)
                    })
                    .catch(err => console.log(err))
        ]).then(() => setFetchStatus(true))

    }, [slug])

    return { blogContent, blogImg, fetchStatus }
}

export default BlogController;