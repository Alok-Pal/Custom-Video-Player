import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Cards.css";
import PlayerPage from "../pages/PlayerPage";
import { Link } from "react-router-dom";


const Cards = ({ id, title, thumb, sources }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const dataToPass = sources;
  const encodedDataToPass = encodeURIComponent(dataToPass);
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <div
          className="divImgSize bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 overflow-hidden"
          style={{ maxWidth: "22.4rem" }}
        >
          {/* <a href="#"> */}

          <Link to={`/player/${encodedDataToPass}`}>
            <img
              src={thumb}
              alt={`Image`}
              className="imgSize object-cover h-48 w-96"
            />
          </Link>
          {/* </a> */}
        </div>
      </div>
    </>
  );
};

export default Cards;
