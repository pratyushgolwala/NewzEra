import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
            <Route path="/general" element={<News key="general" pageSize={8} category="general" country="us" />} />
            <Route path="/sports" element={<News key="sports" pageSize={8} category="sports" country="us" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={8} category="entertainment" country="us" />} />
            <Route path="/business" element={<News key="business" pageSize={8} category="business" country="us" />} />
            <Route path="/science" element={<News key="science" country="us" />} />
            <Route path="/technology" element={<News key="technology" pageSize={8} category="technology" country="us" />} />
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App


