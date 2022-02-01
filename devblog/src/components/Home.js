import React from 'react';
import Container from 'react-bootstrap/Container';
// Config

// Components

/* HomeHeader corresponds to a card that spans about 1/3 of height on desktop 
 * and the full page on mobile displays. Shows a picture of the author, a little bit of information
 * and has a textbox to add in your email to subscribe to the newsletter to know when a new post is up
 */
import HomeHeader from './HomeHeader';

/* BlogCard corresponds to a card that contains the title and a few lines of the corresponding blog entry 
 * aswell as a thumbnail, to give a brief summary of the contents of the blog entry.
 */
//import BlogCard from './BlogCard'; I dont need this here. Rather have a component that wraps it

import CardList from './CardList';

/* Miscelanous components */
import Spinner from './Spinner';

// Hooks

// Images
import NoImage from '../images/placeholder.jpg';

// Main Component
/*const Home = () => {

    return (
        <>
            <HomeHeader />
            
            <SearchBar />

            <CardList />

        </>
    );
}*/

const Home = () => {

    return (
        <>
            <HomeHeader className='mb-5'/>
                
            <CardList />
        </>
        

    );
}

export default Home;

