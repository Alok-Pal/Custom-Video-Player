import React from "react";
import "./Column.css";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import Task from "./Task";
import Cards from "./Cards";
const Column = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Cards  key={task.id} id={task.id} title={task.title} thumb={task.thumb}/>
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
