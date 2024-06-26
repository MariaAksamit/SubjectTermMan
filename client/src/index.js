import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./AuthProvider";
import { SubjProvider } from "./SubjProvider";
import App from './App';
import SubjectR from "./routes/SubjectR";
import SubjDetailR from "./routes/SubjDetailR";
import StudentR from "./routes/StudentR";
import HomeR from "./routes/HomeR";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SubjProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="" element={<HomeR/>} />
              <Route path="/home" element={<HomeR/>} />
              <Route path="/student" element={<StudentR/>} />
              <Route path="/subject" element={<SubjectR/>} />
              <Route path="/subjDetail/:id" element={<SubjDetailR/>} />
            </Route>
          </Routes>
       </Router>
      </SubjProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();