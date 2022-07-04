import React from "react";
import { Link } from "react-router-dom";
import styles from './BlogCard.module.scss';


export interface BlogData {
    data: {
        slug: string,
        title: string,
        intro: string,
        date: string,
        img: string,
    },
    content: string
}
interface BlogCardProps {
    entryData: BlogData
}

const BlogCard = ({ entryData }: BlogCardProps) => {
    return (
        <div className={styles.container}>
            <Link to={"/entries/"+ entryData.data.slug}>
                <div className={styles.thumbnailContainer}>
                    <img className={styles.thumbnail} src="" alt="" />
                </div>
                <div className={styles.entryInfo}>
                    <h3 className={styles.entryTitle}>{entryData.data.title}</h3>
                    <p className={styles.entryDate}>{entryData.data.date}</p>
                    <p className={styles.entryIntro}>{entryData.data.intro}</p>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;