import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { mediaJSON } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../redux/action/fetchVideoAction";
import { selectMediaData, setMediaData } from "../redux/slice/mediaSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMediaData(mediaJSON.categories));
  }, [dispatch]);

  const mediaData = useSelector((state) => state.media.categories[0]?.videos);
  console.log("🚀 ~ HomePage ~ mediaData:", mediaData);

  return (
    <div>
      <Navbar />
      {mediaData ? <Cards media={mediaData} /> : ""}
    </div>
  );
};

export default HomePage;
