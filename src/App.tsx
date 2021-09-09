import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import * as Constant from './constants'

import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {AllRecipes} from "./components/Pages/AllRecipes";
import {AddRecipe} from "./components/AddRecipe/AddRecipe";
import {VeganRecipes} from "./components/Pages/VeganRecipes";
import {NonVeganRecipes} from "./components/Pages/NonVeganRecipes";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Menu/>
      <Switch>
        <Route path={Constant.PATH_ALL_RECIPES} component={AllRecipes}/>
        <Route path={Constant.PATH_V_RECIPES} component={VeganRecipes}/>
        <Route path={Constant.PATH_NV_RECIPES} component={NonVeganRecipes}/>
        <Route path={Constant.PATH_ADD_NEW_RECIPE} component={AddRecipe}/>
        <Route path="/" component={AllRecipes}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
