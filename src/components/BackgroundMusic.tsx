import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  src?: string;
}

const BackgroundMusic = ({ src }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !src) return;

    // Attempt autoplay
    const attemptAutoplay = async () => {
      try {
        audio.muted = false;
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay blocked, show button
        console.log('Autoplay blocked, showing play button');
        setShowButton(true);
      }
    };

    attemptAutoplay();
  }, [src]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
        setShowButton(false);
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  if (!src) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={src} type="audio/mpeg" />
      </audio>

      {(showButton || !isPlaying) && (
        <button
          onClick={togglePlay}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-primary/90 backdrop-blur text-primary-foreground rounded-full shadow-lg hover:bg-primary transition-colors music-button"
        >
          {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
          <span className="font-script text-lg">
            {isPlaying ? 'Mute' : 'Play Music'}
          </span>
        </button>
      )}

      {isPlaying && !showButton && (
        <button
          onClick={togglePlay}
          className="fixed top-4 right-4 z-50 p-2 bg-primary/80 backdrop-blur text-primary-foreground rounded-full shadow-lg hover:bg-primary transition-colors"
          title="Mute music"
        >
          <Volume2 size={20} />
        </button>
      )}
    </>
  );
};

export default BackgroundMusic;
