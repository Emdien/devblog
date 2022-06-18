import React from 'react';
// Config

// Components
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import CardList from '../../components/CardList/CardList';
import styles from './Home.module.scss';


const Home = () => {

    return (
        <>
            <HomeHeader />
                
            <CardList />
        </>
        

    );
}

export default Home;
