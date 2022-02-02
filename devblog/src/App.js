import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components: here are the components that App.js makes use of
import Header from './components/Header';
import Home from './components/Home';
import BlogEntry from './components/BlogEntry';
import NotFound from './components/NotFound';
import Footer from './components/Footer'

// Styles: here are the styles that App.js makes use of. Global styles.
import { GlobalStyle } from './GlobalStyle';

/*const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:blogEntry' element={<BlogEntry />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </Router>
)*/

const App = () => (
  <Router>
    <div className='main-content d-flex flex-column min-vh-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    <Footer />
    <GlobalStyle />
  </Router>
)


export default App;
