import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PageListRestaurant from './components/PageListRestaurant';

const Home = () => <h1>Home</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>NotFoundPage</h1>

function App() {
  return (
    <div >
      <Header>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ListRestaurant" component={PageListRestaurant} />
        <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
  )
}

export default App
