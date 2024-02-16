import React from "react";

const CustomSlider = ({ value, max, onChange, color, size }) => {
  console.log("🚀 ~ CustomSlider ~ size:", size);
  const percentage = (value / max) * 100;

  const handleMouseDown = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.pageX - rect.left;
    const seekBarWidth = rect.width;
    const percentage = clickX / seekBarWidth;

    const newValue = percentage * max;

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
          width: `${size !== "undefined" && size}`,
          margin: `${size === "98.5%" ? "auto" : ""}`,
          marginTop: `${size === "27%" && "7px"}`,
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className="slider-thumb"
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: `${color ? "grey" : "red"}`,
          }}
        />
      </div>
    </>
  );
};

export default CustomSlider;
