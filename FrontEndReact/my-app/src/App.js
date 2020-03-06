import React,{Component} from 'react';
import axios from 'axios';
import MainRouter from './mainRouter'
import {BrowserRouter} from 'react-router-dom'


const App = () =>
(

<BrowserRouter>
<MainRouter />
  
</BrowserRouter>
);

export default App;
