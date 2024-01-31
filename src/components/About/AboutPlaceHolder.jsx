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
  
const AboutLazy = ({ src, alt, placeholderImg }) => {
    const [imgRef, isLoading] = useLazyImage(src);
  
    return (
      <div >
        {isLoading && (
          <img
            src={placeholderImg}
            alt={alt}
            className="img-fluid"
            style={{borderRadius : '20px', boxSizing : "border-box" , padding:"0 3rem 3rem 3rem"}}

          />
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="img-fluid"
          style={{
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.5s ease-in'
          }}
        />
      </div>
    );
};

export default AboutLazy;
