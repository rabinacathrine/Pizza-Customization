import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import Customize from './Components/Customize'
import { useEffect, useState } from 'react';
import Checkout from './Components/Checkout';
function App() {
  const [ingredients, setIngredients]=useState({
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false,
  });

  useEffect(()=>{
    const data = localStorage.getItem("ingredients");
    // console.log(data)
    if(data){
    setIngredients(JSON.parse(data))
    }
  },[]);
  return (
    <div className="App">
            <Header></Header>
          <Router>
            <Switch>
              <Route exact path="/">
                <h1>Customization</h1>
                <Customize ingredients={ingredients} setIngredients={setIngredients}></Customize>
              </Route>
              <Route path="/checkout">
                <h1>Checkout</h1>
               <Checkout ingredients={ingredients}></Checkout>
              </Route>
            </Switch>
          </Router>
    <h1>Hey react here i come</h1>
    </div>
  );
}

export default App;
