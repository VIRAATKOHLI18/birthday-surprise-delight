import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 15,
        delay: 0,
        duration: Math.random() * 2 + 3,
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 800);

    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute floating-heart"
          style={{
            left: `${heart.x}%`,
            bottom: '-50px',
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-birthday-red fill-birthday-red opacity-80"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
