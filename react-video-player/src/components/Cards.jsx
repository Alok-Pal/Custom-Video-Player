import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Cards = ({ id, title, thumb }) => {
  // const { media } = props;
  // console.log("🚀 ~ Cards ~ media:", media);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      {/* <div className="flex flex-wrap">
        {media.map((url, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2"
          >
            <a href="#">
              <img className="rounded-t-lg" src={url} alt={`Image ${index}`} />
            </a>
          </div>
        ))}
      </div> */}

      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="flex flex-wrap"
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
          {title}
          <a href="#">
            <img className="rounded-t-lg" src={thumb} alt={`Image`} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
