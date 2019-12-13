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
                <Route exact path={ process.env.PUBLIC_URL + "/" } component={Home} />
                <Route exact path={ process.env.PUBLIC_URL + "/About" } component={About} />
                <Route exact path={ process.env.PUBLIC_URL + "/Portfolio" } component={Portfolio} />
                <Route exact path={ process.env.PUBLIC_URL + "/Blog" } component={Blog} />
                <Route exact path={ process.env.PUBLIC_URL + "/Blog/:id" } component={BlogPost} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
