import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Components: here are the components that App.js makes use of
import Home from './pages/Home/Home';
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