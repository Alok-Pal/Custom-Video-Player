import React, { useRef, useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import "./VideoPlayer.css";

const VideoPlayer = ({ sources }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const videoRef = useRef(null);

  const playVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((currentPlayStatus) => !currentPlayStatus);
  };

  const onTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div className="flex justify-center mt-4 relative">
      <video
        ref={videoRef}
        src={sources}
        style={{ width: "98%", height: "60%" }}
        className=""
        onClick={playVideo}
        onCanPlayThrough={() => {
          setVideoDuration(videoRef.current.duration);
          setIsLoading(false);
        }}
        onWaiting={() => {
          setIsLoading(true);
        }}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
        }}
      ></video>

      {/* Over the top */}

      <div className="absolute left-0 right-0 top-0 w-full h-full flex flex-col justify-end ">
        <div>{isLoading ? "please wait..." : ""}</div>

        {/* ProgressBar */}
        <div
          className="bg-white h-2 mb-3 mx-auto rounded-md overflow-hidden"
          style={{ width: "96%" }}
        >
          <div
            className={` bg-red-600  h-full  ${
              currentTime === videoDuration ? "" : "progressBarInner"
            }`}
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
              animationDuration: isLoading
                ? `0s`
                : `${videoRef.current.duration}s`,
            }}
          ></div>
        </div>

        {/* video controller */}
        <div className="flex  mb-2 justify-between" style={{ width: "98%" }}>
          <button onClick={playVideo} className="ps-4 text-white">
            {isPlaying ? (
              <IoPauseSharp style={{ fontSize: "26px" }} />
            ) : (
              <IoPlaySharp style={{ fontSize: "26px" }} />
            )}
          </button>

          <span className=" text-white">
            {formatTime(currentTime)}/{formatTime(videoDuration)}
          </span>
        </div>
      </div>
    </div>
  );
};

const formatTime = (duration) => {
  const oneSecond = 60; // Change to 60 seconds per minute
  const minutes = Math.floor(duration / oneSecond);
  const seconds = Math.floor(duration % oneSecond);

  const formattedTime = `${padTen(minutes)}:${padTen(seconds)}`;
  return formattedTime;
};
const padTen = (num) => (num < 10 ? `0${num}` : `${num}`);

export default VideoPlayer;
