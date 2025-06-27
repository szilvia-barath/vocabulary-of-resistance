// src/components/ImageFetcher.jsx
import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'wCfWrIk6ouIYLvhQBHJnBqxmAUSzbVaa6B4EVjTm3Rs',
});

const fallbackKeywords = ['resistance', 'digital', 'technology', 'surveillance', 'rebellion', 'dystopia', 'freedom', 'control', 'power', 'society'];

const ImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const randomKeyword = fallbackKeywords[Math.floor(Math.random() * fallbackKeywords.length)];
        const result = await unsplash.search.getPhotos({
          query: randomKeyword,
          orientation: 'landscape',
          perPage: 1,
        });

        if (result.response && result.response.results.length > 0) {
          setImageUrl(result.response.results[0].urls.regular);
        } else {
          setImageUrl(null);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) {
    return <div>Loading image...</div>;
  }

  if (!imageUrl) {
    return <div>No image available.</div>;
  }

  return (
    <div className="image-container">
      <img src={imageUrl} alt="Thematic representation" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  );
};

export default ImageFetcher;
