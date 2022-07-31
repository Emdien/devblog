import React from "react";
import BlogCard, { BlogData } from "./BlogCard/BlogCard";
import CardListController from "./CardList.controller";
import styles from './CardList.module.scss';



interface CardListProps {
    filter: string;
}

const CardList = ({ filter }: CardListProps) => {

    const { entrySet, filterEntry } = CardListController();   

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Entradas del blog</h2>
            {
                // NOTES: Here it should map an array of blog cards based on filtered titles
                // If there is not filter on the searchbar, show pages of 10 cards each or something
                // Need to implement pagination
            }

            <div className={styles.cards}>
            { entrySet ?
                entrySet.filter(entry => filterEntry(entry, filter))
                .map(entry => (
                    <BlogCard entryData={entry as BlogData} key={entry.slug + entry.date}/>
                ))
            :
                    <></>
            }
            </div>

        </div>
    );
};

export default CardList;