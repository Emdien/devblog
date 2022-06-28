import React from 'react';
// Config

// Components
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import CardList from '../../components/CardList/CardList';
import styles from './Home.module.scss';
import HomeController from './Home.controller';


const Home = () => {

    const { avatar } = HomeController();

    

    return (
        <>
            {avatar ? (
                <div className={styles.container}>
                    <HomeHeader avatar={avatar}/>
                    
                    <CardList />
                </div>
            ) : (
                <></>
            )}
            
        </>
        

    );
}

export default Home;
