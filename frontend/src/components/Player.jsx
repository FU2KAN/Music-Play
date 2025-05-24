import React, { useEffect, useState } from "react";
import SongList from "./SongList";
import VinylRecord from "./VinylRecord";
import PropTypes from "prop-types";
import { Images } from "lucide-react";

const Player = ({
  videoId,
  songs = [],
  onSelect,
  thumbnail,
  isPlaying,
  onPlay,
  onPause,
  mode,
  volume,
  onModeChange,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  showWatchMode,
}) => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const iframe = document.querySelector('iframe[title="YouTube player"]');
    if (!iframe || !videoId) return;

    const command = isPlaying ? "playVideo" : "pauseVideo";
    try {
      iframe.contentWindow.postMessage(
        `{"event":"command","func":"${command}","args":""}`,
        "*"
      );

      iframe.contentWindow.postMessage(
        `{"event":"command","func":"setVolume","args":[${volume}]}`,
        "*"
      );
    } catch (error) {
      console.error("YouTube iframe API error:", error);
    }
  }, [isPlaying, volume, videoId]);

  const handleWatchMode = () => {
    onModeChange("watch");
    setShowOverlay(false);
    onPlay();
  };

  const handleListenMode = () => {
    onModeChange("listen");
    setShowOverlay(true);
    onPlay();
  };

  return (
    <div className="mx-auto w-fit flex items-center justify-between p-6 bg-gradient-to-r rounded-3xl border-white/10 min-h-[300px]">
      <div className="relative w-64 h-72 mb-6 md:mb-0 md:mr-8">
        {/* YouTube iframe */}
        {videoId && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=${
              isPlaying ? 1 : 0
            }&controls=1`}
            title="YouTube player"
            className="absolute top-[200px] rounded-xl z-0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              zIndex: 2,
              width: "140%",
              height: "100%",
              marginRight: "-20%",
            }}
          ></iframe>
        )}

        {/* Video üzerindeki transparan arka plan */}
        {videoId && !showWatchMode && (
          <div
            className="video-background-overlay"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
            }}
          />
        )}

        {/* Şarkı seçildiğinde ve overlay gösterildiğinde gösterilen VinylRecord */}
        {videoId && showOverlay && (
          <div className="overlay-plak absolute inset-0 flex items-center justify-center z-30">
            <VinylRecord
              selectedVideo={videoId}
              isPlaying={isPlaying && mode === "listen"}
              thumbnail={thumbnail}
              variant="default"
            />
          </div>
        )}

        {/* Şarkı seçilmediğinde gösterilen VinylRecord */}
        {!videoId && (
          <div className="absolute bg-transparent p-2 rounded-xl z-0 flex items-center justify-center no-song-plak-container">
            <VinylRecord
              selectedVideo={null}
              isPlaying={false}
              variant="noSong"
            />
          </div>
        )}

        {/* Dinle/İzle butonları */}
        {videoId && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
            <button
              onClick={handleListenMode}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                mode === "listen"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              } shadow-md hover:scale-105 transition`}
            >
              Dinle
            </button>
            <button
              onClick={handleWatchMode}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                mode === "watch"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              } shadow-md hover:scale-105 transition`}
            >
              İzle
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 max-w-3xl text-center md:text-left">
        {/* BU SATIRI DEĞİŞTİRDİK */}
        <SongList songs={songs} onSelect={onSelect} />
      </div>
    </div>
  );
};

Player.propTypes = {
  videoId: PropTypes.string,
  songs: PropTypes.array,
  onSelect: PropTypes.func,
  thumbnail: PropTypes.string,
  isPlaying: PropTypes.bool,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  mode: PropTypes.string,
  volume: PropTypes.number,
  onModeChange: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
  showWatchMode: PropTypes.bool,
};

export default Player;
