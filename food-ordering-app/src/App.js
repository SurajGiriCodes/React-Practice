import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/menu/:restaurantId" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
