import React from "react";
import "./Column.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Cards from "./Cards";


const Column = ({ tasks }) => {
  console.log("🚀 ~ Column ~ tasks:", tasks);
  return (
    <div
      className="column bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 overflow-hidden"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
    >
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Cards
            key={task.id}
            id={task.id}
            title={task.title}
            thumb={task.thumb}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
