import React from "react";
import BlogCard, { BlogData } from "./BlogCard/BlogCard";
import CardListController from "./CardList.controller";
import styles from './CardList.module.scss';
import { motion, AnimatePresence } from 'framer-motion'



interface CardListProps {
    filter: string;
}

const CardList = ({ filter }: CardListProps) => {

    const { entrySet, filterEntry } = CardListController();   

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Entradas del blog</h2>
            <motion.div layout className={styles.cards}>
                <AnimatePresence>
                    { entrySet ?
                        entrySet.filter(entry => filterEntry(entry, filter))
                        .map(entry => (
                            <BlogCard entryData={entry as BlogData} key={entry.slug + entry.date}/>
                        ))
                    :
                            <></>
                    }
                </AnimatePresence>
            </motion.div>

        </div>
    );
};

export default CardList;