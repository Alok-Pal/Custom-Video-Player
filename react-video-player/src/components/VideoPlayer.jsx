import React, { useState, useRef, useEffect } from "react";
import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineFullscreen } from "react-icons/md";
import { FaVolumeMute } from "react-icons/fa";
import { IoVolumeHighSharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Loader from "./Loader";
import CustomSlider from "./CustomSlider";
import "./VideoPlayer.css";

const VideoPlayer = ({ sources }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMute, setIsMute] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (currentTime === duration && duration !== 0) {
      setIsPlaying(false);
    }
  }, [currentTime, duration]);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    const timerId = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timerId);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleDurationChange = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (value) => {
    console.log("🚀 ~ handleSeek ~ value:", value);
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleVideoClick = () => {
    setShowControls(true);
    // Pause the video when the player area is clicked
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    const timerId = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timerId);
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      // Entered full-screen mode
      setIsFullScreen(true);
    } else {
      // Exited full-screen mode
      setIsFullScreen(false);
    }
    if (!isFullScreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(isFullScreen);
  };
  useEffect(() => {
    const fullscreenChangeHandler = () => {
      if (document.fullscreenElement) {
        console.log(
          "🚀 ~ fullscreenChangeHandler ~ document.fullscreenElement:",
          document.fullscreenElement
        );
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", fullscreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  useEffect(() => {
    if (isFullScreen === false) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isFullScreen]);

  const handleVolumeChange = (value) => {
    videoRef.current.volume = value;
    setVolume(value);
  };

  const handleVolumeIncrease = () => {
    const newVolume = Math.min(volume + 0.1, 1); // Increase volume by 0.1, but not exceeding 1
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleVolumeDecrease = () => {
    const newVolume = Math.max(volume - 0.1, 0); // Decrease volume by 0.1, but not going below 0
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleMute = () => {
    setIsMute(!isMute);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-1 relative mainMediaDiv ">
      <video
        muted={isMute}
        autoPlay
        onClick={handleVideoClick}
        ref={videoRef}
        src={sources}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onCanPlayThrough={() => {
          setIsLoading(false);
        }}
        onWaiting={() => {
          setIsLoading(true);
        }}
        style={{ width: "100rem" }}
      />
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handlePlayPause}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            display: `${showControls ? "block" : "none"}`,
          }}
        >
          {/* Play/Pause button */}
          {isPlaying ? (
            <IoPauseSharp style={{ fontSize: "36px", color: "white" }} />
          ) : (
            <IoPlaySharp style={{ fontSize: "36px", color: "white" }} />
          )}
        </button>
      </div>
      <div className="mt-2">
        <div>
          <CustomSlider
            value={currentTime}
            max={duration}
            onChange={handleSeek}
            size={"98.5%"}
          />
        </div>
      </div>
      <div className="pt-1 ps-2 flex justify-between">
        <div className="flex">
          <div className="pt-1" onClick={handlePlayPause}>
            {isPlaying ? (
              <IoPauseSharp className="sizeDiv" style={{ fontSize: "26px" }} />
            ) : (
              <IoPlaySharp className="sizeDiv" style={{ fontSize: "25px" }} />
            )}
          </div>
          <div
            className={`${screenWidth <= 610 ? "ps-1" : "ps-3 pt-1"} sizeDiv`}
            style={{ fontSize: "16px", userSelect: "none" }}
          >
            {`${formatTime(currentTime)} / ${formatTime(duration)}`}
          </div>
          <div
            className="pt-1 ps-4 cursor-pointer sizeDiv"
            onClick={handleMute}
            style={{ fontSize: "24px", color: "black" }}
          >
            {isMute ? <FaVolumeMute /> : <IoVolumeHighSharp />}
          </div>
          <div
            className="ps-3 flex cursor-pointer volumeDiv "
            style={{ width: "139px" }}
          >
            <FaMinus
              className={`pe-2 text-3xl pt-1 sizePlusMinus `}
              onClick={handleVolumeDecrease}
            />
            <CustomSlider
              value={volume}
              max={1}
              step={0.001}
              onChange={handleVolumeChange}
              color={"grey"}
              size={`${screenWidth <= 610 ? "27%" : "98.5%"}`}
            />
            <FaPlus
              className={`ps-2 text-3xl pt-1 sizePlusMinus`}
              onClick={handleVolumeIncrease}
            />
          </div>
        </div>
        <div className="">
          <div
            onClick={handleFullScreenToggle}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {!isFullScreen && (
              <MdOutlineFullscreen
                className="pe-2 sizeDivFullscreen"
                style={{ fontSize: "30px", color: "black" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

export default VideoPlayer;
