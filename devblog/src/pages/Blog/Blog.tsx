import React from 'react';
import BlogController from './Blog.controller';
import styles from './Blog.module.scss';

const Blog = () => {

    const { blogContent, blogImg, fetchStatus } = BlogController();

    return (
        <>
            {fetchStatus ? (
                <div className={styles.container}>
                    <img className={styles.banner} src={blogImg} alt='Blog entry banner'/> 
                    <div className={styles.content} dangerouslySetInnerHTML={blogContent}/>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default Blog