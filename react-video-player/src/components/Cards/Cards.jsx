// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Cards.css";

// const Cards = ({ id, title, thumb, sources }) => {
//   const navigate = useNavigate();
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id });
//   const dataToPass = sources;
//   const encodedDataToPass = encodeURIComponent(dataToPass);
//   const style = {
//     transition,
//     transform: CSS.Transform.toString(transform),
//   };

//   return (
//     <>
//       <div
//         ref={setNodeRef}
//         style={style}
//         {...attributes}
//         {...listeners}
//         onClick={() => {
//           navigate(`/player/${encodedDataToPass}`);
//         }}
//       >
//         <div
//           className="divImgSize bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 overflow-hidden"
//           style={{ maxWidth: "22.4rem" }}
//         >
//           <img
//             src={thumb}
//             alt={""}
//             className="imgSize object-cover h-48 w-96"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import { useSelector } from "react-redux";

const Cards = ({ id, title, thumb, sources }) => {
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const searchQuery = useSelector((state) => state.search);
  const dataToPass = sources;
  const encodedDataToPass = encodeURIComponent(dataToPass);
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  // Filtering based on the search query
  const isCardVisible = title.toLowerCase().includes(searchQuery.toLowerCase());

  if (!isCardVisible) {
    return null; // If the card does not match the search query, don't render it
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onClick={() => {
          navigate(`/player/${encodedDataToPass}`);
        }}
      >
        <div
          className="divImgSize bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 overflow-hidden"
          style={{ maxWidth: "22.4rem" }}
        >
          <img
            src={thumb}
            alt={""}
            className="imgSize object-cover h-48 w-96"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
