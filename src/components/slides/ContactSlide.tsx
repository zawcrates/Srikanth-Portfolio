// ContactSlide — premium high-contrast contact section
const CONTACTS = [
  { label: 'Email', value: 'srikanthk.work@gmail.com', href: 'mailto:srikanthk.work@gmail.com' },
  { label: 'Phone', value: '+91 6379237294', href: 'tel:+916379237294' },
  { label: 'LinkedIn', value: 'linkedin.com/in/srikanthk1102', href: 'https://www.linkedin.com/in/srikanthk1102/' },
  { label: 'GitHub', value: 'github.com/zawcrates', href: 'https://github.com/zawcrates' },
];

export default function ContactSlide() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-[var(--background)]">
      <div
        className="flex-1 flex flex-col justify-center px-6 md:pl-10 md:pr-[390px] xl:pl-16 pt-[98px] md:pt-10 pb-20 select-none overflow-hidden"
      >

        {/* Section label */}
        <p className="font-afacad text-[var(--text)] opacity-50 text-base mb-2 md:mb-4 font-medium">
          03 Contact
        </p>

        {/* Headline */}
        <h2 className="font-sunroll text-[var(--text)] text-3xl min-[380px]:text-4xl md:text-5xl xl:text-[72px] leading-none mb-8 md:mb-14">
          Let&apos;s Work<br />Together.
        </h2>

        {/* Contact rows */}
        <div className="flex flex-col gap-0 border-t-2 border-[var(--text)]">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--text)] py-3 sm:py-5
                         group hover:bg-[var(--accent)] transition-colors duration-150 px-2 sm:px-4 gap-1 sm:gap-0"
            >
              <span className="font-afacad text-[var(--text)] text-sm sm:text-base opacity-50 font-medium sm:w-28">
                {c.label}
              </span>
              <span className="font-afacad text-[var(--text)] text-base min-[380px]:text-lg sm:text-xl md:text-2xl font-medium group-hover:font-bold transition-all duration-150 truncate">
                {c.value}
              </span>
              <span className="font-afacad text-[var(--text)] text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 hidden sm:inline">
                →
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
