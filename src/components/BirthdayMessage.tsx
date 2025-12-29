const BirthdayMessage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
      <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-foreground drop-shadow-lg">
        Happy
        <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
          Birthday
        </span>
      </h1>
      <p className="mt-4 font-script text-3xl md:text-4xl lg:text-5xl text-secondary drop-shadow-md">
        Miss Bose
      </p>
    </div>
  );
};

export default BirthdayMessage;
