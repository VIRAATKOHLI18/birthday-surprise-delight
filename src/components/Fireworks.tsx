import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  tx: number;
  ty: number;
}

interface Firework {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
}

const colors = [
  'hsl(340, 85%, 65%)', // pink
  'hsl(45, 100%, 60%)', // gold
  'hsl(280, 70%, 50%)', // purple
  'hsl(350, 80%, 70%)', // rose
  'hsl(0, 85%, 55%)',   // red
  'hsl(200, 80%, 60%)', // blue
];

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const createFirework = () => {
      const x = Math.random() * 80 + 10; // 10-90% of screen width
      const y = Math.random() * 50 + 10; // 10-60% of screen height

      const particles: Particle[] = [];
      const particleCount = Math.floor(Math.random() * 15) + 20;

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        particles.push({
          id: i,
          x: 0,
          y: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          tx: Math.cos(angle) * velocity,
          ty: Math.sin(angle) * velocity,
        });
      }

      const newFirework: Firework = {
        id: Date.now() + Math.random(),
        x,
        y,
        particles,
      };

      setFireworks(prev => [...prev, newFirework]);

      // Remove firework after animation
      setTimeout(() => {
        setFireworks(prev => prev.filter(f => f.id !== newFirework.id));
      }, 1500);
    };

    // Create fireworks periodically
    const interval = setInterval(createFirework, 1500);

    // Create initial fireworks
    setTimeout(createFirework, 500);
    setTimeout(createFirework, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {fireworks.map(firework => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
          }}
        >
          {firework.particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full firework-particle"
              style={{
                backgroundColor: particle.color,
                boxShadow: `0 0 6px ${particle.color}`,
                '--tx': `${particle.tx}px`,
                '--ty': `${particle.ty}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;
