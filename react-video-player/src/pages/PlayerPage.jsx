import React from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { useParams } from "react-router-dom";

const PlayerPage = () => {
  const { dataToPass } = useParams();
  return (
    <div className="flex justify-center w-full h-full ">
      <div
        className=""
        style={{ width: "65%", height: "100%", alignItems: "center" }}
      >
        <VideoPlayer sources={dataToPass} />
      </div>
    </div>
  );
};

export default PlayerPage;
