import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import TaskList from './pages/TaskList';
import ExpenseTracker from './pages/ExpenseTracker';
import PrivateRoute from './components/PrivateRoute'; // Ensure PrivateRoute is updated for v6
import NavigationBar from './components/NavigationBar';
import SFooterF from './components/SFooterF';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <TaskList />
              </PrivateRoute>
            }
          />
          <Route
            path="/expenses"
            element={
              <PrivateRoute>
                <ExpenseTracker />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <SFooterF />
    </Router>
  );
}

export default App;
