import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Router} from 'react-router-dom';

// Components: here are the components that App.js makes use of
import Header from './components/Header';
import Home from './components/Home';
import BlogEntry from './components/BlogEntry';
import NotFound from './components/NotFound';

// Styles: here are the styles that App.js makes use of. Global styles.
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:blogEntry' element={<BlogEntry />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </Router>
)

export default App;
