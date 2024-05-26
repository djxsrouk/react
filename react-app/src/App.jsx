import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import NotFoundError from "./pages/NotFoundError";
import TasksApp from "./components/TasksList/TasksApp";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Playground />}>
        <Route path="taskReducer" element={<TasksApp />} />
      </Route>
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}

export default App;
