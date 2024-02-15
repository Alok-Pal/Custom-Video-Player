import React, { useRef, useState } from "react";
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
        onTimeUpdate={onTimeUpdate}
      ></video>

      {/* Over the top */}

      <div className="absolute left-0 right-0 top-0 w-full h-full flex flex-col justify-end ">
        <div>{isLoading ? "please wait..." : ""}</div>

        {/* ProgressBar */}
        <div className="bg-white h-2 mb-4 mx-auto" style={{ width: "96%" }}>
          <div
            className="progressBarInner bg-red-600 w-1/2 h-full "
            style={{
              width: "50%",
              animationPlayState: isPlaying ? "running" : "paused",
              animationDuration: isLoading
                ? `0s`
                : `${videoRef.current.duration}s`,
            }}
          ></div>
        </div>

        {/* video controller */}
        <div className="flex ps-2 justify-between" style={{ width: "98%" }}>
          <button onClick={playVideo} className="ps-4 text-white">
            {isPlaying ? "Pause" : "Play"}
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
  const oneSecond = 90;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration - (minutes * oneSecond));

  const formatedtime = `${minutes}:${seconds}`;
  return formatedtime;
};

export default VideoPlayer;
