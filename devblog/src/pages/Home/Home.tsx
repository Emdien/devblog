import React from 'react';
// Config

// Components
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import CardList from '../../components/CardList/CardList';
import styles from './Home.module.scss';
import HomeController from './Home.controller';
import SearchBar from '../../components/SearchBar/SearchBar';


const Home = () => {

    const { avatar, searchText, setSearchText, fetchStatus } = HomeController();
    
    return (
        <>
            {fetchStatus ? (
                <div className={styles.container}>
                    <HomeHeader avatar={avatar}/>
                    <SearchBar searchText={searchText} setSearchText={setSearchText} placeholder='Buscar entradas del blog'/>
                    <CardList filter={searchText}/>
                </div>
            ) : (
                <></>
            )}
            
        </>
        

    );
}

export default Home;
