import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import CategoryList from "./components/CategoryList";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
  );
}

export default App;
