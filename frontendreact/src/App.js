import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './Routers/homeRouters'
import './index.css';
import Sidebar from './dashboard/sideBar'

const App = () => (
  <BrowserRouter>
  <Sidebar/>
    <MainRouter/>
  </BrowserRouter>
)

export default App;
