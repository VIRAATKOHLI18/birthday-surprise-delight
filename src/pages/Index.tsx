import Carousel3D from '@/components/Carousel3D';
import FloatingHearts from '@/components/FloatingHearts';
import Fireworks from '@/components/Fireworks';
import ConfettiButton from '@/components/ConfettiButton';
import BackgroundMusic from '@/components/BackgroundMusic';
import BirthdayMessage from '@/components/BirthdayMessage';
import BirthdayLetter from '@/components/BirthdayLetter';

// Your uploaded photos - URL encoded for spaces
const birthdayImages = [
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.54.46%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.55.07%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.55.23%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.55.37%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.55.49%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.56.04%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.56.29%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.56.41%20AM.jpeg',
  '/photo/WhatsApp%20Image%202025-12-23%20at%203.56.54%20AM.jpeg',
];

// Background music path - URL encoded for spaces
const musicPath = '/music/WhatsApp%20Audio%202025-12-30%20at%209.45.21%20PM.mpeg';

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