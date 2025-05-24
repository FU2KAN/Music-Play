import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import Player from "./components/Player";
import "./index.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState("listen");
  const [showWatchMode, setShowWatchMode] = useState(false); // Video görünürlüğünü kontrol eder
  const [volume, setVolume] = useState(50);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  // Şarkı seçme fonksiyonu
  const handleSelectVideo = (videoId, index) => {
    setSelectedVideo(videoId);
    setCurrentSongIndex(index);
    setIsPlaying(true);
    setMode("listen"); // Varsayılan olarak dinle moduna geç
    setShowWatchMode(false); // Şarkı seçildiğinde video görünmez
  };

  // Mod değiştirme fonksiyonu - Önemli değişiklik burada
  const handleModeChange = (newMode) => {
    setMode(newMode);
    // watch modunda video görünür, listen modunda görünmez
    setShowWatchMode(newMode === "watch");
    setIsPlaying(true); // Mod değiştiğinde oynatmayı başlat
  };

  // Player kontrol fonksiyonları
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleVolumeChange = (e) => setVolume(parseInt(e.target.value));

  // Şarkı geçiş fonksiyonları
  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      handleSelectVideo(searchResults[prevIndex].id, prevIndex);
    }
  };

  const handleNext = () => {
    if (currentSongIndex < searchResults.length - 1) {
      const nextIndex = currentSongIndex + 1;
      handleSelectVideo(searchResults[nextIndex].id, nextIndex);
    }
  };

  return (
    <div id="appContainer" className="relative min-h-screen bg-black">
      <header
        id="header"
        className="absolute top-0 left-0 w-full flex items-center p-4 bg-black text-white shadow-md z-50"
      >
        <img id="logo" src="/images/logo.png" alt="Musicle Logo" />
        <div id="searchSection" className="ml-4 flex-grow">
          <SearchBar
            setSearchResults={setSearchResults}
            setIsLoading={setIsLoading}
            setError={setError}
            setSelectedVideo={(videoId) => handleSelectVideo(videoId, -1)}
          />
        </div>
      </header>

      <main
        id="mainContent"
        className="w-full min-h-screen  bg-gray-700 flex flex-col pt-[80px]"
      >
        <div
          id="playerAndListArea"
          className="flex flex-col md:flex-row bg-gray-700 p-4 w-full flex-grow gap-4"
        >
          <div
            id="playerArea"
            className="w-full md:w-1/2 flex flex-col relative"
          >
            <Player
              videoId={selectedVideo}
              songs={searchResults}
              onSelect={handleSelectVideo}
              isPlaying={isPlaying}
              onPlay={handlePlay}
              onPause={handlePause}
              mode={mode}
              volume={volume}
              onModeChange={handleModeChange}
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={currentSongIndex > 0}
              hasNext={currentSongIndex < searchResults.length - 1}
              showWatchMode={showWatchMode}
            />
            <div
              id="muzik-calar-kontrol"
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8 bg-black/60 backdrop-blur-md p-4 rounded-full shadow-lg"
            >
              <button
                id="onceki-sarki-butonu"
                onClick={handlePrevious}
                disabled={currentSongIndex <= 0}
                className={`text-white hover:text-blue-300 focus:outline-none transition ${
                  currentSongIndex <= 0 ? "opacity-30 cursor-not-allowed" : ""
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 18.9999L3 12.9999L11 5.9999M11 18.9999V5.9999M21 18.9999L13 12.9999L21 5.9999" />
                </svg>
              </button>
              <button
                id="oynat-duraklat-butonu"
                onClick={isPlaying ? handlePause : handlePlay}
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 focus:outline-none transition"
              >
                {isPlaying ? (
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                )}
              </button>
              <input
                id="ses-seviyesi-kontrol"
                type="range"
                min="0"
                max="300"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24"
              />
              <button
                id="sonraki-sarki-butonu"
                onClick={handleNext}
                disabled={currentSongIndex >= searchResults.length - 1}
                className={`text-white hover:text-purple-300 focus:outline-none transition ${
                  currentSongIndex >= searchResults.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : ""
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 5.9999L21 12.9999L13 18.9999M13 5.9999V18.9999M3 5.9999L11 12.9999L3 18.9999" />
                </svg>
              </button>
            </div>
          </div>
          <div id="songListArea" className="w-full md:w-1/2 flex flex-col">
            {error && (
              <div className="bg-red-500 text-white p-4 rounded mb-4">
                {error}
              </div>
            )}
            <SongList
              searchResults={searchResults}
              setSelectedVideo={handleSelectVideo}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>

      <footer id="footer" className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MusicPlay - Tüm Hakları Bende :)
      </footer>
    </div>
  );
}

export default App;
