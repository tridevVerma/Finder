import React from "react";
import ReactPlayer from "react-player";

const Video = ({ results }) => {
  let videoLinks = [];
  if (results) {
    let arr = results?.map((video) => {
      return video?.additional_links?.[0].href;
    });
    arr = arr.filter((link) => link !== undefined);
    videoLinks = arr.filter((link) => {
      if (ReactPlayer.canPlay(link)) {
        return true;
      }
      return false;
    });
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 my-5">
      {videoLinks?.map((link, index) => {
        return (
          <div
            key={index}
            className="flex justify-center items-center dark:border-2 dark:border-gray-200"
          >
            <ReactPlayer url={link} controls width="355px" height="200px" />
          </div>
        );
      })}
    </div>
  );
};

export default Video;
