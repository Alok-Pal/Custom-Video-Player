import React from "react";

const SpeedDropdown = (props) => {
  const {
    toggleSpeedDropdown,
    showSpeedDropdown,
    handleSpeedChange,
    playbackSpeed,
  } = props;
  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  return (
    <div onClick={toggleSpeedDropdown} type="button">
      <svg
        className="w-5 h-4 pe-1 cursor-pointer"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 4 15"
        style={{ marginTop: "6px" }}
      >
        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      {showSpeedDropdown && (
        <div className="origin-top-right absolute bottom-12 right-2 mt-2 w-28 h-20 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-600">
          <div className="py-2">
            {speedOptions.map((speed) => (
              <div
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white ${
                  speed === playbackSpeed ? "font-bold" : ""
                }`}
              >
                {speed}x
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedDropdown;
