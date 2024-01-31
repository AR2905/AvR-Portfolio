import React, { useEffect } from 'react';

const Preloader = ({ loading, setLoading }) => {
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [setLoading]);

  return (
    <div id={loading ? "preloader" : "preloader-none"}></div>
  );
};

export default Preloader;
