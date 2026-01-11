import Carousel3D from '@/components/Carousel3D';
import FloatingHearts from '@/components/FloatingHearts';
import Fireworks from '@/components/Fireworks';
import ConfettiButton from '@/components/ConfettiButton';
import BackgroundMusic from '@/components/BackgroundMusic';
import BirthdayMessage from '@/components/BirthdayMessage';
import BirthdayLetter from '@/components/BirthdayLetter';

// Your uploaded photos - URL encoded for spaces
const birthdayImages = [
  '/photo/1.jpeg',
  '/photo/2.jpeg',
  '/photo/3.jpeg',
  '/photo/4.jpeg',
  '/photo/5.jpeg',
  '/photo/6.jpeg',
  '/photo/7.jpeg',
  '/photo/8.jpeg',
  '/photo/9.jpeg',
];

// Background music path - URL encoded for spaces
const musicPath = '/music/m.mpeg';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      {/* Effects layers */}
      <FloatingHearts />
      <Fireworks />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        {/* Birthday message above the gallery */}
        <BirthdayMessage />
        
        {/* 3D Carousel */}
        <div className="w-full max-w-4xl mx-auto mt-4">
          <Carousel3D images={birthdayImages} />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <BirthdayLetter />
          <ConfettiButton />
        </div>
      </div>

      {/* Background music */}
      <BackgroundMusic src={musicPath} />
    </div>
  );
};

export default Index;
