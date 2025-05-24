import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({
  setSearchResults,
  setIsLoading,
  setError,
  setSelectedVideo,
}) => {
  const [query, setQuery] = useState("");
  const [backendUrl, setBackendUrl] = useState("");

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
    console.log("Backend URL:", url);
    setBackendUrl(url);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setSelectedVideo(null);

    try {
      const encodedQuery = encodeURIComponent(query);
      const url = `${backendUrl}/search`;

      console.log("Sending request to:", url, "with query:", encodedQuery);

      const response = await axios.get(url, {
        params: { q: encodedQuery },
      });

      console.log("Search response:", response.data);

      setSearchResults(response.data);

      if (response.data.length > 0) {
        setSelectedVideo(response.data[0].id);
      }
    } catch (error) {
      console.error("Search error details:", error);

      if (error.response) {
        console.error(
          "Backend error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response from backend:", error.request);
      } else {
        console.error("Request error:", error.message);
      }

      setError(
        error.response?.data?.error ||
          "Arama yapılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      );
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex">
        <input
          id="smg"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Şarkı arayın..."
          className="flex-grow p-3 rounded-l-lg border-2 focus:outline-none focus:ring-2 focus:ring-indigo-450 bg-gray-800 text-white w-full"
        />
        <button
          id="btn"
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-r-lg transition"
        >
          Ara
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
