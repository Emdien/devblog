import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import styles from './CardList.module.scss';


interface CardListProps {
    filter: string;
}

const data = {

    data: {
        slug: 'entry',
        title: 'Making off del devblog',
        intro: '¿Que tecnologías se han utilizado? ¿Qué pasos se han seguido para desarrollar la página? ¿Qué problemas me he enfrentado?',
        date: '09 Jul 2022',
        img: 'src de la imagen',
        link: 'enlace a la entrada'
    }, 
    content: 'Contenido'
}

const CardList = ({ filter }: CardListProps) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Entradas del blog</h2>

            {filter}

            {
                // NOTES: Here it should map an array of blog cards based on filtered titles
                // If there is not filter on the searchbar, show pages of 10 cards each or something
                // Need to implement pagination
            }

            <div className={styles.cards}>
                <BlogCard entryData={data}/>
                <BlogCard entryData={data}/>
                <BlogCard entryData={data}/>
                <BlogCard entryData={data}/>
            </div>
        </div>
    );
};

export default CardList;