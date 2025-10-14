
import React, { useEffect, useState } from "react";
import { dummyPublishedImages } from "../assets/assets";
import Loading from "./Loading";
import { Download } from "lucide-react";

const Community = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    setImages(dummyPublishedImages);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName || "community-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-[#1c1c1c] min-h-screen transition-colors duration-300">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
        Community Images
      </h2>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative block overflow-hidden transition-all duration-300 shadow-md group rounded-2xl hover:shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={`Community post ${index}`}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 right-0 p-3 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="px-3 py-1 text-xs font-medium text-white rounded-full sm:text-sm bg-black/40 backdrop-blur-md">
                  Created by {item.userName}
                </p>
              </div>

              <button
                onClick={() => handleDownload(item.imageUrl, `image-${index + 1}.jpg`)}
                className="absolute p-2 text-white transition-all duration-300 rounded-full opacity-0 top-3 right-3 group-hover:opacity-100 bg-black/40 hover:bg-black/60 backdrop-blur-md"
                title="Download image"
              >
                <Download size={18} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-gray-600 dark:text-gray-400">
          No images found
        </p>
      )}
    </div>
  );
};

export default Community;
