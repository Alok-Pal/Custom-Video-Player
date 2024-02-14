import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { mediaJSON } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../redux/action/fetchVideoAction";
import { selectMediaData, setMediaData } from "../redux/slice/mediaSlice";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Column from "../components/Column";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMediaData(mediaJSON.categories));
  }, [dispatch]);

  const mediaData = useSelector((state) => state.media.categories[0]?.videos);
  console.log("🚀 ~ HomePage ~ mediaData:", mediaData);

  const [tasks, setTasks] = useState([]);

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
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div>
      <Navbar />
      {/* {mediaData ? <Cards media={mediaData} /> : ""} */}

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
