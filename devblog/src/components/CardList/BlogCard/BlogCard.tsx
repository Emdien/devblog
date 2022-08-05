import React from "react";
import { Link } from "react-router-dom";
import styles from './BlogCard.module.scss';
import green_poly from '../../../images/green_poly.png'
import blue_poly from '../../../images/blue_poly.png'
import yellow_poly from '../../../images/yellow_poly.png'


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


const banners: {[key: string]: string} = {
    'green': green_poly,
    'blue': blue_poly,
    'yellow': yellow_poly
}

const BlogCard = ({ entryData }: BlogCardProps) => {
    return (
        <div className={styles.container}>
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
        </div>
    );
};

export default BlogCard;