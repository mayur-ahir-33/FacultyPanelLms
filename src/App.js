import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/faculty_components/Routing';

function App() {
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
