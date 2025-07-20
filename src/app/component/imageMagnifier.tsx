import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { ImageMagnifierProps } from '../utils/types';


const ImageMagnifier = ({ src, width, height, zoom = 2 }:ImageMagnifierProps) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [isZoomVisible, setZoomVisible] = useState(false);
  const imgRef = useRef(null);

  const handleMouseMove = (e:any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.pageXOffset) / width) * 100;
    const y = ((e.pageY - top - window.pageYOffset) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className="border relative overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${zoom * 100}%`,
        backgroundPosition,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setZoomVisible(true)}
      onMouseLeave={() => setZoomVisible(false)}
    >
      <Image
        ref={imgRef}
        src={src}
        alt="product"
        width={width}
        height={height}
        className="rounded"
        style={{
          width: '100%',
          height: '100%',
          opacity: isZoomVisible ? 0 : 1,
          transition: 'opacity 0.3s',
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
