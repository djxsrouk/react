import React from "react";
import TasksList from "../components/TasksList/TasksApp";
import { Outlet, useParams } from "react-router-dom";

function Playground() {
  return (
    <>
      <h1>Playground</h1>
      <Outlet />
    </>
  );
}
export default Playground;
