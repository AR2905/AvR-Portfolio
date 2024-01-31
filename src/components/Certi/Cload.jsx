import React, { useRef, useEffect, useState } from 'react';

const useLazyImage = (src) => {
    const imgRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoading(false);
      };
  
      return () => {
        img.onload = null;
      };
    }, [src]);
  
    return [imgRef, isLoading];
};
  
const Cload = ({ src, alt, placeholderImg , className }) => {
    const [imgRef, isLoading] = useLazyImage(src);
  
    return (
      <div >
        {isLoading && (
          <img
            src={placeholderImg}
            alt={alt}
            className = {className}
          />
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className = {className}

        />
      </div>
    );
};

export default Cload;
