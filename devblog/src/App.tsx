import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Components: here are the components that App.js makes use of
import Header from './components/Header/Header';
import Home from './pages/Home';
//import BlogEntry from './components/BlogEntry';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer'; 

// Styles. TODO: Change from styled components to SASS
import { GlobalStyle } from './GlobalStyle';
import Layout from './layout/Layout';


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    )
};

export default App;