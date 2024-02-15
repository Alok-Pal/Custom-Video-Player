import React from "react";

const CustomSlider = ({ value, max, onChange ,color}) => {
  const percentage = (value / max) * 100;

  const handleMouseDown = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newValue = (clickX / rect.width) * max;
    onChange(newValue);
  };

  return (
    <>
      <div
        className="custom-slider"
        style={{
          background: "lightgrey",
          height: "8px",
          position: "relative",
          cursor: "pointer",
          borderRadius: "5px",
          overflow: "hidden",
          width: "99.5%",
          margin: "auto",
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className="slider-thumb"
          style={{ width: `${percentage}%`, height: "100%", background: `${color ? 'grey' : 'red'}` }}
        />
      </div>
    </>
  );
};

export default CustomSlider;
