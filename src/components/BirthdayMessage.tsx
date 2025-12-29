const BirthdayMessage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-4">
      <div className="bg-background/40 backdrop-blur-sm rounded-3xl px-8 py-6 border border-primary/30 shadow-2xl">
        <h1 className="font-script font-bold tracking-wide">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-secondary">
            Happy
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-primary via-birthday-rose to-accent bg-clip-text text-transparent mt-2">
            Birthday
          </span>
        </h1>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary" />
          <p className="font-script text-3xl md:text-5xl lg:text-6xl text-foreground">
            Miss Bose
          </p>
          <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary" />
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
