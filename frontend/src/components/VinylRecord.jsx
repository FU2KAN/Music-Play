import React from "react";

const VinylRecord = ({ selectedVideo, isPlaying }) => {
  const videoThumbnail = selectedVideo
    ? `https://img.youtube.com/vi/${selectedVideo}/hqdefault.jpg`
    : "/images/placeholder.png";

  return (
    <div className="relative flex justify-center items-center">
      <div className="vinyl">
        <div className={`vinyl-circle ${isPlaying ? "spinning" : ""}`}>
          <div className="vinyl-glare"></div>
          <div className="vinyl-center">
            <img
              src={videoThumbnail}
              alt={selectedVideo ? "Now Playing" : "Bekleniyor..."}
              className="vinyl-thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinylRecord;
