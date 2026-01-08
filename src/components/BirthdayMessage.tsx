const BirthdayMessage = () => {
  return (
    <div className="text-center px-4">
      <div className="bg-background/50 backdrop-blur-sm rounded-3xl px-6 py-4 border border-primary/30 shadow-2xl">
        <h1 className="font-script font-bold tracking-wide">
          <span className="block text-3xl md:text-5xl lg:text-6xl text-secondary">
            Happy
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-birthday-rose to-accent bg-clip-text text-transparent mt-1">
            Birthday
          </span>
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-secondary" />
          <p className="font-script text-2xl md:text-3xl lg:text-4xl text-foreground">
            Mummum
          </p>
          <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-secondary" />
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;