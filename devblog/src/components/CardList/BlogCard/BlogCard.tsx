import React from "react";
import { Link } from "react-router-dom";
import BlogCardController from "./BlogCard.controller";
import styles from './BlogCard.module.scss';
import { motion } from 'framer-motion'


export interface BlogData {
    slug: string,
    title: string,
    intro: string,
    date: string,
    img: string,
}
interface BlogCardProps {
    entryData: BlogData
}



const BlogCard = ({ entryData }: BlogCardProps) => {

    const { banners } = BlogCardController();

    return (
        <motion.div layout
         className={styles.container}
         animate={{ opacity: 1}}
         initial={{ opacity: 0}}
         exit={{ opacity: 0}}
         transition={{ duration: 0.3 }}
         >
            <Link className={styles.content} to={"/entries/"+ entryData.slug}>
                <div className={styles.thumbnailContainer}>
                    <img className={styles.thumbnail} src={banners[entryData.img]} alt="entry banner" />
                </div>
                <div className={styles.entryInfo}>
                    <div className={styles.infoContent}>
                        <h2 className={styles.entryTitle}>{entryData.title}</h2>
                        <h3 className={styles.entryDate}>{new Date(entryData.date).toLocaleDateString('en-GB', {day: '2-digit' ,month: 'short', year: 'numeric'})}</h3>
                        <p className={styles.entryIntro}>{entryData.intro}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;