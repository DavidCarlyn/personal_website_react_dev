import React from 'react';
import './App.css';

import {
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Portfolio from './pages/Portfolio/Portfolio.js';
import Blog from './pages/Blog/Blog.js';
import BlogPost from './pages/BlogPost/BlogPost.js';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/Blog/:id" component={BlogPost} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
