"use client";

import { useState, useEffect } from 'react';

interface DirectVideoProps {
  videoUrl?: string;
  videoFile?: string;
  youtubeId?: string;
  vimeoId?: string;
  className?: string;
  title?: string;
  description?: string;
}

const DirectVideo = ({ 
  videoUrl, 
  videoFile, 
  youtubeId, 
  vimeoId, 
  className = "",
  title = "See Automation in Action",
  description = "Watch how these automation flows can transform your business operations and save you valuable time every week."
}: DirectVideoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Auto-hide loading after a timeout as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  const renderVideo = () => {
    // YouTube embed
    if (youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          className="w-full h-full absolute top-0 left-0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
        />
      );
    }

    // Vimeo embed
    if (vimeoId) {
      return (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?h=hash&dnt=1`}
          title={title}
          className="w-full h-full absolute top-0 left-0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          onLoad={handleVideoLoad}
        />
      );
    }

    // Direct video file or URL
    if (videoFile || videoUrl) {
      const source = videoFile ? `/${videoFile}` : videoUrl;
      return (
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={handleVideoLoad}
        >
          <source src={source} type="video/mp4" />
          <source src={source} type="video/webm" />
          <source src={source} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      );
    }

    // Fallback - placeholder
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Video not configured</p>
          <p className="text-sm">Add videoUrl, videoFile, youtubeId, or vimeoId prop</p>
        </div>
      </div>
    );
  };

  return (
    <section className={`relative overflow-hidden bg-gray-50 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="aspect-video relative">
              {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
              
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                  <div className="text-white text-center">
                    <svg className="mx-auto h-12 w-12 mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-red-400 mb-2">Video failed to load</p>
                    <p className="text-sm text-gray-300">Please check the video file path</p>
                  </div>
                </div>
              )}
              
              {renderVideo()}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Learn how to implement these automation strategies in your own business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectVideo;
