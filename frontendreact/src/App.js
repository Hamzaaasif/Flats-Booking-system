import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './Routers/homeRouters'
import './index.css';
<<<<<<< HEAD
=======
import './home.css';
>>>>>>> 674943b633caf6360da8ff4939d66bb89b95a6bf
import Sidebar from './dashboard/sideBar'

const App = () => (
  <BrowserRouter>
  <Sidebar/>
    <MainRouter/>
  </BrowserRouter>
)

export default App;
