import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "../components/Column/Column";
import { setMediaData } from "../redux/slice/mediaSlice";
import { mediaJSON } from "../utils/data";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMediaData(mediaJSON.categories));
  }, [dispatch]);

  const mediaData = useSelector((state) => state.media.categories[0]?.videos);
  useEffect(() => {
    if (mediaData !== undefined) {
      setTasks([...mediaData]);
    }
  }, [mediaData]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="mt-5">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default HomePage;
