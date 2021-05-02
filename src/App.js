import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      {/*Instead of using the About and Shop components directly, we will use route*/}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/shop" exact component={Shop}></Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => (
    <div>
      <h1>HomePage</h1>
    </div>
  )

export default App;
