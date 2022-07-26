import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/aboutme' element={<></>} />
          <Route path='/entries/:slug' element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
