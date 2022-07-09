import React from "react";
import { Link } from "react-router-dom";
import styles from './BlogCard.module.scss';
import placeholder from '../../../images/placeholder.jpg'


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
            <Link className={styles.content} to={"/entries/"+ entryData.data.slug}>
                <div className={styles.thumbnailContainer}>
                    {
                        // NOTE: Important to note that ideally the banner image is 300x150px to not reescale
                    }
                    <img className={styles.thumbnail} src={placeholder} alt="" />
                </div>
                <div className={styles.entryInfo}>
                    <div className={styles.infoContent}>
                        <h2 className={styles.entryTitle}>{entryData.data.title}</h2>
                        <h3 className={styles.entryDate}>{entryData.data.date}</h3>
                        <p className={styles.entryIntro}>{entryData.data.intro}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;