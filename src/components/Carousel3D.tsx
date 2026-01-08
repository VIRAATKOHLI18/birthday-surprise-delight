import { useRef, useEffect, useState, ReactNode } from 'react';

interface Carousel3DProps {
  images: string[];
}

const Carousel3D = ({ images }: Carousel3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  const radius = 240; // Distance from center
  const itemCount = images.length;
  const angleStep = 360 / itemCount;

  useEffect(() => {
    if (!spinRef.current) return;
    
    // Position items in a circle
    const items = spinRef.current.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      const angle = index * angleStep;
      (item as HTMLElement).style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
  }, [images, angleStep]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (spinRef.current) {
      spinRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !spinRef.current) return;
    const deltaX = e.clientX - startX;
    const newRotation = currentRotation + deltaX * 0.5;
    spinRef.current.style.transform = `rotateY(${newRotation}deg)`;
  };

  const handleMouseUp = () => {
    if (spinRef.current) {
      const transform = spinRef.current.style.transform;
      const match = transform.match(/rotateY\(([^)]+)deg\)/);
      if (match) {
        setCurrentRotation(parseFloat(match[1]));
      }
      spinRef.current.style.animationPlayState = 'running';
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (spinRef.current) {
      spinRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !spinRef.current) return;
    const deltaX = e.touches[0].clientX - startX;
    const newRotation = currentRotation + deltaX * 0.5;
    spinRef.current.style.transform = `rotateY(${newRotation}deg)`;
  };

  return (
    <div
      ref={containerRef}
      className="carousel-container relative w-full h-[350px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <div
        ref={spinRef}
        className="carousel-spin relative w-[120px] h-[150px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Photo ${index + 1}`}
            className="carousel-item object-cover bg-muted w-[120px] h-[150px] rounded-lg shadow-lg"
            onError={(e) => console.log('Image failed to load:', src)}
          />
        ))}
      </div>
      
      {/* Ground reflection */}
      <div
        className="absolute w-[600px] h-[100px] rounded-full ground-reflection"
        style={{
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%) rotateX(90deg)',
        }}
      />
    </div>
  );
};

export default Carousel3D;
