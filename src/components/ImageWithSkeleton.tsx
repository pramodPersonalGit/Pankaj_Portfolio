import React, { useState, useEffect } from 'react';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ 
  src, 
  alt, 
  className,
  skeletonClassName = "bg-secondary",
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset states if src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* Skeleton / Fallback */}
      {(!loaded || error) && (
        <div className={`absolute inset-0 z-0 flex items-center justify-center ${skeletonClassName} ${!error ? 'animate-pulse-slow' : ''}`}>
          {error ? (
            <span className="text-accent/50 text-sm font-medium tracking-widest uppercase">Image Unavailable</span>
          ) : (
            <div className="w-1/3 h-1/3 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
          )}
        </div>
      )}
      
      {/* Actual Image */}
      {src && !error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 z-10 relative ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
