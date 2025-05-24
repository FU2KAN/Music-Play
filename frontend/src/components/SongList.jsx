import React from "react";

const SongList = ({ searchResults, setSelectedVideo, isLoading }) => {
  if (isLoading) {
    return <div className="text-white">Yükleniyor...</div>;
  }

  if (!searchResults || searchResults.length === 0) {
    return null; // Şarkı bulunamadı mesajını kaldırdık
  }

  return (
    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
      {searchResults.map((song) => (
        <div
          key={song.id} // Unikal key kullanmak önemli
          onClick={() => setSelectedVideo(song.id)} // Şarkı tıklanınca video ID'sini seç
          className="flex items-center bg-white/10 hover:bg-white/20 cursor-pointer p-2 rounded-lg transition group"
        >
          <img
            src={`https://img.youtube.com/vi/${song.id}/default.jpg`}
            alt={song.title}
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          <div className="text-white">
            <p className="font-semibold">{song.title}</p>
            <p className="text-sm">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
