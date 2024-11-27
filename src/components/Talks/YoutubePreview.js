import React from "react";

const YouTubePreview = () => {
  const videoUrl = "https://www.youtube.com/embed/ie30P4AMFBg"; // Embed URL for the video

  return (
    <div style={{ position: "relative", paddingBottom: "60%", height: 0 }}>
      <iframe
        src={videoUrl}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Preview"
      ></iframe>
    </div>
  );
};

export default YouTubePreview;
