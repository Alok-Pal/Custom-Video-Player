import React from "react";

const Cards = (props) => {
  const { media } = props;
  console.log("🚀 ~ Cards ~ media:", media);
  return (
    <>
      {/* <div className="flex flex-wrap  mt-5 gap-8 ps-9">
        <div className="max-w-xl  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://peach.blender.org/wp-content/uploads/bbb-splash.thumbnail.png"
              alt=""
            />
          </a>
        </div>
      </div> */}
      <div className="flex flex-wrap">
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
      </div>
    </>
  );
};

export default Cards;
