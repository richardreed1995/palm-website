"use client";

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

interface WistiaVideoProps {
  mediaId?: string;
  className?: string;
}

const WistiaVideo = ({ mediaId = "oq4w5gmsm6", className = "" }: WistiaVideoProps) => {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !videoRef.current) return;

    // Ensure the custom element is defined after scripts load
    const checkWistiaPlayer = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        // Create the wistia-player element dynamically
        if (videoRef.current) {
          videoRef.current.innerHTML = '';
          const player = document.createElement('wistia-player') as any;
          player.setAttribute('media-id', mediaId);
          player.setAttribute('aspect', '1.7777777777777777');
          player.style.width = '100%';
          videoRef.current.appendChild(player);
        }
      }
    };

    // Check periodically until Wistia is loaded
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).Wistia) {
        checkWistiaPlayer();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [mediaId, isClient]);

  if (!isClient) {
    return (
      <div className={`w-full aspect-video bg-gray-100 animate-pulse ${className}`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-400">Loading video...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Load Wistia scripts with Next.js Script component */}
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Wistia player script loaded');
        }}
      />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Wistia embed script loaded');
        }}
      />
      
      {/* Styling for loading state */}
      <style jsx>{`
        wistia-player:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      
      {/* The Wistia player container */}
      <div className={`w-full ${className}`}>
        <div 
          ref={videoRef}
          className="w-full aspect-video"
          style={{
            background: `center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch')`,
            filter: 'blur(5px)'
          }}
        />
      </div>
    </>
  );
};

export default WistiaVideo;
