import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

const ConfettiButton = () => {
  const triggerConfetti = () => {
    // Fire confetti from multiple angles
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left side
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
        colors: ['#f472b6', '#fbbf24', '#a855f7', '#ef4444', '#38bdf8'],
      });

      // Right side
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ['#f472b6', '#fbbf24', '#a855f7', '#ef4444', '#38bdf8'],
      });
    }, 250);
  };

  return (
    <button
      onClick={triggerConfetti}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-script text-xl rounded-full shadow-lg hover:scale-110 transition-transform duration-300 music-button"
    >
      <Sparkles size={24} />
      Celebrate!
    </button>
  );
};

export default ConfettiButton;
