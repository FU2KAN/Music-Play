const express = require("express");
const axios = require("axios");
const router = express.Router();
const cors = require("cors");

// YouTube API'den arama sonuçlarını almak için GET isteği
router.get("/", async (req, res) => {
  try {
    const { q } = req.query; // Arama sorgusu

    if (!q) {
      return res.status(400).json({ error: "Search query is required" });
    }

    // YouTube API URL
    const apiUrl = "https://www.googleapis.com/youtube/v3/search";

    // API isteği
    const response = await axios.get(apiUrl, {
      params: {
        part: "snippet",
        maxResults: 10,
        q: q,
        type: "video",
        videoCategoryId: "10", // Müzik kategorisi
        key: process.env.YOUTUBE_API_KEY, // API anahtarı, .env'den alınır
      },
    });

    // Sonuçları frontend'e uygun formatta düzenleme
    const videos = response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
    }));

    return res.json(videos); // Sonuçları geri gönder
  } catch (error) {
    console.error("YouTube API Error:", error.response?.data || error.message);
    return res.status(500).json({
      error: "Failed to fetch results from YouTube",
      details: error.response?.data?.error?.message || error.message,
    });
  }
});

module.exports = router;
