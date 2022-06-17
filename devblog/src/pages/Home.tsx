import React from 'react';
import Container from 'react-bootstrap/Container';
// Config

// Components
import HomeHeader from '../components/HomeHeader/HomeHeader';
import CardList from '../components/CardList/CardList';

/* Miscelanous components */
import Spinner  from '../components/Spinner/Spinner'

// Images
//import NoImage from '../images/placeholder.jpg';


const Home = () => {

    return (
        <>
            <HomeHeader />
                
            <CardList />
        </>
        

    );
}

export default Home;
