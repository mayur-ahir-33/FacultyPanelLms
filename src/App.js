import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './components/faculty_components/faculty.css'
// import Routing from './components/faculty_components/Routing';
import FacultyMainPage from './components/faculty_components/FacultyMainPage';

function App() {
  return (
    <div className="App">
      <FacultyMainPage/>
    </div>
  );
}

export default App;
