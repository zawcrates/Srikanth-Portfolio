// HomeSlide — full-screen viewport content (no menu, CTA, or pagination — those are persistent overlays)
export default function HomeSlide() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-[var(--background)]">
      <div className="flex-1 w-full flex flex-col justify-start px-6 md:px-12 lg:px-20 pt-[60px] md:pt-[80px] xl:pt-[100px] pb-6 select-none overflow-hidden">

        {/* Header row: Name + Subtitle */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full shrink-0 pt-2">
          <h1 className="font-sunroll text-[var(--text)] font-normal tracking-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] leading-none pt-4">
            SRIKANTH K
          </h1>
          <div className="font-afacad text-[var(--text)] font-normal text-left md:text-right whitespace-pre-line pt-2 mt-3 md:mt-0 text-xl sm:text-2xl md:text-3xl xl:text-[32px] leading-tight max-w-[549px]">
            {"AIML Student\n& Product Designer"}
          </div>
        </div>

        {/* About paragraph */}
        <div className="mt-5 md:mt-10 xl:mt-[64px] w-full flex justify-start shrink-0">
          <p className="w-full md:max-w-[680px] xl:max-w-[781px] text-sm sm:text-base md:text-lg xl:text-[20px] font-normal text-[var(--text)] font-sans leading-relaxed xl:leading-[1.35] ml-0 md:ml-12 lg:ml-16 xl:ml-[58px]">
            Hello, I&apos;m Srikanth — a designer and curious builder who enjoys exploring the space between design and technology.
            <br /><br />
            I work on technical projects, experiment with new ideas, and enjoy understanding how things work beneath the surface. Not a regular vibe coder chasing quick results; learning the fundamentals, questioning the process, and building with intention matter more. Every project is an opportunity to explore, learn, and create something meaningful.
          </p>
        </div>

      </div>
    </div>
  );
}
